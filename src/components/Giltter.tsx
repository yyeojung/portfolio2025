import styled from 'styled-components';
import imgGlitter from '../assets/image/glitter.png';
import imgGlitter2 from '../assets/image/glitter2.png';
import imgGlitter3 from '../assets/image/glitter3.png';
import imgGlitter6 from '../assets/image/glitter6.png';
import imgGlitter8 from '../assets/image/glitter8.png';
import imgGlitter9 from '../assets/image/glitter9.png';

const imgSize = 14.4;

const GlitterWrap = styled.div`
  position: absolute;
  overflow: hidden;
  width: ${imgSize}rem;
  height: ${imgSize}rem;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: ${imgSize * 4}rem;
    height: ${imgSize}rem;
    image-rendering: pixelated;
    animation: starAnimation 0.6s steps(4) infinite;
  }
  .img6 {
    width: ${imgSize * 6}rem;
    animation: starAnimation 0.6s steps(6) infinite;
  }
  .img8 {
    width: ${imgSize * 8}rem;
    animation: starAnimation 0.6s steps(8) infinite;
  }

  @keyframes starAnimation {
    0% {
      transform: translate3d(0%, 0%, 0);
    }
    100% {
      transform: translate3d(-100%, 0%, 0);
    }
  }
`;
interface GlitterProps {
  type: 'type1' | 'type2' | 'type3' | 'type4' | 'type5' | 'type6';
  className?: string;
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
}

export default function Glitter({
  type,
  className,
  left,
  top,
  right,
  bottom
}: GlitterProps) {
  const imageMap = {
    type1: imgGlitter,
    type2: imgGlitter2,
    type3: imgGlitter3,
    type4: imgGlitter6,
    type5: imgGlitter8,
    type6: imgGlitter9
  };
  const selectedImage = imageMap[type];
  return (
    <>
      <GlitterWrap
        className={className}
        style={{
          left: `${left}rem`,
          top: `${top}rem`,
          right: `${right}rem`,
          bottom: `${bottom}rem`
        }}
      >
        <img
          src={selectedImage}
          className={
            type === 'type2'
              ? 'img6'
              : (type === 'type3' ?? 'type6')
                ? 'img8'
                : ''
          }
          alt='star'
        />
      </GlitterWrap>
    </>
  );
}
