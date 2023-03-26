import React, { useMemo } from 'react';
import Searchbox from '../../components/Searchbox';
import { Text } from '../../styles/style';
import { Heading } from './style';
import tw from 'twin.macro';
import { ContactList } from '../../types/index';
interface HeaderProps {
  state: string;
  length: number;
  setState: (text: string) => void;
}

const HeaderContainer = tw.div`flex flex-col gap-2`;

const Header = ({ length, setState, state }: HeaderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState(e.currentTarget.value);
  };

  return (
    <HeaderContainer>
      <Heading>My Contacts</Heading>
      <Text>Friends ({length})</Text>
      <Searchbox onChange={handleChange} value={state} />
    </HeaderContainer>
  );
};

export default Header;
