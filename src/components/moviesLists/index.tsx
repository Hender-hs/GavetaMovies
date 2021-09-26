import { RequestMoviesList }  from '../../utils/types/movieTypes'
import { MovieImg }           from '../movieImg'
import * as S                 from './styles'

interface MoviesListProps {
  titleList: string, 
  moviesList: RequestMoviesList | null
}

export const MoviesList = ({titleList, moviesList}: MoviesListProps) => {

  const printMovieImages = () => 
    moviesList?.results.slice(0, 5).map( 
      (element, index) => <MovieImg key={index} poster_path={element.poster_path} />
    )

  return (
    <S.ListSection>
      
      <S.ListTitle>{titleList}</S.ListTitle>

      <S.SectionList>
        {printMovieImages()?.slice(0, 1)}
      </S.SectionList>
      
    </S.ListSection>
  )
}