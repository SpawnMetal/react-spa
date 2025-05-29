import React, { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { todoStore } from "./store";

export const TodoList = observer(() => {
  const TodosMemo = useMemo(() => {
    return todoStore.todos.map((todo, i) => <React.Fragment key={`todo_${i}`}><span>{todo}</span><br /></ React.Fragment>);
  }, [todoStore.todos]);

  return <>{TodosMemo}</>
})