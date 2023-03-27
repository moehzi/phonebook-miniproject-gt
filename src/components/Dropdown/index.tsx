import React from 'react';
import { DropdownMenu, ListItem } from './style';

interface DropdownProps {
  isOpen: boolean;
  id: string;
  onDelete: (e: React.MouseEvent) => void;
  onAddFavorite?: (e: React.SyntheticEvent) => void;
  onEdit: (e: React.MouseEvent) => void;
  isFavorite: boolean;
}

const Dropdown = ({
  id,
  isOpen,
  onDelete,
  onAddFavorite,
  isFavorite,
  onEdit,
}: DropdownProps) => {
  return (
    <DropdownMenu className={` ${isOpen ? 'block' : 'hidden'}`}>
      <ul className="py-2" aria-labelledby="dropdownButton">
        {!isFavorite && (
          <ListItem onClick={onAddFavorite} className="text-gray-600">
            Add to favorite
          </ListItem>
        )}
        <ListItem
          id={`list-${id}`}
          className={`text-gray-600`}
          onClick={onEdit}
        >
          Edit
        </ListItem>
        <ListItem
          id={`list-${id}`}
          className={`text-red-600`}
          onClick={onDelete}
        >
          Delete
        </ListItem>
      </ul>
    </DropdownMenu>
  );
};

export default Dropdown;
