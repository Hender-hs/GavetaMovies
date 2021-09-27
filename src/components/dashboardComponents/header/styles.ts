import styled from 'styled-components'


export const Header = styled.header `
  width: 100vw;
  height: 100vh;
`

export const ImgBackgroung = styled.img `
  position: absolute;
  left: 0;
  top: 0;
  
  width: 100vw;
  height: 100vh;

  object-fit: cover;

  filter: brightness(80%);

  @media (min-width: 768px) {
    filter: brightness(50%);
  }
`

export const ImgInfoDiv = styled.div `
  width: 100%;
  height: 30%;

  position: absolute;
  top: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const H1 = styled.h1 `
  color: #fff;
  font-family: sans-serif;
  font-size: 35px;
`
