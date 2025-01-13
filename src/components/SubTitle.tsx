import styled from 'styled-components';

const Title = styled.h1`
  color: var(--yellow);
  font-size: 14rem;
  letter-spacing: -1rem;
  -webkit-text-stroke: 0.3rem #000;
  text-shadow: 0.8rem 0.8rem 0.4rem rgba(0, 0, 0, 0.6);
  line-height: 8rem;
  padding-bottom: 2rem;
`;

export default function SubTitle({ text }: { text: string }) {
  return <Title className='main_font'>{text}</Title>;
}
