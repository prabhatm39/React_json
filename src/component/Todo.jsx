import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TodoList } from './TodoList';

export const Todo = () => {
    const[todo, setTodo]  = useState([]);

    useEffect(() => {
        const gettodo = () => {
            axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(({data}) => {
                setTodo(data);
            })
        }
        gettodo();
    },[])
    console.log(todo);
  return (
    <div>
        <TodoList data={todo}/>
    </div>
  )
}
