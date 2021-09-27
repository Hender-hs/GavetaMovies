import { useSearchContent }       from '../../../provider/searchContent'
import { ActorSearchResult }      from '../../../utils/types/searchActorsTypes'
import { TvSearchResult }         from '../../../utils/types/searchTvTypes'
import { MovieSearchResult }      from '../../../utils/types/movieTypes'
import { useHistory, useParams }  from 'react-router'
import { useParamsType }          from '../../../utils/types/useParamsTypes'
import { toSVGUrl }               from '../../../utils/toSVGUrl'
import * as S                     from './styles' 


export const SearchedContent = () => {

  const history = useHistory()

  const { type } = useParams<useParamsType>()

  const {movieResults, actorResults, tvSeriesResults} = useSearchContent()


  const ReturnJSXCard = (id: number, imgLink: string, name: string, index: number) => (
    <S.Container key={index} onClick={() => history.push(`/search/${type}/${id}`)} >
      <S.Img src={toSVGUrl(imgLink || '')} />
      <S.H3>{name}</S.H3>
    </S.Container>
  )

  
  const PrintActorSearchResult = (element: ActorSearchResult) => (
    element.results?.map( 
      (eachPerson, index) => ReturnJSXCard(eachPerson.id, eachPerson.profile_path, eachPerson.name, index)
    )
  )

  
  const PrintMovieSearchResult = (element: MovieSearchResult) => (
    element.results?.map( 
      (eachMovie, index) => ReturnJSXCard(eachMovie.id, eachMovie.poster_path, eachMovie.title, index)
    )
  )


  const PrintTvSeriesSearchResult = (element: TvSearchResult) => (
    element.results?.map( 
      (eachTvSerie, index) => ReturnJSXCard(eachTvSerie.id, eachTvSerie.poster_path, eachTvSerie.name, index)
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