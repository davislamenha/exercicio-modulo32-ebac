import styled, { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

a {
  text-decoration: none
}

ul {
  list-style: none;
}
`;

export const Button = styled.a`
  background: ${colors.primary};
  color: ${colors.white};
  border: 1px solid ${colors.primary};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  cursor: pointer;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition: 0.5s all;

  &:hover {
    background-color: initial;
    background-position: 0 0;
    color: ${colors.primary};
  }
`;

export const GreenButton = styled(Button)`
  background: ${colors.green};
  border-color: ${colors.green};

  &:hover {
    color: ${colors.green};
  }
`;

export const YellowButton = styled(Button)`
  background: ${colors.yellow};
  color: ${colors.grey};
  border-color: ${colors.yellow};

  &:hover {
    color: ${colors.yellow};
  }
`;

export const RedButton = styled(Button)`
  background: ${colors.red};
  border-color: ${colors.red};

  &:hover {
    color: ${colors.red};
  }
`;
