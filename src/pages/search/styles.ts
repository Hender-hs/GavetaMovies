import styled                     from 'styled-components'
import { IoChevronBack }          from  'react-icons/io5'


export const MainContainer = styled.main `
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  background: linear-gradient(155.64deg, #00267C 0.11%, #00081A 7.14%);
`

export const DivBackArrow = styled.div `
  width: 100vw;
  height: 7vh;

  display: flex;
  align-items: center;
`

export const BackArrow = styled(IoChevronBack) `
  cursor: pointer;
  margin-left: 10px;
`

export const Nav = styled.nav `
  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 10vh;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

`

export const RequestedContent = styled.div `
  width: 100vw;

  margin-top: 90px;

  display: flex;
  justify-content: center;
`