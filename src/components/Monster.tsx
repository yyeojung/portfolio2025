import styled from 'styled-components';

const Wrap = styled.div`
  .hide_svg {
    position: absolute;
    height: 0;
    width: 0;
  }

  .fill_body {
    fill: #f550f7;
  }
  .fill_white {
    fill: #fff;
  }
  .fill_blue {
    fill: #2121ff;
  }

  .pac .ghost {
    height: 8rem;
    margin: 0 1rem;
  }

  .bodies {
    animation-name: moveSprite;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }

  @keyframes moveSprite {
    0%,
    49.9% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(-100%);
    }
  }
`;

export default function Monster() {
  return (
    <Wrap className='monster'>
      <svg
        className='hide_svg'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 560 280'
      >
        <defs>
          <g id='ghost'>
            <g className=''>
              <polygon
                className='fill_body'
                points='260 120 260 100 260 80 260 60 240 60 240 40 220 40 220 20 200 20 180 20 180 0 160 0 140 0 120 0 100 0 100 20 80 20 60 20 60 40 40 40 40 60 20 60 20 80 20 100 20 120 0 120 0 140 0 160 0 180 0 200 0 220 0 240 0 260 0 280 20 280 20 260 40 260 40 240 60 240 60 260 80 260 80 280 100 280 120 280 120 260 120 240 140 240 160 240 160 260 160 280 180 280 200 280 200 260 220 260 220 240 240 240 240 260 260 260 260 280 280 280 280 260 280 240 280 220 280 200 280 180 280 160 280 140 280 120 260 120'
              />
              <polygon
                className='fill_body'
                points='540 120 540 100 540 80 540 60 520 60 520 40 500 40 500 20 480 20 460 20 460 0 440 0 420 0 400 0 380 0 380 20 360 20 340 20 340 40 320 40 320 60 300 60 300 80 300 100 300 120 280 120 280 140 280 160 280 180 280 200 280 220 280 240 280 260 300 260 300 280 320 280 340 280 340 260 360 260 360 240 380 240 380 260 400 260 400 280 420 280 440 280 440 260 460 260 460 240 480 240 480 260 500 260 500 280 520 280 540 280 540 260 560 260 560 240 560 220 560 200 560 180 560 160 560 140 560 120 540 120'
              />
            </g>
          </g>
          <g id='ghostEyes'>
            <g>
              <g>
                <polygon
                  className='fill_white'
                  points='120 80 120 60 100 60 80 60 80 80 60 80 60 100 60 120 60 140 80 140 80 160 100 160 120 160 120 140 140 140 140 120 140 100 140 80 120 80'
                />
                <polygon
                  className='fill_blue'
                  points='120 100 100 100 100 120 100 140 120 140 140 140 140 120 140 100 120 100'
                />
              </g>
              <g>
                <polygon
                  className='fill_white'
                  points='240 80 240 60 220 60 200 60 200 80 180 80 180 100 180 120 180 140 200 140 200 160 220 160 240 160 240 140 260 140 260 120 260 100 260 80 240 80'
                />
                <polygon
                  className='fill_blue'
                  points='240 100 220 100 220 120 220 140 240 140 260 140 260 120 260 100 240 100'
                />
              </g>
            </g>
          </g>
        </defs>
      </svg>

      <div className='pac-container'>
        <div className='pac' id='pac'>
          <svg id='pinky' className='ghost pink' viewBox='0 0 280 280'>
            <use className='bodies' xlinkHref='#ghost' />
            <use xlinkHref='#ghostEyes' />
          </svg>
        </div>
      </div>
    </Wrap>
  );
}
