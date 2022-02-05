import styled from 'styled-components';

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 0 1 auto;

  & :hover {
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  max-width: 12rem;
  max-height: 12rem;
`;
