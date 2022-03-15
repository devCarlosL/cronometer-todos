import style from './clock.module.scss';

interface Props {
  time: number | undefined;
}

function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteDicker, minuteUnit] = String(minutes).padStart(2, '0');
  const [secondDicker, secondUnit] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.clock}>{minuteDicker}</span>
      <span className={style.clock}>{minuteUnit}</span>
      <span className={style.clock__divider}>:</span>
      <span className={style.clock}>{secondDicker}</span>
      <span className={style.clock}>{secondUnit}</span>
    </>
  );
}

export default Clock;
