import { useState } from 'react'
import { MobileModal } from '../mobileModal'
import * as S from './styles'

export const Nav = () => {

  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  return (
    <S.Nav>
      <S.H1>GavetaMovies</S.H1>
      <S.StyledMenu onClick={() => setOpenMenuMobile(true)} size={35} color='white' />
      <MobileModal open={openMenuMobile} setOpen={setOpenMenuMobile} />
    </S.Nav>
  )
}