import styled from 'styled-components';
import imgBackground from '../assets/image/game_background.jpg';
import imgMyRocket from '../assets/image/my_rocket.png';
import imgEnemy from '../assets/image/rocket.png';
import imgBullet from '../assets/image/bullet.png';
import imgGameOver from '../assets/image/gameover.png';
import imgWin from '../assets/image/you_win.png';
import imgKeyArrow from '../assets/image/key_arrow.png';
import imgKeySpace from '../assets/image/key_space.png';
import { absolute, breakMobile, flexCenter } from 'assets/style/common';
import { useEffect, useRef, useState } from 'react';
import { Bullet, Enemy } from 'class/game';
import {
  BULLET_SIZE,
  BULLET_SPEED,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  ENEMY_SIZE,
  ENEMY_SPEED,
  ROCKET_SIZE,
  ROCKET_SPEED
} from 'constants/gameConstants';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const GameWrap = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    background: url(${imgBackground}) no-repeat center/cover fixed;
    filter: blur(1rem);
    width: 100%;
    height: 100%;
    transform: scale(1.1);
    position: absolute;
  }
  ${flexCenter}

  .game_canvas {
    position: relative;
    padding-top: 4rem;
    width: 100%;
    height: 100vh;
    ${flexCenter}

    .game_info {
      width: 100%;
      max-width: 80rem;
      ${absolute('50%', '2.4rem')};
      display: flex;
      gap: 2rem;
      align-items: center;
      justify-content: space-between;
      font-size: 3rem;

      .key {
        display: flex;
        li {
          display: flex;
          align-items: center;

          img {
            height: 4rem;
          }
        }
      }
    }
    canvas {
      max-width: 80rem;
      width: 100%;
      height: 85vh;
      background: url(${imgBackground}) no-repeat center/cover;
    }
  }

  .win,
  .gameover {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);

    h2 {
      width: 100%;
      max-width: 70rem;
      height: 40rem;
      background: url(${imgGameOver}) no-repeat center/ contain;
      &.img_win {
        background: url(${imgWin}) no-repeat center/ contain;
      }
    }

    .win_score {
      margin-top: 4rem;
      font-size: 4rem;
    }

    .retry_btn {
      margin-top: 4rem;
      display: flex;
      gap: 4rem;
    }
  }
`;

const OnlyPc = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);

  @media (max-width: ${breakMobile}) {
    display: flex;
    word-break: keep-all;
    text-align: center;
  }
`;

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const bulletsRef = useRef<Bullet[]>([]);
  const enemiesRef = useRef<Enemy[]>([]);
  const keysArrRef = useRef<string[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const rocketXRef = useRef(CANVAS_WIDTH / 2 - ROCKET_SIZE / 2);
  const rocketY = CANVAS_HEIGHT - ROCKET_SIZE;

  // 이미지 불러오기
  const loadImage = (src: string) => {
    const image = new Image();
    image.src = src;
    return image;
  };

  // 적 추가
  const addEnemy = () => {
    const newEnemy = new Enemy(
      Math.random() * (CANVAS_WIDTH - ENEMY_SIZE),
      0,
      ENEMY_SPEED
    );
    enemiesRef.current = [
      ...enemiesRef.current.filter((enemy) => enemy.y < CANVAS_HEIGHT),
      newEnemy
    ];
  };

  // 총알 추가
  const addBullet = () => {
    const newBullet = new Bullet(
      rocketXRef.current,
      CANVAS_HEIGHT,
      BULLET_SPEED,
      enemiesRef.current,
      onUpdateScore
    );
    bulletsRef.current = [
      ...bulletsRef.current.filter((bullet) => bullet.y >= 0),
      newBullet
    ];
  };

  // 점수 업데이트
  const onUpdateScore = () => {
    setScore((prev) => prev + 1);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (!keysArrRef.current.includes(e.code)) {
      keysArrRef.current = [...keysArrRef.current, e.code];
    }
  };

  const onKeyUp = (e: KeyboardEvent) => {
    keysArrRef.current = keysArrRef.current.filter((key) => key !== e.code);

    if (e.code === 'Space') {
      addBullet();
    }
  };

  // 이미지 그리기
  const drawCanvas = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const userRocket = loadImage(imgMyRocket);
    const enemyImage = loadImage(imgEnemy);
    const bulletImage = loadImage(imgBullet);

    enemiesRef.current.forEach((enemy) => {
      enemy.update();
      if (enemy.alive) {
        ctx.drawImage(enemyImage, enemy.x, enemy.y, ENEMY_SIZE, ENEMY_SIZE);
        if (enemy.gameOver) {
          setGameOver(true);
        }
      }
    });

    bulletsRef.current.forEach((bullet) => {
      if (bullet.alive) {
        bullet.update();
        bullet.attack();
        ctx.drawImage(
          bulletImage,
          bullet.x,
          bullet.y,
          BULLET_SIZE,
          BULLET_SIZE
        );
      }
    });

    ctx.drawImage(
      userRocket,
      rocketXRef.current,
      rocketY,
      ROCKET_SIZE,
      ROCKET_SIZE
    );
  };

  // 캔버스 그리기
  useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      setCtx(context);
    }

    const timer = setTimeout(() => {
      if (!gameOver) {
        setGameWin(true);
      }
    }, 60000);

    return () => {
      clearTimeout(timer);
    };
  }, [gameOver]);

  // game
  useEffect(() => {
    let lastEnemyTime = Date.now();
    let requestAnimationId: number;

    // 애니메이션 처리
    const onAnimation = () => {
      if (gameOver || gameWin) {
        return; // 게임오버
      }
      if (Date.now() - lastEnemyTime >= 1000) {
        addEnemy();
        lastEnemyTime = Date.now(); // 적 생성되는 시간
      }

      if (keysArrRef.current.includes('ArrowLeft')) {
        rocketXRef.current = Math.max(rocketXRef.current - ROCKET_SPEED, 0); // 왼쪽 경계선 체크
      }
      if (keysArrRef.current.includes('ArrowRight')) {
        rocketXRef.current = Math.min(
          rocketXRef.current + ROCKET_SPEED,
          CANVAS_WIDTH - ROCKET_SIZE
        ); // 오른쪽 경계선 체크
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
  }, [ctx, gameOver, gameWin]);

  return (
    <GameWrap>
      <OnlyPc>모바일 해상도에서는 지원하지 않습니다.</OnlyPc>
      <div className='game_canvas'>
        <div className='game_info sub_font'>
          <p className='score main_font'>SCORE: {score}</p>

          <ul className='key'>
            <li>
              <img src={imgKeyArrow} alt='키보드화살표' />
              <p>: move</p>
            </li>
            <li>
              <img src={imgKeySpace} alt='키보드스페이스' />
              <p>: attack</p>
            </li>
          </ul>
        </div>
        <canvas ref={canvasRef} className='canvas'></canvas>
      </div>
      {gameOver && (
        <div className='gameover'>
          <h2 aria-label='gameover'></h2>

          <div className='retry_btn'>
            <Button text='REPLAY' onClick={() => window.location.reload()} />
            <Button className='red' text='HOME'>
              <Link to='/'></Link>
            </Button>
          </div>
        </div>
      )}
      {gameWin && (
        <div className='win'>
          <h2 aria-label='win' className='img_win'></h2>
          <div className='win_score main_font'>YOUR SCORE: {score}</div>
          <div className='retry_btn'>
            <Button text='REPLAY' onClick={() => window.location.reload()} />
            <Button className='red' text='HOME'>
              <Link to='/'></Link>
            </Button>
          </div>
        </div>
      )}
    </GameWrap>
  );
}
