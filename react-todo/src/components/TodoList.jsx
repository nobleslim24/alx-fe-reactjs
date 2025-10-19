import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            onClick={() => toggleTodo(index)}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(index); }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
