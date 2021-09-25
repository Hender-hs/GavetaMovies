import * as S from './styles'

interface ButtonProps {
  children: string,
  color?:    string
}

export const Button = ({children, color}: ButtonProps) => {
  return (
    <S.ButtonStyled color={color} >{children}</S.ButtonStyled>
  )
}