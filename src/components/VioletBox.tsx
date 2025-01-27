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
    z-index: 10;
  }
  .contents {
    display: block;
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

    img {
      width: 100%;
      height: 26rem;
      object-fit: cover;
      object-position: top;
      border-radius: 2rem;
    }

    .inner_title {
      display: flex;
      align-items: center;
      margin-bottom: 0.4rem;
      &::before {
        display: inline-block;
        content: '';
        width: 0.8rem;
        height: 2.7rem;
        background: #fff;
        margin-right: 1rem;
      }

      span {
        background: #fff;
        padding: 0 0.4rem;
        color: #333;
      }
    }
  }
  a:hover {
    background: var(--red);
  }
`;
interface BoxProps {
  text: string;
  children: ReactNode;
  className?: string;
  link?: string;
}

export default function VioletBox({
  text,
  className,
  children,
  link
}: BoxProps) {
  return (
    <Wrap className={`violet_box ${className}`}>
      <Tag className='yellow' text={text} />
      {link ? (
        <a
          href={link}
          className='contents'
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </a>
      ) : (
        <div className='contents'>{children}</div>
      )}
    </Wrap>
  );
}
