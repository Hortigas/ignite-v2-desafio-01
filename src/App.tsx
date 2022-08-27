import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.scss';
import rocketLogo from './assets/rocket-logo.svg';
import './global.css';

import { useState } from 'react';
import { AddTodoBar } from './components/SearchBar/SearchBar';
import { TodoList } from './components/TodoList/TodoList';

export interface Todo {
  id: string;
  content: string;
  done: boolean;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function onAddNewTodo(content: string) {
    setTodos([...todos, { id: uuidv4(), content: content, done: false }])
  }

  function onDeleteTodo(id: string) {
    const withoutDeletedTodoList = todos.filter(todo => todo.id !== id)
    setTodos(withoutDeletedTodoList)
  }

  function onClickTodo(id: string) {
    const newTodoList = todos.map(todo => {
      if (todo.id === id)
        return { ...todo, done: !todo.done }
      else
        return todo
    })
    setTodos(newTodoList)
  }

  return (
    <>
      <header className={styles.header}>
        <img src={rocketLogo} alt="logo" />
        <h1>to<span>do</span></h1>
      </header>
      <div className={styles.wrapper}>
        <AddTodoBar addNewTodo={onAddNewTodo} />
        <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onClickTodo={onClickTodo} />
      </div>
    </>
  )
}
