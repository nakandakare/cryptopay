import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;

  @media (max-width: 959px) {
    flex-direction: column;
  }
`;
