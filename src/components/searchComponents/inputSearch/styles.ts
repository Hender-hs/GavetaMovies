import styled       from 'styled-components'
import { FiSearch } from 'react-icons/fi'


export const SearchIcon = styled(FiSearch) `
  cursor: pointer;

  @media (min-width: 768px) {
    margin-right: 35px;
  }
`

export const DivInput = styled.div `
  width: 50vw;
  height: 5vh;

  border: solid #0a0a0a 1px;
  border-radius: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    width: 60vw;
    justify-content: space-between;
  }

`

export const Input = styled.input `
  width: 65%;
  outline: none;
  border: none;

  @media (min-width: 768px) {
    margin-left: 35px;
  }
`