import {useEffect, useState, useRef, useCallback} from "react"

const useOutsideClick = (initialState: boolean) => {
  const [isVisible, setIsVisible] = useState(initialState)
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsVisible(false)
      }
    },
    [ref]
  )

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)
    return () => document.removeEventListener("click", handleOutsideClick)
  }, [handleOutsideClick])

  return {ref, isVisible, setIsVisible}
}

export default useOutsideClick
