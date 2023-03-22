import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { GET_CONTACT_LIST } from './queries/GetContactList';

function App() {
  const { loading, error, data } = useQuery(GET_CONTACT_LIST);

  if (loading) <p>Loading....</p>;
  console.log(data, 'aww');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
