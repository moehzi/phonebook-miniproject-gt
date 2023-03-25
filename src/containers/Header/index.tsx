import React from 'react';
import { Text } from '../../styles/style';
import { Heading } from './style';

interface HeaderProps {
  datas: ContactList[];
}

interface ContactList {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  phones: {
    number: string;
  };
}

const Header = ({ datas }: HeaderProps) => {
  return (
    <div>
      <Heading>My Contacts</Heading>
      <Text>Friends ({datas.length})</Text>
    </div>
  );
};

export default Header;
