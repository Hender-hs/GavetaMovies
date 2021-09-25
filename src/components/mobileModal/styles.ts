import styled               from 'styled-components'
import { IoCloseOutline }   from 'react-icons/io5'
import { Link }             from 'react-router-dom'


export const MainContent = styled.div `
  width: 100vw;
  height: 100vh;
  background: linear-gradient(155.64deg, #00267C 30.11%, #00081A 47.14%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const CloseIcon = styled(IoCloseOutline) `
  position: absolute;
  right: 0;
  top: 0;
  
  cursor: pointer;
`

export const StyledLink = styled(Link) `
  text-decoration: none;
  color: white;
  font-size: 30px;
  font-family: sans-serif;
`