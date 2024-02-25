import React from 'react'
import { useTodoContext } from '../context/TodoContext';
import Todo from './Todo';

const TodoList = () => {
    const { todos } = useTodoContext();

  return (
    <div className='overflow-auto  border rounded-b-md border-gray-200'>
      <ul role='list' className='divide-y relative divide-gray-100 px-5 '>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList