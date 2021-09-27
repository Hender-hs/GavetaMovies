import * as S                   from './styles'
import { toSVGUrl }             from '../../../utils/toSVGUrl'
import { useEffect, useState }  from 'react'
import { MovieData }            from '../../../utils/types/movieTypes'
import { api, apiKey }          from '../../../server'


interface PageProps {
  'id': string,
  'type': string
}


export const MovieContentPage = ({id, type}: PageProps) => {

  const [movieContent, setMovieContent] = useState<MovieData | null>(null)

  const requestContent = async () => {
    const response = await api.get(`/${type}/${id}?api_key=${apiKey}`)
    setMovieContent(response.data)
  }

  useEffect( () => {
    !movieContent && requestContent()
  })


  return (
    <S.MainContainer>
        {
          !!movieContent &&
          <>
            <S.ImgBackGround src={toSVGUrl(movieContent.poster_path)} />
            <S.Title>{movieContent.title}</S.Title>
            <S.DivImgAndDes>
              <S.Img src={toSVGUrl(movieContent.poster_path)} />
              <S.DivOverview>
                <S.P>{movieContent.overview}</S.P>
              </S.DivOverview>
            </S.DivImgAndDes>
            <S.MoreInfo>
              <S.LeftSide>
                <S.Span>Original Title:</S.Span>
                <S.Span>Original Language:</S.Span>
                <S.Span>Release Date</S.Span>
                <S.Span>Vote:</S.Span>
              </S.LeftSide>
              <S.RightSide>
                <S.Span>{movieContent.original_title}</S.Span>
                <S.Span>{movieContent.original_language}</S.Span>
                <S.Span>{movieContent.release_date}</S.Span>
                <S.Span>{movieContent.vote_average}</S.Span>
              </S.RightSide>
            </S.MoreInfo>
          </>
        }
    </S.MainContainer>
  )
}