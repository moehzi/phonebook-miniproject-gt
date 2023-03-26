import React, { useContext, useEffect, useRef, useState } from 'react';
import Avatar from 'react-avatar';
import {
  ContactDispatchContext,
  deleteFavorite,
} from '../../contexts/ContactContext';
import DotIcon from '../DotIcon';
import Dropdown from '../Dropdown';
import LoveHit from '../LoveHit';
import {
  CardDescription,
  CardlistContainer,
  DropdownContainer,
  Image,
  ListContainer,
  TextName,
  TextPhone,
} from './style';

interface CardListProps {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
}

const FavoriteList = ({ id, first_name, last_name, phone }: CardListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useContext(ContactDispatchContext);

  const handleDropdown = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
  };
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleRemoveFavorite = (e: React.SyntheticEvent) => {
    dispatch(deleteFavorite(Number(e.currentTarget.id)));
  };

  useEffect(() => {
    const handler: EventListener = (event: Event) => {
      const target = event.target as Node;
      if (!mobileMenuRef.current) {
        return;
      }

      if (!mobileMenuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler, true);
    };
  }, []);

  return (
    <CardlistContainer>
      <ListContainer>
        <Image>
          <Avatar
            size="50"
            className="rounded-full"
            name={`${first_name.split('')[0]} ${last_name.split('')[0]}`}
            alt={first_name}
          />
        </Image>
        <CardDescription>
          <TextName>
            {first_name} <span className="font-light">{last_name}</span>
          </TextName>
          <TextPhone>{phone}</TextPhone>
        </CardDescription>
        <LoveHit onClick={handleRemoveFavorite} id={id} />
        <DropdownContainer ref={mobileMenuRef}>
          <DotIcon onClick={handleDropdown} id={id} />
          <Dropdown
            isFavorite={true}
            isOpen={isOpen}
            id={id.toString()}
            onDelete={() => console.log('wow')}
          />
        </DropdownContainer>
      </ListContainer>
    </CardlistContainer>
  );
};

export default FavoriteList;
