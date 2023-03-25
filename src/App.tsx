import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import tw from 'twin.macro';
import Loader from './components/Loader';
import Header from './containers/Header';
import { GET_CONTACT_LIST } from './queries/GetContactList';
import ListContact from './containers/ListContact';

const Container = tw.div`mx-auto px-4 py-8 max-w-[500px] flex flex-col gap-4`;

const App = () => {
  const { data, loading } = useQuery(GET_CONTACT_LIST, {
    variables: { order_by: { first_name: 'asc' } },
  });

  useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [data, loading]);

  if (loading) return <Loader />;

  return (
    <Container>
      <Header datas={data.contact} />
      <ListContact datas={data.contact} />
    </Container>
  );
};

export default App;
