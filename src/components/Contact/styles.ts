import styled from 'styled-components';
import colors from '../../styles/colors';

export const Actions = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  gap: 4px;

  button {
    border: none;
    box-shadow: initial;
    background-color: transparent;

    &:hover {
      color: ${colors.grey};
      opacity: 0.8;
    }

    &.active {
      color: ${colors.yellow};
    }
  }
`;
