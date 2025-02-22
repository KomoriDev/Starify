import * as React from "react"
import classes from './input.module.css'

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={classes.input}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"
