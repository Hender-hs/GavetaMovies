import styled from 'styled-components'
import { IoChevronBack }  from  'react-icons/io5'


export const Img = styled.img `
  width: 100vw;
  height: 100vh;

  object-fit: cover;
`

export const Title = styled.h1 `
  font-size: 30px;
  font-family: sans-serif;
` 

export const P = styled.p `
  font-size: 20px;
  font-family: sans-serif;
` 

export const BackArrow = styled(IoChevronBack) `
  cursor: pointer;
  margin-left: 10px;

  position: absolute;
  left: 10px;
  top: 25px;
`