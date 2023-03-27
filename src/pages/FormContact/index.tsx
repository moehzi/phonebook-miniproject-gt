import { useLazyQuery, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AlertError from '../../components/AlertError';
import InputBox from '../../components/InputBox';
import InputPhone from '../../components/InputPhone';
import Loader from '../../components/Loader';
import { ADD_CONTACT_WITH_PHONES } from '../../queries/AddContactWithPhones';
import { GET_CONTACT_LIST } from '../../queries/GetContactList';
import { Container } from '../../styles/style';
import { ContactList } from '../../types';
import LoadingButton from './LoadingButton';
import { ButtonCancel, ButtonSubmit } from './style';

const FormContact = () => {
  const [inputData, setInputData] = useState({
    first_name: '',
    last_name: '',
    phones: [{ number: '' }],
  });
  const [errorMsg, setErrorMsg] = useState('');
  const location = useLocation();

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
    if (
      inputData.first_name &&
      inputData.last_name &&
      inputData.phones[0].number &&
      dataContacts
    ) {
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
      await addContact({ variables: inputData });
      return;
    }

    setErrorMsg('All fields must be filled!');
  };

  const handleAdd = () => {
    setInputData({
      ...inputData,
      phones: [...inputData.phones, { number: '' }],
    });
  };

  const handleChangePhone = (e: React.ChangeEvent, i: number) => {
    const onChangeVal = { ...inputData, phones: [...inputData.phones] };
    const target = e.target as HTMLInputElement;
    onChangeVal.phones[i].number = target.value;
    setInputData(onChangeVal);
  };

  const handleDeletePhone = (i: number) => {
    const deleteVal = { ...inputData, phones: [...inputData.phones] };
    deleteVal.phones.splice(i, 1);
    setInputData(deleteVal);
  };

  const [addContact, { loading }] = useMutation(ADD_CONTACT_WITH_PHONES, {
    onCompleted: () => {
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

  return (
    <>
      {location.pathname === '/form-contact' ? (
        <Container>
          <h1 className="mb-2 text-2xl font-semibold">Create new contact</h1>
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
          <InputPhone
            state={inputData.phones}
            handleAddPhone={handleAdd}
            handleChangePhone={handleChangePhone}
            handleDeletePhone={handleDeletePhone}
          />
          <div className="flex justify-end gap-2">
            <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>
            <ButtonSubmit onClick={handleSubmit} disabled={loadingContacts}>
              {loadingContacts ? <LoadingButton /> : 'Add new contact'}
            </ButtonSubmit>
          </div>
        </Container>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default FormContact;
