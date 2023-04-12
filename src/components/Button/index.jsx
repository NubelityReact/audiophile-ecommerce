import React from "react"
import { ButtonContainer } from "./button.styles"
// import styles from "./styles.module.css"

export const Button = (props) => {
  const { text, withArrow, variant, ...rest } = props

  return (
    <ButtonContainer withArrow={withArrow} variant={variant} {...rest}>
      <span>{text}</span>
      {withArrow && (
        <span>
          <img src="/assets/icons/arrow.svg" alt="" />
        </span>
      )}
    </ButtonContainer>
  )
}

export default Button
