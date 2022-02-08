import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  margin-right: 6rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 959px) {
    margin-right: 0;
  }
`;
