import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext';

const TodoList = ({todo}) => {

    const {removeTodo, editTodo, isCompleted} = useTodo();
    const [newTask, setNewTask] = useState(todo.taskName);
    const [isEditable, setIsEditable] = useState(false);
    const [completed, setCompleted] = useState(false);

    const handaleEdit = () => {
        setIsEditable(!isEditable);
        editTodo(todo.id, newTask);
    }

    const togleCompleted = () => {
        setCompleted(!completed)
        isCompleted(todo.id)
    }
  return (
    <div className={` w-[60%] px-5 py-2 rounded-xl mb-4 flex justify-between ${completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
      {/* <div> */}
        <input 
            type="checkbox" 
            name="" 
            id="" 
            className=''
            checked={completed}
            onChange={togleCompleted}
        />
        <input 
            type="text" 
            name="" 
            id=""
            readOnly={!isEditable}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className={`w-[90%] text-xl font-semibold h-10 bg-transparent text-black outline-none rounded-xl pl-3 ${isEditable ? "border" : ""} ${completed ? "line-through" : ""}`}
        />
      {/* </div> */}
      {/* <div> */}
        <button
            onClick={handaleEdit}
            className={`h-10 text-xl ${completed ? "opacity-25" : "opacity-100"}`}
            disabled={completed}
        >
            {
                isEditable ?  "📁" : "✏️"
            }
        </button>
        <button
            onClick={() => removeTodo(todo.id)}
            className=' h-10 text-xl'
        >
             ❌
        </button>
      {/* </div> */}
    </div>
  )
}

export default TodoList
