/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import Item from './Item';
import style from './list.module.scss';

interface Todo {
  id: string,
  title: string,
  time: string,
  isDone: boolean,
  isSelected: boolean
}

interface Props {
  todos: Todo[];
  // eslint-disable-next-line no-unused-vars
  setTask: (task: Todo) => void;
}

function List({ todos, setTask }: Props) {
  return (
    <aside className={style.task__list}>
      <h2 className={style['task__list--title']}>Estudos do dia</h2>
      <ul className={style['task__list--container']}>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            setTask={setTask}
            {...todo}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
