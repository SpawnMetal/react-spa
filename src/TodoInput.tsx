import React from "react";
import { observer } from "mobx-react-lite";

interface Props { 
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TodoInput = observer((props: Props) => {
  const { value, onChange } = props;

  return <input value={value} onChange={onChange} />;
})