import { Header } from '../../components/header'
import * as S from './styles'
import { api, apiKey } from '../../server'
import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { RequestMoviesList } from '../../utils/types/moviedata'
import { MoviesList } from '../../components/moviesLists'


export const Dashboard = () => {

  const [latestMovies, setLatestMovies]     = useState<RequestMoviesList | null>(null)
  const [popularMovies, setPopularMovies]   = useState<RequestMoviesList | null>(null)
  const [topRatedMovies, setTopRatedMovies] = useState<RequestMoviesList | null>(null)
  const [upcomingMovies, setUpcomingMovies] = useState<RequestMoviesList | null>(null)

  const getMoviesList = async ( whichList: string, setState: Dispatch<SetStateAction<RequestMoviesList | null>> ) => {

    const response = await api.get( `/movie/${whichList}?api_key=${apiKey}` )

    setState(response.data)
  }

  
  useEffect( () => {
    
    !upcomingMovies && getMoviesList('upcoming',  setUpcomingMovies)
    // !latestMovies   && getMoviesList('latest',    setLatestMovies)
    // !popularMovies  && getMoviesList('popular',   setPopularMovies)
    // !topRatedMovies && getMoviesList('top_rated', setTopRatedMovies)

  })

  return (
    <S.Main>
      <Header />
      {!!upcomingMovies && <MoviesList titleList='Em Breve' moviesList={upcomingMovies}  />}
      {/* {!!latestMovies   && <MoviesList moviesList={latestMovies}    />} */}
      {/* {!!popularMovies  && <MoviesList moviesList={popularMovies}   />} */}
      {/* {!!topRatedMovies && <MoviesList moviesList={topRatedMovies}  />} */}
    </S.Main>
  )
} 