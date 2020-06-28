import {
  useState,
  useEffect,
  useCallback
} from 'react';
import useStateFallBack from './useStateFallBack'

interface IUseCutDownConfig {
  fallBack?: () => void;
  onVisibilityChange?: () => void;
}

function useCutDown (c: number, config?: IUseCutDownConfig) {
  const [waiting, setWaiting] = useState(false);
  const [time, setTime] = useStateFallBack<number>(c);
  const [isFirst, setIsFirst] = useState(true);

  /**
   * 开始倒计时
   */
  const start = () => {
    setIsFirst(false);
    setTime(c);
    setWaiting(true);
  };

  /**
   * 停止倒计时
   */
  const stop = () => {
    t && clearTimeout(t);
    setWaiting(false);
  };

  /**
   * 销毁计时器
   */
  const destory = () => {
    stop();
  };

  /**
   * 格式化输出
   */
  const getFmtInfo = useCallback(() => {
    return {
      day: (~~(time / (60 * 60 * 24))).toString().padStart(2, '0'),
      hour: (~~(time / (60 * 60) % 24)).toString().padStart(2, '0'),
      min: (~~(time / 60 % 60)).toString().padStart(2, '0'),
      sec: (~~(time % 60)).toString().padStart(2, '0')
    }
  }, [time])

  let t: number;
  useEffect(() => {
    if (!waiting) return;
    const handle = () => {
      if (time > 0) {
        setTime((c: number) => c - 1);
      } else {
        setWaiting(false);
        config?.fallBack && config.fallBack();
      }
    };
    t = window.setTimeout(handle, 1000);

    // 监听事件
    config?.onVisibilityChange && document.addEventListener("visibilitychange", config?.onVisibilityChange)  

    return () => {
      t && clearTimeout(t);
      config?.onVisibilityChange && document.removeEventListener('visibilitychange', config?.onVisibilityChange)
    };
  }, [time, waiting]);

  return {
    waiting,
    time,
    start,
    stop,
    destory,
    setTime,
    getFmtInfo
  };
}

export default useCutDown;
