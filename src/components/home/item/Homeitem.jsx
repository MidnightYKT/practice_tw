import React from 'react'
import Check from './Check'
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'

const Homeitem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div
      className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-3 w-full'
    >
      <button
        className='flex items-center'
        onClick={() => changeTodo(todo.id)}
      >
        <Check isCompleted={todo.isCompleted} />
        <span className={cn({
          'line-through': todo.isCompleted
        })}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash size={22} className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-500' />
      </button>
    </div>
  )
}

export default Homeitem