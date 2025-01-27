import { customBoxShadow } from 'assets/style/common';
import styled from 'styled-components';

const CustomTag = styled.div`
  width: max-content;
  height: 6rem;
  border-radius: 3rem;
  font-size: 3.2rem;
  text-align: center;
  padding: 0.3rem 2.4rem 0;
  ${customBoxShadow(
    'inset 0.4rem 0.4rem 0.4rem 0rem rgba(255, 255, 255, 0.477), inset -0.4rem -0.4rem 0rem 0rem rgba(0, 0, 0, 0.3)',
    '#9A30AE'
  )}
  text-shadow: var(--textShadow);
  border: 0.2rem solid #ffbf00;

  &.red {
    min-width: 20rem;
    background: var(--red);
  }
  &.yellow {
    min-width: 20rem;
    background: var(--yellow);
    border-color: var(--red);
  }
`;

interface TagProps {
  text: string;
  className?: string;
}

export default function Tag({ text, className }: TagProps) {
  return <CustomTag className={`main_font tag ${className}`}>{text}</CustomTag>;
}
