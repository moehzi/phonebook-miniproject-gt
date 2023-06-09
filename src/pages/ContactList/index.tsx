import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Loader from '../../components/Loader';
import Header from '../../containers/Header';
import { GET_CONTACT_LIST } from '../../queries/GetContactList';
import ListContact from '../../containers/ListContact';
import { ContactsProvider } from '../../contexts/ContactContext';
import { Container } from '../../styles/style';

const ContactList = () => {
  const [searchRes, setSearhRes] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { data, loading } = useQuery(GET_CONTACT_LIST, {
    variables: {
      order_by: { first_name: 'asc' },
      where: { first_name: { _like: `%${searchRes}%` } },
      limit: 10,
      offset: (currentPage - 1) * 10,
    },
    onCompleted: (data) => {
      const totalItems = data.totalCount.aggregate.count;
      setTotalPages(Math.ceil(totalItems / 10));
    },
  });

  return (
    <ContactsProvider>
      <Container>
        <Header
          length={data?.totalCount.aggregate.count}
          setState={setSearhRes}
          state={searchRes}
        />
        {loading ? (
          <Loader />
        ) : (
          <ListContact
            totalPages={totalPages}
            datas={data.contact}
            state={currentPage}
            setState={setCurrentPage}
          />
        )}
      </Container>
    </ContactsProvider>
  );
};

export default ContactList;
