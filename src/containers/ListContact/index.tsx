import React from 'react';
import CardContact from '../../components/CardContact';
import { ContactList } from '../../types/index';

interface ListContactProps {
  datas: ContactList[];
  state: number;
  totalPages: number;
  setState: (pageNum: number) => void;
}

const ListContact = ({
  datas,
  setState,
  state,
  totalPages,
}: ListContactProps) => {
  return (
    <>
      <CardContact
        totalPages={totalPages}
        datas={datas}
        state={state}
        setState={setState}
      />
    </>
  );
};

export default ListContact;
