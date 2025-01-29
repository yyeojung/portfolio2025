import { css } from 'styled-components';

export const breakMiddle = '1200px';
export const breakTablet = '1080px';
export const breakMobile = '768px';

export const absolute = (left: string, top?: string) => css`
  position: absolute;
  left: ${left};
  ${left === '50%' && 'transform: translateX(-50%);'}
  ${top && `top: ${top};`}
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const customBoxShadow = (insetShadow: string, bgColor?: string) => css`
  box-shadow: ${insetShadow}, var(--btnShadow);
  background: ${bgColor || '#f6d367'};
`;
