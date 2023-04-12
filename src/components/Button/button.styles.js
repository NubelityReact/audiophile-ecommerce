import styled, { css } from "styled-components"

const variants = {
  primary: css`
    background-color: ${(props) => props.theme.pallete.main.orange};
  `,
  secondary: css`
    border-color: black;
    background-color: transparent;
  `,
}

export const ButtonContainer = styled.button`
  font-family: "Manrope";
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1px;
  outline: none;
  border: 1px solid transparent;
  padding: 15px 30px;
  text-transform: uppercase;
  ${(props) => variants[props.variant]}
  ${(props) =>
    props.withArrow &&
    css`
      background-color: transparent;
    `};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`
