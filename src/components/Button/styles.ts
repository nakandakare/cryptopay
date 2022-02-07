import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props: {
    bgTransparent?: boolean;
    height: number;
    noMargin?: boolean;
    border?: string;
    mdWidth?: string;
  }) => (props.bgTransparent ? 'transparent' : '#6925bf')};
  min-width: 6rem;
  width: 100%;
  height: ${(props: { height: number }) => `${props.height}px`};
  border-radius: 1.2rem;
  margin: ${(props: { noMargin?: boolean }) => (props.noMargin ? 0 : '0 1rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props: { border?: string }) => (props.border ? `solid 1px ${props.border}` : 'none')};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 960px) {
    width: ${(props: { mdWidth?: string }) => (props.mdWidth ? props.mdWidth : '100%')};
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
