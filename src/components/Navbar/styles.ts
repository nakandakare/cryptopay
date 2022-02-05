import styled from 'styled-components';
import { HiMenuAlt4 } from 'react-icons/hi';

export const Container = styled.div`
  height: 5rem;
  display: flex;
  justify-content: ${(props: { isMobile: boolean }) => (props.isMobile ? 'space-between' : 'space-around')};
  align-items: center;
  padding: 0 5%;
  width: 100%;
  box-sizing: border-box;
`;

export const DrawerIcon = styled(HiMenuAlt4)`
  font-size: 2rem;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
