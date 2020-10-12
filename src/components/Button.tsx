import React, {memo} from "react"
import classNames from "classnames"

type ButtonProps = {
  className?: string
  outline?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  outline,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {"button--outline": outline})}
    >
      {children}
    </button>
  )
}

export default memo(Button)
