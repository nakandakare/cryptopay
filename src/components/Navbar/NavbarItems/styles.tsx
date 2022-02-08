import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 0 1 auto;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Item = styled.div`
  color: white;
  margin: 0;
  display: flex;
  font-weight: 500;
  padding: 0 1rem;
  height: fit-content;
`;

export const SoonBadge = styled.div`
  background-color: rgb(104, 104, 104);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 0.2rem;
  padding: 0 0.5rem;
  padding-bottom: 0.2rem;
  position: relative;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
`;
