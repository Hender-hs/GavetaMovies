import { useEffect, useState }  from 'react'
import { useSearchContent }     from '../../provider/searchContent'
import { api }                  from '../../server'
import * as S                   from './styles'

interface SearchInputProp {
  whichSearch: string
}

export const SearchInput = ({whichSearch}: SearchInputProp) => {

  const {setFoundResults, foundResults} = useSearchContent()

  const [inputValue, setInputValue] = useState<string | null>(null)

  const handleClickSearch = async () => {
    const response = await api.get(
      `/search/${whichSearch}?api_key=f1bc466ce200a460fee3a5da40133621&language=pt-BR&query=${inputValue}&page=1&include_adult=true`
    )
    setFoundResults(response)
  }

  useEffect(() => {
    console.log(foundResults)
  }, [foundResults])

  return (
    <S.DivInput>
      <S.Input placeholder='Buscar' onChange={(event) => setInputValue(event.target.value)} />
      <S.SearchIcon onClick={handleClickSearch} />
    </S.DivInput>
    
  )
}