import styled from 'styled-components'
import { FiMenu as MenuBurger } from 'react-icons/fi'

export const Nav = styled.nav `
  position: absolute;
  left: 0;
  top: 0;

  background-color: red;
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  z-index: 1;
`

export const H1 = styled.h1 `
  font-size: 30px;
  font-family: sans-serif;
  color: #fff;
`

export const StyledMenu = styled(MenuBurger) `
  cursor: pointer;
`