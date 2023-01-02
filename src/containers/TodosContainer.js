import React, { useState, useEffect, setState } from 'react';
import TodoModel from '../models/Todo';
import Todos from '../components/Todos';
import CreateTodoForm from '../components/CreateTodoForm';

function TodosContainer () {
  const [todos, setTodos] = useState([])


    useEffect(()=>{
    TodoModel.all().then((res) => {
    //   console.log(res);
      setTodos(res)
    });
  },[])
  console.log(todos)

  const createTodo = (todo) => {
    let newTodo = {
        body: todo,
        completed: false
    };

    TodoModel.create(newTodo).then((res) => {
        let todoInput = todos.data.slice();
        todos.data.push(res.data);
        setState(todoInput);
        console.log(todos)
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

    return (
      <div className="todosComponent">
        <CreateTodoForm
        createTodo={createTodo} />
        <Todos
          todos={todos} 
          deleteTodo={deleteTodo}/>
          
      </div>
    );
};

export default TodosContainer;
