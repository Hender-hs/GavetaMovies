import styled       from 'styled-components'
import { FiSearch } from 'react-icons/fi'


export const SearchIcon = styled(FiSearch) `
  cursor: pointer;
`

export const DivInput = styled.div `
  width: 70vw;
  height: 5vh;

  border: solid #0a0a0a 1px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input `
  outline: none;
  border: none;
`