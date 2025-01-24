import styled from 'styled-components';

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

  &.sub {
    margin-top: 2rem;
  }
`;

interface SubTitle {
  text: string;
  className?: string;
}

export default function SubTitle({ text, className }: SubTitle) {
  return <Title className={`main_font ${className}`}>{text}</Title>;
}
