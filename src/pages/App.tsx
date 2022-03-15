/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import Cronometer from '../components/Cronometer';
import Form from '../components/Form';
import List from '../components/List';
import style from './app.module.scss';

interface Todo {
  id: string,
  time: string,
  title: string,
  isDone: boolean,
  isSelected: boolean,
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selected, setSelected] = useState<Todo>();

  const setTask = (task: Todo) => {
    setSelected(task);
    setTodos((prevTodos) => prevTodos.map((todo) => ({
      ...todo,
      isSelected: todo.id === task.id,
    })));
  };

  const finalizeTask = () => {
    if (selected) {
      setSelected(undefined);
      setTodos((prevTodos) => prevTodos.map((todo) => {
        if (todo.id === selected.id) {
          return {
            ...todo,
            isSelected: false,
            isDone: true,
          };
        }

        return todo;
      }));
    }
  };

  return (
    <div className={style.AppStyle}>
      <Form setTodos={setTodos} />
      <List
        todos={todos}
        setTask={setTask}
      />
      <Cronometer selected={selected} finalizeTask={finalizeTask} />
    </div>
  );
}

export default App;
