import React from 'react';
import IconUser from './IconUser';
import { IconContainer, Input, Label } from './style';

interface InputBoxPropsType {
  label: string;
  id: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent) => void;
  value: string;
}

const InputBox = ({
  label,
  id,
  placeholder,
  onChange,
  value,
}: InputBoxPropsType) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <IconContainer>
          <IconUser />
        </IconContainer>
        <Input
          name={id}
          onChange={onChange}
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </>
  );
};

export default InputBox;
