import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 0 1 auto;
`;

export const Item = styled.p`
  color: white;
  margin: 0;
  display: flex;
  font-weight: 500;
  padding: 0 1rem;
  height: fit-content;

  &:hover {
    cursor: pointer;
  }
`;
