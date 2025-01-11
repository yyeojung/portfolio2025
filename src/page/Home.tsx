import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  background: #000;
  background-image: linear-gradient(to bottom, #6a0275 10%, #040c4a 60%);

  .main {
    width: 100%;
    height: 100%;
    min-height: 40rem;
    overflow: hidden;
    filter: blur(0.1rem);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-image: linear-gradient(
        transparent 70%,
        rgba(0, 0, 0, 0.5) 30%
      );

      background-size: 0.3rem 0.3rem;
      z-index: 601;
      pointer-events: none;
    }
  }
`;

const Grid = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -75vh;
  left: 50%;
  margin-left: -100vw;
  width: 200vw;
  height: 150vh;
  transform: scaleY(0);
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(236, 0, 140, 0.5) 25%,
      rgba(236, 0, 140, 0.9) 26%,
      transparent 27%,
      transparent 74%,
      rgba(236, 0, 140, 0.5) 75%,
      rgba(236, 0, 140, 0.9) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(236, 0, 140, 0.75) 25%,
      rgba(236, 0, 140, 0.25) 26%,
      transparent 27%,
      transparent 74%,
      rgba(236, 0, 140, 0.75) 75%,
      rgba(236, 0, 140, 0.25) 76%,
      transparent 77%,
      transparent
    );

  background-size: 5rem 5rem;

  &.animating {
    animation: fly 1s linear;
    animation-iteration-count: infinite;
  }

  @keyframes fly {
    0% {
      transform: perspective(30rem) rotateX(80deg) translateY(0%);
    }
    100% {
      transform: perspective(30rem) rotateX(80deg) translateY(5rem);
    }
  }
`;

const Logo = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 501;

  .logo_wrap {
    transform: scale(0);
    text-align: center;
    height: 64rem;
    width: 80%;
    border-radius: 3rem;
    border: 0.5rem solid #fff;
  }

  h1 {
    font-size: 14rem;
    letter-spacing: -1rem;
    line-height: 10rem;
    text-shadow: 0.7rem 0.6rem 0.2rem #d62c2f;
  }
`;

export default function Home() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(gridRef.current, {
      transformPerspective: 400,
      transformOrigin: '50% 50%'
    });

    const anim2Pops = {
      rotationX: 75,
      y: '0%',
      ease: 'power2.in',
      transformPerspective: 300,
      onComplete: () => gridRef.current?.classList.add('animating')
    };

    tl.to(gridRef.current, { scaleY: 1.5, ease: 'power3.in', duration: 1 })
      .to(gridRef.current, { ...anim2Pops, duration: 1 }, '+=0.3')
      .to(logoRef.current, { scale: 1, duration: 1 });
  }, []);

  return (
    <Wrapper>
      <div className='main'>
        <Grid ref={gridRef} />
        <Logo>
          <div ref={logoRef} className='logo_wrap'>
            <h1 className='main_font'>PORTFOLIO</h1>
          </div>
        </Logo>
      </div>
    </Wrapper>
  );
}
