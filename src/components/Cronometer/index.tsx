/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import Button from '../Button';
import Clock from './Clock';
import style from './cronometer.module.scss';

import timeToSeconds from '../../utils/date';

interface Todo {
  id: string,
  title: string,
  time: string,
  isDone: boolean,
  isSelected: boolean
}

interface Props {
  selected: Todo | undefined;
  finalizeTask: () => void;
}

function Cronometer({ selected, finalizeTask }: Props) {
  const [time, setTime] = useState<number>();

  const handleStart = () => {
    // eslint-disable-next-line no-use-before-define
    countdown(time);
  };

  const countdown = (count: number = 0) => {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return countdown(count - 1);
      }

      return finalizeTask();
    }, 1000);
  };

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.cronometer}>
      <p className={style.cronometer__title}>Escolha um card e inicie o cronometro</p>
      <div className={style['cronometer__clock--container']}>
        <Clock time={time} />
      </div>
      <Button onClick={handleStart}>
        Começar
      </Button>
    </div>
  );
}

export default Cronometer;
