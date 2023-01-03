import { useState } from "react";
import { Component } from "react";
import TodoForm from "./TodoForm";

const Todo = (props) => {
  const [formStyle, setFormStyle] = useState({display: 'none'})

const toggleBodyForm = () => {
formStyle.display === 'block'
? setFormStyle({ display: 'none'} )
: setFormStyle({ display: 'block'} );
};
  const deleteClickedTodo = () => {
    props.deleteTodo(props.todo);
  };
  return (
    <li data-todos-index={props.todo._id}>
      <div>
        <span className="todo-item">
          {props.todo.body}</span>
        <span
          className='edit'
          onClick={toggleBodyForm}>
          Edit
        </span>
        <button
          className='remove'
          onClick={deleteClickedTodo}>
          Remove
        </button>
      </div>
      <TodoForm
        todo={props.todo}
        style={formStyle}
        autoFocus={true}
        buttonName="Update Todo!"
        updateTodo={props.updateTodo}
        toggleBodyForm={toggleBodyForm} />
    </li>
  );
};

export default Todo;
