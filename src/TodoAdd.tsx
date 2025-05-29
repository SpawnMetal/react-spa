import React from "react";
import { observer } from "mobx-react-lite";
import { TodoButtonAdd } from './TodoButtonAdd';
import { TodoInput } from './TodoInput';
import { todoStore } from "./store";

export const TodoAdd = observer(() => {
  const [value, setValue] = React.useState("");

  const handleTodoInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleTodoButtonAddOnClick = () => {
    todoStore.addTodo(value);
    setValue("");
  };

  return <div>
    <TodoInput value={value} onChange={handleTodoInputOnChange} />
    <TodoButtonAdd onClick={handleTodoButtonAddOnClick} />
  </div>
})