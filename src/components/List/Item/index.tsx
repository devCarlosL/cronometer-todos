import style from './item.module.scss';

interface Todo {
  id: string,
  time: string,
  title: string,
  isDone: boolean,
  isSelected: boolean,
}

interface Props extends Todo {
  // eslint-disable-next-line no-unused-vars
  setTask: (task: Todo) => void;
}

function Item({
  title, time, isSelected, isDone, id, setTask,
}: Props) {
  const handleClick = () => {
    if (!isDone) {
      setTask({
        id,
        title,
        time,
        isDone,
        isSelected,
      });
    }
  };

  return (
    <li
      onClick={handleClick}
      className={`
        ${style.task__item} ${isSelected ? style['task__item--selected'] : ''}
        ${isDone ? style['task__item--done'] : ''}
      `}
    >
      <h2 className={style['task__item--title']}>
        {title}
      </h2>
      <span className={style['task__item--time']}>
        {time}
      </span>
      {isDone && <span className={style.done} aria-label="task complete" />}
    </li>
  );
}

export default Item;
