import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import AlertError from '../../components/AlertError';
import InputBox from '../../components/InputBox';
import Loader from '../../components/Loader';
import { GET_CONTACT_LIST } from '../../queries/GetContactList';
import { Container } from '../../styles/style';
import { ContactList } from '../../types';
import { ButtonCancel, ButtonSubmit } from './style';
import { GET_CONTACT_DETAIL } from '../../queries/GetContactDetail';
import { EDIT_CONTACT } from '../../queries/EditContact';
import LoadingButton from './LoadingButton';
import {
  ContactDispatchContext,
  ContactsProvider,
  newFavorite,
} from '../../contexts/ContactContext';

const FormEdit = () => {
  const { contactId } = useParams();
  const [inputData, setInputData] = useState({
    first_name: '',
    last_name: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const { dispatch } = useContext(ContactDispatchContext);

  const { loading: loadingDetail } = useQuery(GET_CONTACT_DETAIL, {
    variables: { id: Number(contactId) },
    onCompleted: (data) => {
      setInputData({
        first_name: data.contact_by_pk.first_name,
        last_name: data.contact_by_pk.last_name,
      });
    },
  });

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setInputData({ ...inputData, [target.name]: value });
  };

  const [loadContacts, { data: dataContacts, loading: loadingContacts }] =
    useLazyQuery(GET_CONTACT_LIST);

  const handleSubmit = async () => {
    await loadContacts();
    if (inputData.first_name && inputData.last_name && dataContacts) {
      const isFoundFirstName =
        dataContacts.contact.filter(
          (v: ContactList) =>
            v.first_name.toLowerCase() === inputData.first_name.toLowerCase()
        ).length > 0;

      const isFoundLastName =
        dataContacts.contact.filter(
          (v: ContactList) =>
            v.last_name.toLowerCase() === inputData.last_name.toLowerCase()
        ).length > 0;

      if (isFoundFirstName && isFoundLastName) {
        setErrorMsg('The contact name is already taken');
        return;
      }
      await editContact({ variables: { id: contactId, _set: inputData } });
      return;
    }

    setErrorMsg('All fields must be filled!');
  };

  const [editContact, { loading }] = useMutation(EDIT_CONTACT, {
    onCompleted: (data) => {
      const datas = {
        id: data.update_contact_by_pk.id,
        first_name: data.update_contact_by_pk.firstname,
        last_name: data.update_contact_by_pk.last_name,
        phone: data.update_contact_by_pk.phones[0].phone,
      };
      dispatch(newFavorite(datas));
      navigate('/');
    },
    refetchQueries: [GET_CONTACT_LIST],
    onError: (error) => {
      if (error.graphQLErrors[0].message.includes('phone_number_key')) {
        setErrorMsg(
          "Phone number is already in the contact, Can't be duplicate!"
        );
      }
    },
  });

  const handleCloseErr = () => {
    setErrorMsg('');
  };

  if (loading) {
    return <Loader />;
  }

  if (loadingDetail) {
    return <Loader />;
  }
  return (
    <ContactsProvider>
      <Container>
        <h1 className="mb-2 text-2xl font-semibold">Edit contact</h1>
        {errorMsg && (
          <AlertError
            title="Error!"
            message={errorMsg}
            onClose={handleCloseErr}
          />
        )}
        <InputBox
          onChange={handleChange}
          id="first_name"
          placeholder="Input your firstname"
          label="Firstname"
          value={inputData.first_name}
        />
        <InputBox
          onChange={handleChange}
          id="last_name"
          placeholder="Input your lastname"
          label="Lastname"
          value={inputData.last_name}
        />
        <div className="flex justify-end gap-2">
          <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>
          <ButtonSubmit onClick={handleSubmit} disabled={loadingDetail}>
            {loadingContacts ? <LoadingButton /> : 'Edit contact'}
          </ButtonSubmit>
        </div>
      </Container>
    </ContactsProvider>
  );
};

export default FormEdit;
