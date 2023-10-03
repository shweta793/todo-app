import React, {useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import '../App.css';

const Form = ({input, setInput, todos, setTodos, EditTodo, setEditTodo}) =>{

    const UpdateTodo = (title, id, completed) =>{
        const Newtodo = todos.map((todo)=>
            todo.id === id ? {title, id, completed} :todo
        
        );
            setTodos(Newtodo);
            setEditTodo("");
    }
    useEffect(()=>{
        if(EditTodo){
            setInput(EditTodo.title)
        }else {
            setInput("")
        }
    }, [setInput, EditTodo]);
    
    const onInputChange = (event) =>{
        setInput(event.target.value);

    };

    const onFormSubmit=(event) =>{
        event.preventDefault();
        if(!EditTodo)
        {
         setTodos([...todos, {id:uuidv4(),title:input, completed:false}])
         setInput("");
        } else{
            UpdateTodo(input, EditTodo.id, EditTodo.completed)
        }
        
    };
  return (
    <form onSubmit={onFormSubmit} className="todo-form">
        <input type="text" placeholder="Enter a todo.." className="task-input" value={input} required 
        onChange={onInputChange} />
        <button className="btn-add" type="submit">{EditTodo ? "OK" :"ADD"}</button>
    </form>
  );
}

export default Form;
