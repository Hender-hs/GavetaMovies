import { MobileMenu } from '../mobileMenu'
import * as S from './styles'

export const Nav = () => {

  return (
    <S.Nav>
      <S.H1>GavetaMovies</S.H1>
      <MobileMenu color='white' />
    </S.Nav>
  )
}