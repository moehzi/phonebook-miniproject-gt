import React, { useContext, useEffect, useMemo } from 'react';
import { ContactList, FavoriteContact } from '../../types';
import Avatar from 'react-avatar';
import { CardContainer } from './style';
import CardList from '../CardList';
import { ContactContext } from '../../contexts/ContactContext';

interface CardContactProps {
  datas: ContactList[];
}

const CardContact = ({ datas }: CardContactProps) => {
  const { state } = useContext(ContactContext);

  return (
    <CardContainer>
      <ul className="divide-y divide-gray-200">
        {datas.length > 0 ? (
          datas.map((data) => {
            return (
              <CardList
                isFavorite={state.some((obj) =>
                  Object.values(obj).includes(data.id)
                )}
                key={data.id}
                id={data.id}
                first_name={data.first_name}
                last_name={data.last_name}
                phone={data.phones[0].number}
              />
            );
          })
        ) : (
          <p className="font-semibold text-center">No result found</p>
        )}
      </ul>
    </CardContainer>
  );
};

export default CardContact;
