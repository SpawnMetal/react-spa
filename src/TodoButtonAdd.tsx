import React from "react";
import { observer } from "mobx-react-lite";

interface Props {
  onClick: () => void;
}

export const TodoButtonAdd = observer((props: Props) => {
  const { onClick } = props;

  return <button onClick={onClick}>Add</button>
})