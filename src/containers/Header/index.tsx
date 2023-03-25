import React from 'react';
import Searchbox from '../../components/Searchbox';
import { Text } from '../../styles/style';
import { Heading } from './style';
import tw from 'twin.macro';
import ContactList from '../../types/index';
interface HeaderProps {
  datas: ContactList[];
}

const HeaderContainer = tw.div`flex flex-col gap-2`;

const Header = ({ datas }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Heading>My Contacts</Heading>
      <Text>Friends ({datas.length})</Text>
      <Searchbox />
    </HeaderContainer>
  );
};

export default Header;
