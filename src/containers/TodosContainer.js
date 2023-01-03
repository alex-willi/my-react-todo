import React, { useState, useEffect } from 'react';
import TodoModel from '../models/Todo';
import Todos from '../components/Todos';
import CreateTodoForm from '../components/CreateTodoForm';

function TodosContainer () {
  const [todos, setTodos] = useState([])


    useEffect(()=>{
    TodoModel.all().then((res) => {
      setTodos(res.data)
    });
  },[todos.length])
  console.log(todos)

  const createTodo = (todo) => {
    let newTodo = {
        body: todo,
        completed: false
    };

    TodoModel.create(newTodo).then((res) => {
        let todoInput = todos.slice();
        todos.push(res.data);
        setTodos(todoInput);
    });
};
const deleteTodo = (todo) => {
  TodoModel.delete(todo).then(res=>{
      let filteredTodos = todos.filter(todo=> {
          return todo._id !== res.data._id;
      })
      setTodos(filteredTodos)
  })
}
const updateTodo = (todo) => {
  const isUpdatedTodo = (t) => {
    return t._id === todo._id;
  };
  TodoModel.update(todo).then((res) => {
    let updated = todos.slice();
    updated.find(isUpdatedTodo).body = todo.body;
    setTodos(updated);
  });
};

    return (
      <div className="todosComponent">
        <CreateTodoForm
        createTodo={createTodo} />
        <Todos
          todos={todos} 
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}/>
          
      </div>
    );
};

export default TodosContainer;
