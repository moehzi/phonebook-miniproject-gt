import React from 'react';
import Searchbox from '../../components/Searchbox';
import { Text } from '../../styles/style';
import { HeaderContainer, Heading, IconContainer } from './style';
import IconPlus from '../../components/IconPlus/IconPlus';
interface HeaderProps {
  state: string;
  length: number;
  setState: (text: string) => void;
}

const Header = ({ length, setState, state }: HeaderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState(e.currentTarget.value);
  };

  return (
    <HeaderContainer>
      <IconContainer>
        <Heading>My Contacts</Heading>
        <IconPlus />
      </IconContainer>
      <Text>Friends ({length})</Text>
      <Searchbox onChange={handleChange} value={state} />
    </HeaderContainer>
  );
};

export default Header;
