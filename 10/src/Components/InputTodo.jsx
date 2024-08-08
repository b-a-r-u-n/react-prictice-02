import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext'

const InputTodo = () => {

    const {todos,addTodo} = useTodo();
    const [todo,setTodo] = useState("");

    const handaleClick = () => {
        console.log(todo);
        if(!todo)
            return
        addTodo(todo);
        setTodo("");
    }

  return (
    <div className='w-[60%] bg-violet-500 rounded-xl mb-6'>
      <input 
        type="text" 
        placeholder='Write Todo' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className='h-12 w-[90%] rounded-l-xl bg-transparent border-none outline-none pl-5'
      />
      <button
        onClick={handaleClick}
        className='w-[10%] h-12 rounded-r-xl bg-green-500'
      >
        Add
      </button>
    </div>
  )
}

export default InputTodo
