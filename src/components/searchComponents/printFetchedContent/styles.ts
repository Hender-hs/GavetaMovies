import styled                       from 'styled-components'
import { styled as materialStyles } from '@material-ui/styles'
import { Paper }                    from '@material-ui/core'


export const Container = materialStyles(Paper)({
  'width': '80vw',
  'cursor': 'pointer',

  'margin': '20px',

  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center'

})

export const Img = styled.img `
  height: 100px;
  
  object-fit: cover;

  @media (min-width: 768px) {
    height: 200px;
  }
`

export const H3 = styled.h3 `
  font-family: sans-serif;
  font-size: 12px;
  text-align: center;

  overflow: hidden;

  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const Span = styled.span `
  font-family: sans-serif;
`