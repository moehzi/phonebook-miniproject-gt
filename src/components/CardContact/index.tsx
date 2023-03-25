import React from 'react';
import ContactList from '../../types';
import Avatar from 'react-avatar';
import { CardContainer } from './style';
import CardList from '../CardList';

interface CardContactProps {
  datas: ContactList[];
}

const CardContact = ({ datas }: CardContactProps) => {
  return (
    <CardContainer>
      <ul className="divide-y divide-gray-200">
        {datas.map((data) => {
          return (
            <CardList
              first_name={data.first_name}
              last_name={data.last_name}
              phone={data.phones[0].number}
            />
          );
        })}
      </ul>
    </CardContainer>
  );
};

export default CardContact;
