import styled from 'styled-components';
import bgImage from '../assets/image/game_background.jpg';
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
      background: url(${bgImage}) no-repeat;
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

export default function GameCCC() {
  const gameDivRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [userRocketX, setUserRocketX] = useState<number>(
    window.innerWidth / 2 - 32
  );
  const userRocketY = window.innerHeight - 64;
  const rocketSpeed = 5; // 유저 로켓 이동 속도
  let rocketImage: HTMLImageElement | null = null;
  let movingLeft = false;
  let movingRight = false;

  // 이미지 불러오기
  const loadImage = (src: string) => {
    const image = new Image();
    image.src = src;
    return image;
  };

  // 키 입력 핸들러
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') movingLeft = true;
    if (e.key === 'ArrowRight') movingRight = true;
    console.log(userRocketX);
  };
  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') movingLeft = false;
    if (e.key === 'ArrowRight') movingRight = false;
  };

  // 애니메이션
  const animate = () => {
    const context = contextRef.current;
    const canvas = canvasRef.current;
    if (!context || !canvas || !rocketImage) return;

    // 캔버스 초기화
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (movingLeft) setUserRocketX((prev) => Math.max(0, prev - rocketSpeed));
    if (movingRight)
      setUserRocketX((prev) => Math.min(canvas.width - 64, prev + rocketSpeed));

    context.drawImage(rocketImage, userRocketX, userRocketY, 64, 64);

    console.log('dkdjdklj');

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext('2d');
    contextRef.current = context;
    if (!context) return;

    rocketImage = loadImage('../assets/image/my_rocket.png');

    rocketImage.onload = () => {
      animate(); // 애니메이션 루프 시작
    };

    const gameDiv = gameDivRef.current;

    if (gameDiv) {
      gameDiv.addEventListener('keydown', onKeyDown);
      gameDiv.addEventListener('keyup', onKeyUp);
      gameDiv.focus();
      return () => {
        gameDiv.removeEventListener('keydown', onKeyDown);
        gameDiv.addEventListener('keyup', onKeyUp);
      };
    }
  }, []);

  return (
    <GameWrap>
      <div className='game_canvas' ref={gameDivRef} tabIndex={0}>
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
