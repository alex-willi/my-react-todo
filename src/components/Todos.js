import React from 'react';
import Todo from "./Todo";

const TodosList = (props) => {
  let todos = props.todos.data?.map((todoObj) => (
    <Todo 
        key={todoObj._id} 
        todo={todoObj}
        deleteTodo={props.deleteTodo} 
        />
  ));

  return <ul>{todos}</ul>;
};

export default TodosList;