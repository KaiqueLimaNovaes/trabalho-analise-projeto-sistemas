import styled, { css } from 'styled-components';

const defaults = css`
  color: ${({ theme, color }) =>
    color ? theme.palette.primary[color] : theme.palette.primary.black};

  margin-top: 0;
  margin-bottom: 0;
  ${({ weight }) => weight ? `font-weight: ${weight}` : ''};
  ${({ center }) => center ? 'text-align: center' : 'text-align: unset'};
  ${({ underline }) => underline ? 'text-decoration: underline' : ''};
  ${({ link }) => link ? 'text-decoration: underline; cursor: pointer;' : ''};
`;

export const H1 = styled.h1`
  font-size: ${({ size }) => (size ? size : '34')}px;
  ${defaults}
`;

export const H2 = styled.h2`
  font-size: ${({ size }) => (size ? size : '28')}px;
  ${defaults}
`;

export const H3 = styled.h3`
  font-size: ${({ size }) => (size ? size : '20')}px;
  font-style: normal;
  font-weight: bold;
  ${defaults}
`;

export const Span = styled.span`
  font-size: ${({ size }) => (size ? size : '12')}px;
  ${defaults}
`;

export const P = styled.p`
  font-size: ${({ size }) => (size ? size : '12')}px;
  ${defaults}
`;

export const Link = styled.span`
  font-size: ${({ size }) => (size ? size : '12')}px;
  font-style: normal;
  font-weight: bold;
  ${defaults}

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

