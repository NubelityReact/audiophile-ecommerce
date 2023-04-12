import React from "react"
// import { ButtonContainer } from "./button.styles"
import styles from "./styles.module.css"

export const Button2 = (props) => {
  const { text, withArrow, variant, ...rest } = props

  const classNames = `${styles.buttonContainer} ${
    withArrow
      ? styles.withArrow
      : variant === "primary"
      ? styles.primary
      : styles.secondary
  } `

  return (
    <button className={classNames} {...rest}>
      <span>{text}</span>
      {withArrow && (
        <span>
          <img src="/assets/icons/arrow.svg" alt="" />
        </span>
      )}
    </button>
  )
}

export default Button2
