import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({data}) => {
    console.log("data",data)
  return (
    <div>
       { data.map((item) => (
            <TodoItem 
            title={item.title}
            completed={item.completed}
            userId={item.userId}
            id={item.id}
            />
        ))}
    </div>
  )
}
