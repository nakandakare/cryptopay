/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Loader, StyledInput } from 'components';
import { FunctionComponent, useState } from 'react';
import { Container, InnerContainer, Inputs, Line, LoaderContainer } from './styles';

type FormProps = {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
};

type PaymentFormProps = {
  handleFormChange: (e: any, name: string) => void;
  formData: FormProps;
  handleFormSubmit: () => void;
  isLoading: boolean;
};

const PaymentForm: FunctionComponent<PaymentFormProps> = ({
  handleFormChange,
  formData,
  handleFormSubmit,
  isLoading
}) => {
  return (
    <Container>
      <InnerContainer>
        <Inputs>
          <StyledInput
            placeholder="Address To"
            name="addressTo"
            type="text"
            handleChange={handleFormChange}
            value={formData.addressTo}
          />
          <StyledInput
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleFormChange}
            value={formData.amount}
          />
          <StyledInput
            placeholder="Keyword (Gif)"
            name="keyword"
            type="text"
            handleChange={handleFormChange}
            value={formData.keyword}
          />
          <StyledInput
            placeholder="Enter Message"
            name="message"
            type="text"
            handleChange={handleFormChange}
            value={formData.message}
          />
        </Inputs>
        <Line />
        {isLoading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <Button
            text={'Send Now'}
            height={42}
            onClick={handleFormSubmit}
            noMargin
            bgTransparent
            border="#3d4f7c"
          />
        )}
      </InnerContainer>
    </Container>
  );
};

export default PaymentForm;
