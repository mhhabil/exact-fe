import { useEffect, useState } from "react";
import { useStopwatch } from 'react-timer-hook';

const QueueWaitingTimeTotal = (props: { startTime: string }) => {
  const { startTime } = props;
  const dateTime = new Date(startTime),
    [startDate, setStartDate] = useState(dateTime),
    time = new Date();

  useEffect(() => {
    setStartDate(new Date(startTime))
  }, [startTime]);

  const substractedTime = +time - +startDate,
    stopwatchOffset = new Date(),
    offset = stopwatchOffset.setMilliseconds(stopwatchOffset.getMilliseconds() + substractedTime);

  const {
    seconds,
    minutes,
    hours,
    reset,
  } = useStopwatch({ autoStart: true, offsetTimestamp: new Date(offset) })

  useEffect(() => {
    const newOffset = new Date().setMilliseconds(new Date().getMilliseconds() + (+new Date() - +startDate))
    reset(new Date(newOffset));
  }, [startDate]);

  const hrs = (`0${hours}`).slice(-2),
    mins = (`0${minutes}`).slice(-2),
    secs = (`0${seconds}`).slice(-2);
  return (
    <div style={ {fontSize: '15px'} }>
      <span>{hrs}</span>:<span>{mins}</span>:<span>{secs}</span>
    </div>
  );
}

export default QueueWaitingTimeTotal;
