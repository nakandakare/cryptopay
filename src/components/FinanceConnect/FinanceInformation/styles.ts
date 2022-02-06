import styled from 'styled-components';

export const FinanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const FinanceImage = styled.img`
  width: 26rem;
`;

export const FinanceTexts = styled.div`
  color: white;
  margin-top: 1rem;
`;

export const FinanaceTitle = styled.div`
  font-size: 3rem;
  line-height: 1;
  background-color: #fff;
  background-image: radial-gradient(at 4% 36%, hsla(0, 0%, 100%, 1) 0, transparent 53%),
    radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FinanaceText = styled.div`
  font-size: 1rem;
  color: white;
  padding-top: 0.8rem;
`;
