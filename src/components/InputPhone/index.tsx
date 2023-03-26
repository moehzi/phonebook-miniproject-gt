import React from 'react';
import tw from 'twin.macro';
import { IconContainer, Input, Label } from '../InputBox/style';
import IconDelete from './IconDelete';
import IconPhone from './IconPhone';
import IconPhoneAdd from './IconPhoneAdd';

export const IconRightContainer = tw.div`cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3`;
export const AddPhoneNumber = tw.input`bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full pl-10 p-2.5 cursor-pointer mt-2`;

interface InputPhoneProps {
  handleAddPhone: () => void;
  handleChangePhone: (e: React.ChangeEvent, i: number) => void;
  handleDeletePhone: (i: number) => void;
  state: Phones[];
}
interface Phones {
  number: string;
}

const InputPhone = ({
  handleAddPhone,
  handleChangePhone,
  handleDeletePhone,
  state,
}: InputPhoneProps) => {
  return (
    <div>
      <Label>Phone Number</Label>
      {state.map((data, i) => {
        return (
          <div className="relative mt-2.5" key={i}>
            <IconContainer>
              <IconPhone />
            </IconContainer>
            <Input
              type="text"
              placeholder="Input your phonenumber"
              value={data.number}
              onChange={(e) => handleChangePhone(e, i)}
            />
            <IconRightContainer onClick={() => handleDeletePhone(i)}>
              <IconDelete />
            </IconRightContainer>
          </div>
        );
      })}
      <div className="relative">
        <IconContainer>
          <IconPhoneAdd />
        </IconContainer>
        <AddPhoneNumber
          readOnly
          type="text"
          placeholder="Add phonenumber"
          onClick={() => handleAddPhone()}
        />
      </div>
    </div>
  );
};

export default InputPhone;
