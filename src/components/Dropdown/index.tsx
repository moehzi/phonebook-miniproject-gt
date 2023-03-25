import React from 'react';
import { DropdownMenu, ListItem } from './style';

interface DropdownProps {
  isOpen: boolean;
}

const Dropdown = ({ isOpen }: DropdownProps) => {
  return (
    <DropdownMenu id="dropdownId" className={` ${isOpen ? 'block' : 'hidden'}`}>
      <ul className="py-2" aria-labelledby="dropdownButton">
        <ListItem className="text-gray-600">Add to favorite</ListItem>
        <ListItem className={`text-red-600`}>Delete</ListItem>
      </ul>
    </DropdownMenu>
  );
};

export default Dropdown;
