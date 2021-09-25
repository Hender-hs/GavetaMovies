import styled from 'styled-components'

interface ButtonProps {
  color?: string
}

export const ButtonStyled = styled.button<ButtonProps> `
  width: 238px;
  height: 54px;
  border-radius: 50px;
  border: none;
  background-color: ${({color}) => color};
`