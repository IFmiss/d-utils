import {
  useState,
  useEffect
} from 'react';

function useCutDown (c: number, cb?: Function) {
  const [waiting, setWaiting] = useState(false);
  const [time, setTime] = useState(c);

  const start = () => {
    setTime(c);
    setWaiting(true);
  };
  const stop = () => {
    t && clearTimeout(t);
    setWaiting(false);
  };

  const destory = () => {
    stop();
    setTime(c);
  };

  let t: number;
  useEffect(() => {
    if (!waiting) return;
    const handle = () => {
      if (time > 0) {
        setTime(c => c - 1);
      } else {
        setWaiting(false);
        cb && cb();
      }
    };
    t = window.setTimeout(handle, 1000);

    return () => {
      t && clearTimeout(t);
    };
  }, [time, waiting]);

  return {
    waiting,
    time,
    start,
    stop,
    destory
  };
}

export default useCutDown;
