import styled from 'styled-components'


export const MainContainer = styled.main `
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const ImgBackGround = styled.img `
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  filter: brightness(50%) blur(1.5px);

  z-index: -1;
`

export const Img = styled.img `
  width: 150px;

  @media (min-width: 768px) {
    width: 300px;
  }
`

export const Title = styled.h1 `
  font-size: 30px;
  font-family: sans-serif;
  color: white;
  text-align: center;
` 


export const P = styled.p `
  font-size: 15px;
  font-family: sans-serif;
  color: white;
  text-align: center;
  width: 90%;

  @media (min-width: 768px) {
    font-size: 20px;
  }
` 

export const Span = styled.span `
  font-size: 13px;
  font-family: sans-serif;
  color: white;

  @media (min-width: 768px) {
    font-size: 20px;
  }
` 