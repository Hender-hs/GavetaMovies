import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import { ActorSearchResult } from '../../utils/types/searchActorsTypes'
import { TvSearchResult }  from '../../utils/types/searchTvTypes'
import { MovieSearchResult }  from '../../utils/types/movieTypes'

interface SearchContext {
  'movieResults':       MovieSearchResult, 
  'setMovieResults':    Dispatch<SetStateAction<MovieSearchResult>>, 
  'actorResults':       ActorSearchResult,
  'setActorResults':    Dispatch<SetStateAction<ActorSearchResult>>, 
  'tvSeriesResults':    TvSearchResult, 
  'setTvSeriesResults': Dispatch<SetStateAction<TvSearchResult>>,
}

interface ProviderProps {
  children: ReactNode
}

export const SearchContentContext = createContext<SearchContext>({} as SearchContext)

export const SearchProvider = ({children}: ProviderProps) => {

  const [tvSeriesResults, setTvSeriesResults] = useState<TvSearchResult>({} as TvSearchResult)
  const [actorResults, setActorResults]       = useState<ActorSearchResult>({} as ActorSearchResult)
  const [movieResults, setMovieResults]       = useState<MovieSearchResult>({} as MovieSearchResult)

  return (
    <SearchContentContext.Provider value={{movieResults, setMovieResults, actorResults, setActorResults, tvSeriesResults, setTvSeriesResults}}>
      {children}
    </SearchContentContext.Provider>
  )
}

export const useSearchContent = () => useContext(SearchContentContext)