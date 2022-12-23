import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
  let todos = props.todos.data?.map((todo) => {
    return (
      <Todo
      key={todo._id}
      todo={todo} />
      );
    });
    console.log(todos)

  return (
    <ul>
      {todos}
    </ul>
  );
};

export default Todos;
