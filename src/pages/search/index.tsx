import * as S           from './styles'
import { useHistory, useParams }   from 'react-router'
import { SearchInput }  from '../../components/inputSearch'
import { useParamsType } from '../../utils/types/useParamsTypes'
import { SearchedContentInfo } from '../../components/printSearchedContent'

export const SearchPage = () => {

  const { type } = useParams<useParamsType>()

  const history = useHistory()

  return (
    <S.MainContainer>
      <S.DivBackArrow>
        <S.BackArrow size={40} onClick={() => history.push('/')} />
      </S.DivBackArrow>
      <SearchInput whichSearch={type} />
      <SearchedContentInfo />
    </S.MainContainer>
  )
}