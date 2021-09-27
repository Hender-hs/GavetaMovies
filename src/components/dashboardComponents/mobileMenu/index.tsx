import { Modal, Fade }                  from '@material-ui/core'
import { useState } from 'react'
import * as S       from './styles'

interface MobileMenuProps {
  'color': string
}

export const MobileMenu = ({color}: MobileMenuProps) => {

  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  return (
    <>
    <S.StyledMenu data-testid='bugerMenu' onClick={() => setOpenMenuMobile(true)} size={35} color={color} />
      <>
        <Modal open={openMenuMobile} >
          <Fade in={openMenuMobile} >
            <S.MainContainer>
              <S.CloseIcon  onClick={() => setOpenMenuMobile(!openMenuMobile)} size={50} color='white' />
              <S.StyledLink onClick={() => setOpenMenuMobile(false)} to='/' >Dashboard</S.StyledLink>
              <S.StyledLink onClick={() => setOpenMenuMobile(false)} to='/search/movie' >Search Movie</S.StyledLink>
              <S.StyledLink onClick={() => setOpenMenuMobile(false)} to='/search/person' >Search Actor</S.StyledLink>
              <S.StyledLink onClick={() => setOpenMenuMobile(false)} to='/search/tv' >Search TV Series</S.StyledLink>
            </S.MainContainer>
          </Fade>
        </Modal>
      </>
    </>
  )
}