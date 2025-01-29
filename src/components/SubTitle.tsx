import styled from 'styled-components';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import TextPlugin from 'gsap/TextPlugin';
import { breakMobile, breakTablet } from 'assets/style/common';

gsap.registerPlugin(TextPlugin);
const Title = styled.h1`
  color: var(--yellow);
  font-size: 14rem;
  letter-spacing: -1rem;
  -webkit-text-stroke: 0.3rem #000;
  text-shadow: 0.8rem 0.8rem 0.4rem rgba(0, 0, 0, 0.6);
  line-height: 8rem;
  padding-bottom: 2rem;
  word-break: break-word;
  line-height: 11rem;

  @media (max-width: ${breakTablet}) {
    font-size: 12rem;
  }
  @media (max-width: ${breakMobile}) {
    font-size: 8rem;
  }

  &.sub {
    margin-top: 2rem;
  }
`;

interface SubTitle {
  text: string;
  className?: string;
}

export default function SubTitle({ text, className }: SubTitle) {
  const titleRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      duration: 2,
      text: text,
      delay: 0
    });
  }, []);
  return <Title ref={titleRef} className={`main_font ${className}`}></Title>;
}
