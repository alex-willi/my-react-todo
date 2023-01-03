import React, { useState } from 'react';

const TodoForm = (props) => {
  const [todo, setTodo] = useState(props.todo.body)

  const onChange = (e) => {
      setTodo(e.target.value)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const updateTodo = {...props.todo, body: todo}
    props.updateTodo(updateTodo);
    setTodo({...todo})
    props.toggleBodyForm();
  };

    return (
      <div>
        <form onSubmit={onSubmit} id="taskForm">
          <input
            onChange={onChange}
            type="text" id="newItemDescription"
            placeholder="What do you need to do?"
            value={todo.body}
          />
          <button type="submit" id="updateTask" className="btn">{props.buttonName}</button>
        </form>
      </div>
    );

};

export default TodoForm;