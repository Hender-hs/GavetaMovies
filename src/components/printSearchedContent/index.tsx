import { useSearchContent }   from '../../provider/searchContent'
import { ActorSearchResult }  from '../../utils/types/searchActorsTypes'
import { TvSearchResult }     from '../../utils/types/searchTvTypes'
import { MovieSearchResult }  from '../../utils/types/movieTypes'
import { useParams }          from 'react-router'
import { useParamsType }      from '../../utils/types/useParamsTypes'


export const SearchedContentInfo = () => {

  const { type } = useParams<useParamsType>()

  const {movieResults, actorResults, tvSeriesResults} = useSearchContent()

  const PrintActorSearchResult = (element: ActorSearchResult) => {
    return element.results?.map( (eachPerson, index) => <h1 key={index} >{eachPerson.name}</h1> )
  }

  const PrintMovieSearchResult = (element: MovieSearchResult) => {
    return element.results?.map( (eachMovie, index) => <h1 key={index} >{eachMovie.title}</h1> )
  }

  const PrintTvSeriesSearchResult = (element: TvSearchResult) => {
    return element.results?.map( (eachTvSerie, index) => <h1 key={index} >{eachTvSerie.name}</h1> )
  }


  return (
    <div> 
      { type === 'person' && PrintActorSearchResult(actorResults) } 
      { type === 'movie'  && PrintMovieSearchResult(movieResults) }
      { type === 'tv'     && PrintTvSeriesSearchResult(tvSeriesResults) }
    </div>
  )
}