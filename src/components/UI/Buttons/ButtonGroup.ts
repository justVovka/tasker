import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;

  button:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  button:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;
