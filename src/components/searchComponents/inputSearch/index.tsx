import { useState }             from 'react'
import { useSearchContent }     from '../../../provider/searchContent'
import { api }                  from '../../../server'
import * as S                   from './styles'
import { useParams }            from 'react-router'
import { useParamsType }        from '../../../utils/types/useParamsTypes'


interface SearchInputProp {
  whichSearch: string
}


export const SearchInput = ({whichSearch}: SearchInputProp) => {

  const {setMovieResults, setActorResults, setTvSeriesResults} = useSearchContent()
  const { type } = useParams<useParamsType>()
  const [inputValue, setInputValue] = useState<string | null>(null)


  const handleClickSearch = async () => {
    
    const URLSearch = `/search/${whichSearch}?api_key=f1bc466ce200a460fee3a5da40133621&language=pt-BR&query=${inputValue}&page=1&include_adult=true`
    const response = await api.get(URLSearch)

    if (type === 'person')  setActorResults(response.data)
    if (type === 'movie')   setMovieResults(response.data)
    if (type === 'tv')      setTvSeriesResults(response.data)

  }

  
  return (
    <S.DivInput>
      <S.Input placeholder={`Search for ${type}`} onChange={(event) => setInputValue(event.target.value)} />
      <S.SearchIcon onClick={handleClickSearch} />
    </S.DivInput>
  )
}