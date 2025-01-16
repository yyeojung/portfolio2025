import styled from 'styled-components';
import bgImage from '../assets/image/game_background.jpg';
import rocketImageSrc from '../assets/image/my_rocket.png';
import enemyImageSrc from '../assets/image/rocket.png';
import bulletSrc from '../assets/image/bullet.png';
import { flexCenter } from 'assets/style/common';
import { useEffect, useRef, useState } from 'react';

const GameWrap = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    background: url(${bgImage}) no-repeat center/cover fixed;
    filter: blur(1rem);
    width: 100%;
    height: 100%;
    transform: scale(1.1);
    position: absolute;
  }
  ${flexCenter}

  .game_canvas {
    position: relative;
    width: 100%;
    height: 100vh;
    ${flexCenter}

    canvas {
      max-width: 80rem;
      width: 100%;
      height: 85vh;
      background: url(${bgImage}) no-repeat center/cover;
    }

    .score {
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 3rem;
    }
  }

  .gameover,
  .win {
    position: absolute;
    display: none;
  }
`;

export default function Game() {
  const CANVAS_WIDTH = 700;
  const CANVAS_HEIGHT = 900;
  const ENEMY_SPEED = 2;
  const BULLET_SPEED = 4;
  const ROCKET_SPEED = 5;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [keysArr, setKeysArr] = useState<string[]>([]);
  const [rocketX, setRocketX] = useState(CANVAS_WIDTH / 2 - 32);
  const rocketY = CANVAS_HEIGHT - 64;
  const rocketXRef = useRef(rocketX);
  const bulletsRef = useRef(bullets);
  const enemiesRef = useRef(enemies);
  const keysArrRef = useRef(keysArr);

  useEffect(() => {
    bulletsRef.current = bullets;
    console.log(enemies, bullets);
  }, [bullets]);

  useEffect(() => {
    keysArrRef.current = keysArr;
  }, [keysArr]);

  useEffect(() => {
    rocketXRef.current = rocketX;
  }, [rocketX]);

  useEffect(() => {
    enemiesRef.current = enemies;
  }, [enemies]);

  class Enemy {
    x: number;
    y: number;
    speed: number;

    constructor(x: number, y: number, speed: number) {
      this.x = x;
      this.y = y;
      this.speed = speed;
    }

    update() {
      this.y += this.speed;
    }
  }

  class Bullet {
    x: number;
    y: number;
    speed: number;

    constructor(x: number, y: number, speed: number) {
      this.x = x;
      this.y = y;
      this.speed = speed;
    }

    update() {
      this.y -= this.speed;
    }
  }

  // 이미지 불러오기
  const loadImage = (src: string) => {
    const image = new Image();
    image.src = src;
    return image;
  };

  // 적 추가
  const addEnemy = () => {
    const newEnemy = new Enemy(
      Math.random() * (CANVAS_WIDTH - 64),
      0,
      ENEMY_SPEED
    );
    setEnemies((prev) => {
      const filterEnemies = prev
        .filter((enemy) => enemy.y < CANVAS_HEIGHT) // 캔버스 밖으로 나가면 배열에서 삭제
        .concat(newEnemy);

      return filterEnemies;
    });
  };

  // 총알 추가
  const addBullet = () => {
    const newBullet = new Bullet(
      rocketXRef.current,
      CANVAS_HEIGHT,
      BULLET_SPEED
    );
    setBullets((prev) => {
      const filterBullets = prev
        .filter((bullet) => bullet.y >= 0) // 캔버스 밖으로 나가면 배열에서 삭제
        .concat(newBullet);

      return filterBullets;
    });
  };

  const onKeyDown = (e: KeyboardEvent) => {
    setKeysArr((prev) => {
      if (!prev.includes(e.code)) {
        return [...prev, e.code];
      }
      return prev; // 이미 포함된 키는 미반영
    });
  };

  const onKeyUp = (e: KeyboardEvent) => {
    setKeysArr((prev) => prev.filter((key) => key !== e.code));

    if (e.code === 'Space') {
      addBullet();
    }
  };

  // 이미지 그리기
  const drawCanvas = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const userRocket = loadImage(rocketImageSrc);
    const enemyImage = loadImage(enemyImageSrc);
    const bulletImage = loadImage(bulletSrc);

    enemiesRef.current.forEach((enemy) => {
      enemy.update();
      ctx.drawImage(enemyImage, enemy.x, enemy.y, 64, 64);
    });

    bulletsRef.current.forEach((bullet) => {
      bullet.update();
      ctx.drawImage(bulletImage, bullet.x, bullet.y, 40, 40);
    });

    ctx.drawImage(userRocket, rocketXRef.current, rocketY, 64, 64);
  };

  useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      setCtx(context);
    }
  }, []);

  // user rocket
  useEffect(() => {
    let lastEnemyTime = Date.now();
    let requestAnimationId: number;

    // 애니메이션 처리
    const onAnimation = () => {
      if (Date.now() - lastEnemyTime >= 1000) {
        addEnemy();
        lastEnemyTime = Date.now(); // 적 생성되는 시간
      }

      if (keysArrRef.current.includes('ArrowLeft')) {
        setRocketX((prev) => Math.max(prev - ROCKET_SPEED, 0)); // 왼쪽 경계선 체크
      }
      if (keysArrRef.current.includes('ArrowRight')) {
        setRocketX((prev) => Math.min(prev + ROCKET_SPEED, CANVAS_WIDTH - 64)); // 오른쪽 경계선 체크
      }
      drawCanvas();
      requestAnimationId = window.requestAnimationFrame(onAnimation);
    };

    // 리퀘스트 애니메이션 초기화
    requestAnimationId = window.requestAnimationFrame(onAnimation);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      // 기존 리퀘스트 애니메이션 캔슬
      window.cancelAnimationFrame(requestAnimationId);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, [ctx]);

  return (
    <GameWrap>
      <div className='game_canvas'>
        <p className='score main_font'>
          SCORE: <span className='num'></span>
        </p>
        <canvas ref={canvasRef} className='canvas'></canvas>
      </div>
      <div className='gameover'>
        GAME OVER!
        <button>REPLAY</button>
      </div>
      <div className='win'>
        YOU WIN!
        <button>REPLAY</button>
      </div>
    </GameWrap>
  );
}
