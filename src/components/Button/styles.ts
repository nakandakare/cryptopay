import styled from 'styled-components';

export const Container = styled.div`
  background-color: #6925bf;
  min-width: 6rem;
  width: 100%;
  height: ${(props: { height: number }) => `${props.height}px`};
  border-radius: 1.2rem;
  margin: ${(props: { height: number; noMargin?: boolean }) => (props.noMargin ? 0 : '0 1rem')};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.p`
  color: white;
  font-weight: 500;
  font-size: ${(props: { fontSize?: string }) => (props.fontSize ? props.fontSize : '1rem')};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
