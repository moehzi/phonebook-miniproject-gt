import React, { useState } from 'react';
import Avatar from 'react-avatar';
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
  first_name: string;
  last_name: string;
  phone: string;
}

const CardList = ({ first_name, last_name, phone }: CardListProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
            {first_name} {last_name}
          </TextName>
          <TextPhone>{phone}</TextPhone>
        </CardDescription>
        <DropdownContainer>
          <DotIcon onClick={() => setIsOpen(!isOpen)} />
          <Dropdown isOpen={isOpen} />
        </DropdownContainer>
      </ListContainer>
    </CardlistContainer>
  );
};

export default CardList;
