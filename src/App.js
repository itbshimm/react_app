import React from 'react';
import './App.css';
import TodoList from './todo/todoList'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, complited: false, title: 'Купить хлеб'},
    {id: 2, complited: false, title: 'Купить масло'},
    {id: 3, complited: false, title: 'Купить пельмени'},
  ])

function toggleTodo(id){
  setTodos(todos.map(todo => {
    if (todo.id === id) {
      todo.complited = !todo.complited
    }
    return todo
  })
  )
}

  return (
    <div className="app">
      Shiman Bogdan
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
