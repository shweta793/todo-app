import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';

import '../App.css';

const TodoList = ({todos, setTodos, setEditTodo}) =>{

    const handeleComplete =(todo) =>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{...item,completed : !item.completed }
            }
                return  item;
            
        } )
        );

    };

    const handeleEdit = ({id}) => {
        const FindTodo = todos.find((todo)=>todo.id === id);
        setEditTodo(FindTodo);

    };

    const handeleDelete = ({id}) =>{
        setTodos(todos.filter((todo)=>todo.id !== id));
    };
 

  return (
    <div class="todoitem" >
      { todos.map((todo) => (
        <li className="list-item" key={todo.id}>
            <input type="text" value={todo.title} className={'list ${todo.completed? "complete":"incompled"}'}
             onChange={(event)=>event.preventDefault()} style={{textDecoration: todo.completed && "line-through"}} />

            <FontAwesomeIcon className="complete-icon" icon={faCheckSquare} onClick={() => handeleComplete(todo)} />
            
            <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => handeleEdit(todo)} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => handeleDelete(todo)}/>
            
        </li>
      ))

      }
          
    </div>
  );
};

export default TodoList;
