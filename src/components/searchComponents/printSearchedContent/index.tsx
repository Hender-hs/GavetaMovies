import { useSearchContent }       from '../../../provider/searchContent'
import { ActorSearchResult }      from '../../../utils/types/searchActorsTypes'
import { TvSearchResult }         from '../../../utils/types/searchTvTypes'
import { MovieSearchResult }      from '../../../utils/types/movieTypes'
import { useHistory, useParams }  from 'react-router'
import { useParamsType }          from '../../../utils/types/useParamsTypes'
import { toSVGUrl }               from '../../../utils/toSVGUrl'
import * as S                     from './styles' 


export const SearchedContentInfo = () => {

  const history = useHistory()

  const { type } = useParams<useParamsType>()

  const {movieResults, actorResults, tvSeriesResults} = useSearchContent()

  
  const PrintActorSearchResult = (element: ActorSearchResult) => (
    element.results?.map( 
      (eachPerson, index) => ( 
        <S.Container key={index} onClick={() => history.push(`/search/${type}/${eachPerson.id}`)} >
          <S.Img src={toSVGUrl(eachPerson.profile_path || '')} />
          <S.H3>{eachPerson.name}</S.H3>
        </S.Container>
      )
    )
  )

  
  const PrintMovieSearchResult = (element: MovieSearchResult) => (
    element.results?.map( 
      (eachMovie, index) => ( 
        <S.Container key={index} onClick={() => history.push(`/search/${type}/${eachMovie.id}`)} >
          <S.Img src={toSVGUrl(eachMovie.poster_path || '')} />
          <S.H3>{eachMovie.title}</S.H3>
        </S.Container>
      )
    )
  )


  const PrintTvSeriesSearchResult = (element: TvSearchResult) => (
    element.results?.map( 
      (eachTvSerie, index) => (
        <S.Container key={index} onClick={() => history.push(`/search/${type}/${eachTvSerie.id}`)} >
          <S.Img src={toSVGUrl(eachTvSerie.poster_path || '')} />
          <S.H3>{eachTvSerie.name}</S.H3>
        </S.Container>
      )
    )
  )


  return (
    <div> 
      { type === 'person' && PrintActorSearchResult(actorResults) } 
      { type === 'movie'  && PrintMovieSearchResult(movieResults) }
      { type === 'tv'     && PrintTvSeriesSearchResult(tvSeriesResults) }
    </div>
  )
}