import React, {useState, useEffect} from 'react';
import Header from './components/header';
import Form from './components/Form';
import TodoList from './components/Todolist';
import './App.css';


const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos"))|| []
  const[input, setInput] = useState("");
  const[todos, setTodos] = useState(initialState);
  const[EditTodo, setEditTodo] = useState(null);

   useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos)); 
   },[todos]);
  return (
    <div className="container">
       
      <div className='app-Wrapper'>
      <Header />
        <Form
          input ={input}
          setInput = {setInput}
          todos = {todos}
          setTodos = {setTodos}
          EditTodo = {EditTodo}
          setEditTodo = {setEditTodo}
          />
          <div>
            <TodoList 
            todos = {todos}
            setTodos = {setTodos}
            setEditTodo ={setEditTodo }/>
          </div>
      </div>
    
          
    </div>
  );
}

export default App;
