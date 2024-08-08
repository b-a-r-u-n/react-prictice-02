import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        taskName: "Do Something",
        completed: false
    }],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    editTodo: (id,newTask) => {},
    isCompleted: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}