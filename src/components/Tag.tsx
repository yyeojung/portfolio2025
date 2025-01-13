import { customBoxShadow } from 'assets/style/common';
import styled from 'styled-components';

const CustomTag = styled.div`
  width: fit-content;
  height: 6rem;
  border-radius: 3rem;
  font-size: 3.2rem;
  padding: 0.3rem 2.4rem 0;
  ${customBoxShadow(
    'inset 0.4rem 0.4rem 0.4rem 0rem rgba(255, 255, 255, 0.477), inset -0.4rem -0.6rem 0rem 0rem rgba(0, 0, 0, 0.4)',
    '#9A30AE'
  )}
  text-shadow: var(--textShadow);
  border: 0.3rem solid #ffbf00;

  &.red {
    background: var(--red);
  }
  &.yellow {
    background: #ffbf00;
  }
`;

export default function Tag({ text }: { text: string }) {
  return <CustomTag className='main_font tag'>{text}</CustomTag>;
}
