import styled from 'styled-components';

export const Container = styled.div`
  width: 24rem;
  background-color: rgb(39, 51, 89, 0.4);
  border-radius: 1rem;
  margin-top: 1.2rem;

  @media (max-width: 479px) {
    width: 20rem;
  }
`;

export const InnerContainer = styled.div`
  padding: 1.725rem 1.5rem;
`;

export const Inputs = styled.div``;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 1rem 0;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
