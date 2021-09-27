import * as S                   from './styles'
import { toSVGUrl }             from '../../../utils/toSVGUrl'
import { useEffect, useState }  from 'react'
import { TvSearchedContent }    from '../../../utils/types/searchTvTypes'
import { api, apiKey }          from '../../../server'



interface PageProps {
  'id': string,
  'type': string
}


export const TvSerieContentPage = ({id, type}: PageProps) => {
  
  const [tvContent, setTvContent] = useState<TvSearchedContent | null>(null)

  const requestContent = async () => {
    const response = await api.get(`/${type}/${id}?api_key=${apiKey}`)
    setTvContent(response.data)
  }

  useEffect( () => {
    !tvContent && requestContent()
  })

  return (
    <S.MainContainer>
      {
        !!tvContent &&
        <>
          <S.ImgBackGround src={toSVGUrl(tvContent.poster_path)} />
          <S.Title>{tvContent.name}</S.Title>
          <S.DivImgAndDes>
            <S.Img src={toSVGUrl(tvContent.poster_path)} />
            <S.DivOverview>
              <S.P>{tvContent.overview}</S.P>
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
              <S.Span>{tvContent.original_language}</S.Span>
              <S.Span>{tvContent.original_name}</S.Span>
              <S.Span>{tvContent.first_air_date}</S.Span>
              <S.Span>{tvContent.vote_average}</S.Span>
            </S.RightSide>
          </S.MoreInfo>
        </>
      }
  </S.MainContainer>
  )
}