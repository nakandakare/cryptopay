import { FunctionComponent } from 'react';
import { LogoImg, LogoContainer } from './styles';

const Logo: FunctionComponent = () => {
  return (
    <LogoContainer>
      <LogoImg src={'images/logo.png'} alt="logo" />
    </LogoContainer>
  );
};

export default Logo;
