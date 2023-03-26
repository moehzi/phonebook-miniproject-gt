import React from 'react';
import { useNavigate } from 'react-router-dom';

const IconPlus = () => {
  const navigate = useNavigate();
  return (
    <svg
      onClick={() => navigate('/form-contact')}
      className="self-end w-16 h-16 text-indigo-600 cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />{' '}
      <line x1="12" y1="5" x2="12" y2="19" />{' '}
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
};

export default IconPlus;
