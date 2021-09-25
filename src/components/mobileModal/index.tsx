import { Modal, Fade }                  from '@material-ui/core'
import { Dispatch, SetStateAction }     from 'react'
import * as S                           from './styles'

interface MobileModal {
  open:     boolean
  setOpen:  Dispatch<SetStateAction<boolean>>
}

export const MobileModal = ({open, setOpen}: MobileModal) => {
  return (
    <>
      <Modal open={open} >
        <Fade in={open} >
          <S.MainContent>
            <S.CloseIcon size={50} color='white' onClick={() => setOpen(!open)} />
            <S.StyledLink to='/login' >LongIn</S.StyledLink>
            <S.StyledLink to='/search/movie' >Search Movie</S.StyledLink>
            <S.StyledLink to='/search/person' >Search Actor</S.StyledLink>
            <S.StyledLink to='/search/tv' >Search TV Series</S.StyledLink>
          </S.MainContent>
        </Fade>
      </Modal>
    </>
  )
}