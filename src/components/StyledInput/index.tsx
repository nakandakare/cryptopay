import React from 'react';
import { Input } from './styles';

type InputProps = {
  placeholder: string;
  name: string;
  type: string;
  value?: string | number;
  handleChange: (e: React.FormEvent<HTMLInputElement>, name: string) => void;
};

const StyledInput = ({ placeholder, name, type, value, handleChange }: InputProps) => (
  <Input
    placeholder={placeholder}
    type={type}
    step={'0.0001'}
    value={value}
    onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e, name)}
  />
);

export default StyledInput;
