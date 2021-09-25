import { RequestMoviesList }  from '../../utils/types/moviedata'
import * as S                 from './styles'

interface MoviesListProps {
  titleList: string, 
  moviesList: RequestMoviesList | null
}

export const MoviesList = ({titleList, moviesList}: MoviesListProps) => {
  
  return (
    <S.Div>
      <S.Title>{titleList}</S.Title>
      <S.SectionList>
        { moviesList?.results.slice(0, 5).map( (element, index) => <S.Title key={index} >{element.original_title}</S.Title> ) }
      </S.SectionList>
    </S.Div>
  )
}