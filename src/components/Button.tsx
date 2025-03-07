import { customBoxShadow } from 'assets/style/common';
import { ReactNode } from 'react';
import styled from 'styled-components';

const CustomBtn = styled.button`
  height: 6rem;
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.6rem;
  color: #000;
  position: relative;
  ${customBoxShadow('inset -0.4rem -0.6rem 0rem 0rem #ffb300')}

  a {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
  }
  &::before {
    border-top: 0.5rem solid #000;
    border-bottom: 0.5rem solid #000;
  }
  &::after {
    border-left: 0.5rem solid #000;
    border-right: 0.5rem solid #000;
  }
  &:hover {
    transform: scale(1.05);
    ${customBoxShadow('inset -0.5rem -0.7rem 0rem 0rem #fdab1c', '#ffcf3a')};
  }
  &:active {
    transform: scale(1);
    ${customBoxShadow('inset 0.4rem 0.6rem 0rem 0rem #fdab1c', '#ffcf3a')}
  }

  &.red {
    ${customBoxShadow('inset -0.4rem -0.6rem 0rem 0rem #d63434', '#F06162')}
    &:hover {
      ${customBoxShadow('inset -0.5rem -0.7rem 0rem 0rem #cd2525', '#EC4445')}
    }
    &:active {
      ${customBoxShadow('inset 0.4rem 0.6rem 0rem 0rem #cd2525', '#EC4445')}
    }
  }

  &.blue {
    ${customBoxShadow('inset -0.4rem -0.6rem 0rem 0rem #3e8a96', '#5CAEBA')}
    &:hover {
      ${customBoxShadow('inset -0.5rem -0.7rem 0rem 0rem #348ea7', '#43a0ba')}
    }
    &:active {
      ${customBoxShadow('inset 0.4rem 0.6rem 0rem 0rem #348ea7', '#43a0ba')}
    }
  }
`;

interface ButtonProps {
  text: string;
  height?: string;
  width?: string;
  className?: string;
  color?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Button({
  text,
  height,
  width,
  className,
  color,
  children,
  onClick
}: ButtonProps) {
  return (
    <CustomBtn
      onClick={onClick}
      className={`main_font ${className || ''}`}
      style={{ width: width, height: height, background: color }}
    >
      {text}
      {children}
    </CustomBtn>
  );
}
