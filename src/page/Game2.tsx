import styled from 'styled-components';
import bgImage from '../assets/image/game_background.jpg';
import rocketImage from '../assets/image/my_rocket.png';
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

// class Enemy {
//     private canvas: HTMLCanvasElement;
//     private ctx: CanvasRenderingContext2D | null = null;
//     private position: EnemyPos = { x: 0, y: 0 };

//     constructor(canvas: HTMLCanvasElement) {
//       this.canvas = canvas;
//       this.ctx = this.canvas.getContext('2d');
//       this.enemyAnimation();
//     }

//     private enemyAnimation() {
//       this.draw();
//       this.y -= 2;
//       requestAnimationFrame(this.enemyAnimation.bind(this));
//     }

//     private draw() {
//       const { x, y } = this.position;
//       const enemyImage = loadImage('../assets/image/rocket.png');

//       if (!this.ctx || !enemyImage) return;

//       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//       this.ctx.drawImage(enemyImage, x, y, 60, 60);
//     }
//   }

// class Enemy {
//     x: number;
//     y: number;

//     constructor({ x, y }: EnemyPos) {
//       this.x = x;
//       this.y = y;
//     }

//     init() {
//       this.y = 0;
//       this.x = enemyRandomValue(0, CANVAS_WIDTH - 60);
//       enemyList.push(this);
//     }
//     update() {
//       this.y += 2; // 속도 조절

//       // if (this.y >= CANVAS_HEIGHT - 60) {

//       // }
//     }
// }

export default function Game() {
  const CANVAS_WIDTH = 700;
  const CANVAS_HEIGHT = 900;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [rocketX, setRocketX] = useState(CANVAS_WIDTH / 2 - 32);
  const rocketY = CANVAS_HEIGHT - 64;

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
  // 이미지 불러오기
  const loadImage = (src: string) => {
    const image = new Image();
    image.src = src;
    return image;
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      rocketX > 0 ? setRocketX((prev) => prev - 10) : setRocketX(0);
    }
    if (e.key === 'ArrowRight') {
      rocketX >= CANVAS_WIDTH - 64
        ? setRocketX(CANVAS_WIDTH - 64)
        : setRocketX((prev) => prev + 10);
    }
  };

  useEffect(() => {
    if (canvasRef?.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      setCtx(context);
    }
  }, [canvasRef]);

  // user rocket
  useEffect(() => {
    let requestAnimationId: number;

    const addEnemy = () => {
      const newEnemy = new Enemy(Math.random() * (CANVAS_WIDTH - 60), 0, 2);
      setEnemies((prev) => [...prev, newEnemy]);
    };

    // 애니메이션 처리
    const onAnimation = () => {
      const userRocket = loadImage(rocketImage);

      if (ctx) {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        enemies.forEach((enemy) => {
          enemy.update();
          ctx.fillStyle = 'red';
          ctx.fillRect(enemy.x, enemy.y, 30, 30);
        });

        // 로켓 이미지
        ctx.drawImage(userRocket, rocketX, rocketY, 64, 64);
      }
      requestAnimationId = window.requestAnimationFrame(onAnimation);
    };
    const interval = setInterval(addEnemy, 1000);

    // 리퀘스트 애니메이션 초기화
    requestAnimationId = window.requestAnimationFrame(onAnimation);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      // 기존 리퀘스트 애니메이션 캔슬
      window.cancelAnimationFrame(requestAnimationId);
      document.removeEventListener('keydown', onKeyDown);
      clearInterval(interval);
    };
  }, [ctx, enemies]);

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
