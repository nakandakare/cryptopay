import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 4rem;
`;

export const Title = styled.div`
  font-size: 3rem !important;
  line-height: 1.2;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 2rem 0;
`;

export const Steps = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 959px) {
    flex-direction: column;
    align-items: center;
  }
`;
