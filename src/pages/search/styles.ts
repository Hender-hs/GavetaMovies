import styled                     from 'styled-components'
import { IoChevronBack }          from  'react-icons/io5'
import { FiSearch }               from 'react-icons/fi'


export const MainContainer = styled.main `
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DivBackArrow = styled.div `
  width: 100vw;
  height: 7vh;

  display: flex;
  align-items: center;
`

export const BackArrow = styled(IoChevronBack) `
  cursor: pointer;
`