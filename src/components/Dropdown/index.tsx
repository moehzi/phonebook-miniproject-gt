import React from 'react';
import { DropdownMenu, ListItem } from './style';

interface DropdownProps {
  isOpen: boolean;
  id: string;
  onDelete: (e: React.SyntheticEvent) => void;
  onAddFavorite: (e: React.SyntheticEvent) => void;
  isFavorite: boolean;
}

const Dropdown = ({
  id,
  isOpen,
  onDelete,
  onAddFavorite,
  isFavorite,
}: DropdownProps) => {
  return (
    <DropdownMenu id={id} className={` ${isOpen ? 'block' : 'hidden'}`}>
      <ul className="py-2" aria-labelledby="dropdownButton">
        {!isFavorite && (
          <ListItem onClick={onAddFavorite} className="text-gray-600">
            Add to favorite
          </ListItem>
        )}
        <ListItem id={id} className={`text-red-600`} onClick={onDelete}>
          Delete
        </ListItem>
      </ul>
    </DropdownMenu>
  );
};

export default Dropdown;
