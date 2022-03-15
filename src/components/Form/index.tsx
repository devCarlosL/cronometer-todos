/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button';
import style from './form.module.scss';

const initialStudy = {
  title: '',
  time: '00:00:00',
};

interface FormProps {
  // eslint-disable-next-line no-unused-vars
  setTodos: (todos: any) => void;
}

function Form({ setTodos }: FormProps) {
  const [study, setStudy] = useState(initialStudy);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudy({
      ...study,
      [name]: value,
    });
  }, [study]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prevTodos: any) => [
      ...prevTodos,
      {
        ...study,
        id: uuidv4(),
        isSelected: false,
        isDone: false,
      },
    ]);

    setStudy(initialStudy);
  }, [setTodos, study]);

  return (
    <form className={style.task__container} onSubmit={handleSubmit}>
      <div className={style['task__input--container']}>
        <label
          htmlFor="task"
          className={style['task__input--label']}
        >
          Adicione um novo estudo
        </label>
        <input
          id="task"
          className={style.task__input}
          value={study.title}
          onChange={onChange}
          type="text"
          name="title"
          placeholder="Vai estudar o que?"
          required
        />
      </div>
      <div className={style['task__input--container']}>
        <label
          htmlFor="time"
          className={style['task__input--label']}
        >
          Tempo de estudo
        </label>
        <input
          id="time"
          className={style.task__input}
          value={study.time}
          onChange={onChange}
          type="time"
          step="1"
          name="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Button type="submit">
        Adicionar
      </Button>
    </form>
  );
}

export default Form;
