import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

interface SearchContext {
  foundResults: object,
  setFoundResults: Dispatch<SetStateAction<object>>
}

interface ProviderProps {
  children: ReactNode
}

export const SearchContentContext = createContext<SearchContext>({} as SearchContext)

export const SearchProvider = ({children}: ProviderProps) => {

  const [foundResults, setFoundResults] = useState<object>({})

  return (
    <SearchContentContext.Provider value={{foundResults, setFoundResults}}>
      {children}
    </SearchContentContext.Provider>
  )
}

export const useSearchContent = () => useContext(SearchContentContext)