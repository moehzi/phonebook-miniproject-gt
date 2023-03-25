import React from 'react';
import tw from 'twin.macro';
import IconSearch from '../IconSearch';

const InputBox = tw.input`block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;

const IconContainer = tw.div`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none`;

interface SearchboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Searchbox = ({ onChange, value }: SearchboxProps) => {
  return (
    <div className="relative">
      <IconContainer>
        <IconSearch />
      </IconContainer>
      <InputBox
        type="search"
        id="default-search"
        placeholder="Search by name or number"
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};

export default Searchbox;
