import { css } from 'styled-components';

export const breakMiddle = '1200px';
export const breakPad = '1080px';
export const breakMobile = '768px';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const customBoxShadow = (insetShadow: string, bgColor?: string) => css`
  box-shadow: ${insetShadow}, var(--btnShadow);
  background: ${bgColor || '#f6d367'};
`;
