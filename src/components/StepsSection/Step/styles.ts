import styled from 'styled-components';

export const Container = styled.div`
  width: 17.5rem;
  height: 16rem;

  border-right: ${(props: { lastStep?: boolean }) =>
    props.lastStep ? 'none' : 'solid 3px rgba(116, 143, 181, 0.15)'};

  @media (max-width: 959px) {
    border-right: 0;
    border-bottom: ${(props: { lastStep?: boolean }) =>
      props.lastStep ? 'none' : 'solid 3px rgba(116, 143, 181, 0.15)'};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15% 0;
`;

export const Image = styled.img`
  width: 64px;
`;

export const StepBadge = styled.div`
  width: fit-content;
  display: inline-block;
  margin: 16px 0;
  padding: 0 10px;
  border-radius: 14px;
  background: #748fb5;
  font-size: 13px;
  font-weight: 900;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Text = styled.div`
  color: white;
  text-align: center;
  font-weight: 500;
  padding: 0 1.2rem;
`;
