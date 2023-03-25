import React from 'react';
import CardContact from '../../components/CardContact';
import ContactList from '../../types';

interface ListContactProps {
  datas: ContactList[];
}

const ListContact = ({ datas }: ListContactProps) => {
  return (
    <>
      <CardContact datas={datas} />
    </>
  );
};

export default ListContact;