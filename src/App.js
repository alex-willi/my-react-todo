import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/todos' element={<TodosContainer/>}/>
      </Routes>
    </div>
  );
};

export default App;
