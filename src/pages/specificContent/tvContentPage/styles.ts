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

export const DivImgAndDes = styled.div `

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 768px) {
    width: 70vw;
    height: 50vh;
  }
`

export const P = styled.p `
  font-size: 10px;
  font-family: sans-serif;
  color: white;

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

export const DivOverview = styled.div `
  width: 40%;

`

export const MoreInfo = styled.div `
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (min-width: 768px) {
    width: 70vw;
    height: 30vh;
    align-items: center;
  }
`

export const LeftSide = styled.div `
  display: flex;
  flex-direction: column;
`

export const RightSide = styled(LeftSide) `
`