import { useQuery } from '@apollo/client';
import React from 'react';
import tw from 'twin.macro';
import Loader from './components/Loader';
import Header from './containers/Header';
import { GET_CONTACT_LIST } from './queries/GetContactList';

const Container = tw.div`mx-auto px-4 py-8 max-w-[640px]`;

interface ContactHooks {
  contact: ContactList[];
}

interface ContactList {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  phones: {
    number: string;
  };
}

const App = () => {
  //   console.log(data.contact, 'awas ada sule');
  const { data, loading } = useQuery(GET_CONTACT_LIST);

  if (loading) return <Loader />;

  return (
    <Container>
      <Header datas={data.contact} />
    </Container>
  );
};

export default App;
