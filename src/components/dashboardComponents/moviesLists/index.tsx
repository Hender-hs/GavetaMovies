import { useHistory }         from 'react-router'
import { RequestMoviesList }  from '../../../utils/types/movieTypes'
import { toSVGUrl }           from '../../../utils/toSVGUrl'
import * as S                 from './styles'

interface MoviesListProps {
  titleList: string, 
  moviesList: RequestMoviesList | null
}

export const MoviesList = ({titleList, moviesList}: MoviesListProps) => {

  const history = useHistory()

  const printMovieImages = () => (
    moviesList?.results.map( 
      (element, index) => (
        <S.Img onClick={() => history.push(`/search/movie/${element.id}`)} key={index} src={toSVGUrl(element.poster_path)} />
      )
    )
  )

  return (
    <S.ListSection>
      
      <S.ListTitle>{titleList}</S.ListTitle>

      <S.List>
        {printMovieImages()?.slice(0, 9)}
      </S.List>
      
    </S.ListSection>
  )
}