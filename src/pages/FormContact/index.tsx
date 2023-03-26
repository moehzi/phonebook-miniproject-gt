import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../components/InputBox';
import InputPhone from '../../components/InputPhone';
import { Container } from '../../styles/style';
import { ButtonCancel, ButtonSubmit } from './style';

const FormContact = () => {
  const [inputData, setInputData] = useState({
    firstname: '',
    lastname: '',
    phones: [{ number: '' }],
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

  const handleSubmit = () => {
    console.log(inputData, 'mantap jiwa');
  };

  const handleAdd = () => {
    setInputData({
      ...inputData,
      phones: [...inputData.phones, { number: '' }],
    });
  };

  const handleChangePhone = (e: React.ChangeEvent, i: number) => {
    const onChangeVal = { ...inputData, phones: [...inputData.phones] };
    // const onChangeVal = [...inputBox];
    const target = e.target as HTMLInputElement;
    onChangeVal.phones[i].number = target.value;
    setInputData(onChangeVal);
  };

  const handleDeletePhone = (i: number) => {
    const deleteVal = { ...inputData, phones: [...inputData.phones] };
    deleteVal.phones.splice(i, 1);
    setInputData(deleteVal);
  };

  return (
    <Container>
      <InputBox
        onChange={handleChange}
        id="firstname"
        placeholder="Input your firstname"
        label="Firstname"
        value={inputData.firstname}
      />
      <InputBox
        onChange={handleChange}
        id="lastname"
        placeholder="Input your lastname"
        label="Lastname"
        value={inputData.lastname}
      />
      <InputPhone
        state={inputData.phones}
        handleAddPhone={handleAdd}
        handleChangePhone={handleChangePhone}
        handleDeletePhone={handleDeletePhone}
      />
      <div className="flex justify-end gap-2">
        <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>
        <ButtonSubmit onClick={handleSubmit}>Add new contact</ButtonSubmit>
      </div>
    </Container>
  );
};

export default FormContact;
