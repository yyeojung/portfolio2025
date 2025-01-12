import styled from 'styled-components';

const Progress = styled.div`
  width: 100%;
  height: 3rem;
  background: #fff;
  position: relative;
  padding: 0 1rem;

  &::before {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 0.5rem;
    width: calc(100% - 2rem);
    height: 100%;
    border: 0.5rem solid #fff;
  }

  .inner {
    width: 0%;
    height: 100%;
    animation: progress 2s linear forwards;
    animation-delay: 3.5s;
    background: #11a418;
    box-shadow: inset 1rem 0.8rem 0 0 #43d101;
  }

  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export default function ProgressBar() {
  return (
    <Progress className='progress'>
      <div className='inner'></div>
    </Progress>
  );
}
