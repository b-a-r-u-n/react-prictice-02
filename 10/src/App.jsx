import { useState } from 'react'
import { TodoProvider } from './Contexts/TodoContext'
import InputTodo from './Components/InputTodo'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo,{id:Date.now(), taskName:todo, completed:false}]
    })
  }

  console.log(todos);

  const removeTodo = (id) => {
    let arr = todos.filter((todo) => {
      if(todo.id != id){
        return todo;
      }
    })
    setTodos([...arr]);
  }

  const editTodo = (id,newTask) => {
    let arr = todos.map((todo) => {
      if(todo.id == id)
        return {...todo,task:newTask}
      else
        return todo;
    })
    setTodos([...arr])
  }

  const isCompleted = (id) => {
    let arr = todos.map((todo) => {
      if(todo.id == id)
        return {...todo,completed: !todo.completed}
    })
  }

  return (
    <TodoProvider value={{todos, addTodo, removeTodo, editTodo, isCompleted}}>
      <div className='bg-black min-h-screen text-white flex flex-col items-center '>
        <h1 className='text-4xl my-12'>Manage Your Todos</h1>
        <InputTodo />
        {
          todos.map((todo) => {
            return <TodoList key={todo.id} todo={todo}/>
          })
        }
      </div>
    </TodoProvider>
  )
}

export default App
