import React, { createContext } from 'react';
import useTodo from '../hooks/use-todo';


const TodoContext = createContext();

export const TodoProvider = ({ children, initialTodos = [] }) => {
  const todoContextValues = useTodo(initialTodos); // Utilize your existing todo hook

  return (
    <TodoContext.Provider value={todoContextValues}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => React.useContext(TodoContext);
