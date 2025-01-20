import styled from 'styled-components';
import Tag from './Tag';
import { ReactNode } from 'react';
import { customBoxShadow } from 'assets/style/common';

const Wrap = styled.div`
  position: relative;

  .tag {
    position: absolute;
    top: -3rem;
    left: -2rem;
  }
  .contents {
    border-radius: 3rem;
    padding: 5rem 4rem 4rem;
    ${customBoxShadow(
      'inset 0.4rem 0.4rem 0.4rem 0rem rgba(255, 255, 255, 0.477), inset -0.4rem -0.4rem 0rem 0rem rgba(0, 0, 0, 0.3)',
      'var(--violet);'
    )}
    & * {
      line-height: 1.5;
      font-size: 1.8rem;
    }
  }
`;
interface BoxProps {
  text: string;
  children: ReactNode;
  className?: string;
}

export default function VioletBox({ text, className, children }: BoxProps) {
  return (
    <Wrap className={`violet_box ${className}`}>
      <Tag className='yellow' text={text} />
      <div className='contents'>{children}</div>
    </Wrap>
  );
}
