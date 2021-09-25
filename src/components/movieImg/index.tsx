import * as S from './styles'

interface MovieImgProps {
  poster_path: string
}

export const MovieImg = ({poster_path}: MovieImgProps) => {

  const creatingSVGUrl = () => {
    const path = poster_path.split('.') [0]
    return `https://image.tmdb.org/t/p/original${path}.svg`
  }

  return (
    <S.Img src={creatingSVGUrl()} />
  )
}