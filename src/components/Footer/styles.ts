import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 7rem;
  padding: 0 6%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 1rem;
`;

export const TopContainer = styled.div`
  height: 55%;
  width: 100%;
  border-bottom: 1px solid #ffffff;
  text-align: center;
`;

export const BottomContainer = styled.div`
  height: 45%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  color: white;
`;
