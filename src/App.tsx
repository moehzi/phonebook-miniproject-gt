import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import tw from 'twin.macro';
import Loader from './components/Loader';
import Header from './containers/Header';
import { GET_CONTACT_LIST } from './queries/GetContactList';
import ListContact from './containers/ListContact';
import { ContactContext, ContactsProvider } from './contexts/ContactContext';

const Container = tw.div`mx-auto px-4 py-8 max-w-[500px] flex flex-col gap-4`;

const App = () => {
  const [searchRes, setSearhRes] = useState('');

  const { data, loading } = useQuery(GET_CONTACT_LIST, {
    variables: {
      order_by: { first_name: 'asc' },
      where: { first_name: { _like: `%${searchRes}%` } },
    },
  });

  //   useEffect(() => {
  //     if (!loading) {
  //       console.log(data);
  //     }
  //   }, [data, loading]);

  //   if (loading) return <Loader />;

  return (
    <ContactsProvider>
      <Container>
        <Header
          datas={data?.contact}
          setState={setSearhRes}
          state={searchRes}
        />
        {loading ? <Loader /> : <ListContact datas={data.contact} />}
      </Container>
    </ContactsProvider>
  );
};

export default App;
