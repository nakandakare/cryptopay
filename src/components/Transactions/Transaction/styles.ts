import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 1rem 1rem;
  background-color: rgb(24 25 24);
  border-radius: 10px;
  position: relative;
`;

export const InnerContainer = styled.div`
  padding: 2rem 1rem;
`;

export const AddressAndAmount = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AText = styled.a`
  color: white;
  font-weight: 500;
  text-decoration: none !important;
`;

export const Text = styled.div`
  color: white;
  font-weight: 500;
`;

export const Message = styled.div`
  color: white;
  font-weight: 500;
  margin: 2rem 0;
  word-break: break-all;
`;

export const TimeStampContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TimeStamp = styled.div`
  position: absolute;
  bottom: 0.75rem;
  padding: 0.75rem 1.25rem;
  background-color: black;
  width: fit-content;
  color: #6925bf;
  border-radius: 1.5rem;
`;

export const GifImage = styled.img`
  border-radius: 10px;
  background-size: cover;
  width: 100%;
  height: 16rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
