import { Header }                                         from '../../components/dashboardComponents/header'
import * as S                                             from './styles'
import { api, apiKey }                                    from '../../server'
import { useEffect, useState, Dispatch, SetStateAction }  from 'react'
import { RequestMoviesList }                              from '../../utils/types/movieTypes'
import { MoviesList }                                     from '../../components/dashboardComponents/moviesLists'


export const Dashboard = () => {

  const [popularMovies, setPopularMovies]   = useState<RequestMoviesList | null>(null)
  const [topRatedMovies, setTopRatedMovies] = useState<RequestMoviesList | null>(null)
  const [upcomingMovies, setUpcomingMovies] = useState<RequestMoviesList | null>(null)


  const getMoviesList = async ( whichList: string, setState: Dispatch<SetStateAction<RequestMoviesList | null>> ) => {
    const response = await api.get( `/movie/${whichList}?api_key=${apiKey}` )
    setState(response.data)
  }

  
  useEffect( () => {
    !upcomingMovies && getMoviesList('upcoming',  setUpcomingMovies)
    !popularMovies  && getMoviesList('popular',   setPopularMovies)
    !topRatedMovies && getMoviesList('top_rated', setTopRatedMovies)
  })

  return (
    <S.Main>
      <Header />
      {!!upcomingMovies && <MoviesList titleList='Em Breve'           moviesList={upcomingMovies}  />}
      {!!popularMovies  && <MoviesList titleList='Filmes Populares'   moviesList={popularMovies}   />}
      {!!topRatedMovies && <MoviesList titleList='Os Mais Avaliados'  moviesList={topRatedMovies}  />}
    </S.Main>
  )
} 