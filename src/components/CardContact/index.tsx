import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ContactList, FavoriteContact } from '../../types';
import Avatar from 'react-avatar';
import { CardContainer } from './style';
import CardList from '../CardList';
import { ContactContext } from '../../contexts/ContactContext';
import FavoriteList from '../CardList/FavoriteList';
import tw from 'twin.macro';
import Pagination from '../Pagination';

interface CardContactProps {
  datas: ContactList[];
  state: number;
  totalPages: number;
  setState: (pageNum: number) => void;
}

const TitleCard = tw.h5`font-semibold text-lg text-gray-700`;

const CardContact = ({
  datas,
  state,
  setState,
  totalPages,
}: CardContactProps) => {
  const { favorites } = useContext(ContactContext);

  const filteredFavorites = useMemo(() => {
    const filteredArr = datas.filter(
      (data) => !favorites.some((favorite) => data.id === favorite.id)
    );
    return filteredArr;
  }, [datas, favorites]);

  const handleNext = () => {
    setState(state + 1);
  };

  const handlePrevious = () => {
    setState(state - 1);
  };

  return (
    <CardContainer>
      <TitleCard>Favorites ({favorites.length})</TitleCard>
      <ul className="divide-y divide-gray-200">
        {favorites.length > 0 &&
          favorites.map((data) => {
            return (
              <FavoriteList
                key={data.id}
                id={data.id}
                first_name={data.first_name}
                last_name={data.last_name}
                phone={data.phone}
              />
            );
          })}
      </ul>
      <TitleCard className="mt-4">All Contacts</TitleCard>
      <ul className="divide-y divide-gray-200">
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map((data) => {
            return (
              <CardList
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
      <Pagination
        totalPages={totalPages}
        datas={filteredFavorites}
        currentPage={state}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </CardContainer>
  );
};

export default CardContact;
