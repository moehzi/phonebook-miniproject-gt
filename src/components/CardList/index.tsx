import React, { useState } from 'react';
import Avatar from 'react-avatar';
import LoveHit from '../LoveHit';
import {
  CardDescription,
  CardlistContainer,
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
            name={`${first_name} ${last_name}`}
            alt={first_name}
          />
        </Image>
        <CardDescription>
          <TextName>
            {first_name} {last_name}
          </TextName>
          <TextPhone>{phone}</TextPhone>
        </CardDescription>
        <div className="relative items-center text-base font-semibold text-gray-900">
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>

          <div
            id="dropdownId"
            className={`z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Export Data
                </a>
              </li>
              <li>
                <a
                  href="#3"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ListContainer>
    </CardlistContainer>
  );
};

export default CardList;
