import React from "react"
import { HeaderContainer, PictureStyled } from "./header.styles"

const Header = (props) => {
  const { ...rest } = props
  return (
    <HeaderContainer {...rest}>
      <PictureStyled>
        <img src="/assets/icons/burguer-icon.svg" alt="menu icon" />
      </PictureStyled>

      <PictureStyled>
        <img src="/assets/logo.png" alt="Company's logo" />
      </PictureStyled>

      <PictureStyled>
        <img src="/assets/icons/cart.svg" alt="Shopping cart icon" />
      </PictureStyled>
    </HeaderContainer>
  )
}

export default Header
