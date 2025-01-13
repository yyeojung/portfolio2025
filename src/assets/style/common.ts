import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const customBoxShadow = (insetShadow: string, bgColor?: string) => css`
  box-shadow: ${insetShadow}, var(--btnShadow);
  background: ${bgColor || '#f6d367'};
`;
