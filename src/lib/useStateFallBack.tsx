import {
  useState,
  useEffect
} from 'react'

function useStateFallBack<T> (state: T): [T, (T) => void] {
  const [s, setS] = useState<T>(state)
  const [cb, setCb] = useState<Function | undefined>(undefined)

  const setStateFallBack = (s: T, callBack?: Function) => {
    callBack && setCb(callBack)
    setS(s)
  }

  useEffect(() => {
    cb && cb()
  }, [s, cb])

  return [s, setStateFallBack]
}

export default useStateFallBack
