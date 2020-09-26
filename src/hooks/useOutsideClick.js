import {useEffect, useState, useRef} from "react"

const useOutsideClick = initialState => {
  const [isVisible, setIsVisible] = useState(initialState)
  const ref = useRef(null)

  const handleOutsideClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)
    return () => document.removeEventListener("click", handleOutsideClick)
  }, [])

  return {ref, isVisible, setIsVisible}
}

export default useOutsideClick
