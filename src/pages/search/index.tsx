import * as S                     from './styles'
import { useHistory, useParams }  from 'react-router'
import { SearchInput }            from '../../components/searchComponents/inputSearch'
import { useParamsType }          from '../../utils/types/useParamsTypes'
import { SearchedContentInfo }    from '../../components/searchComponents/printSearchedContent'
import { MobileMenu }             from '../../components/dashboardComponents/mobileMenu'

export const SearchPage = () => {

  const { type } = useParams<useParamsType>()

  const history = useHistory()

  return (
    <S.MainContainer>
      <S.Nav>
        <S.BackArrow size={40} onClick={() => history.push('/')} />
        <SearchInput whichSearch={type} />
        <MobileMenu color='black' />
      </S.Nav>
      <S.RequestedContent>
        <SearchedContentInfo />
      </S.RequestedContent>
    </S.MainContainer>
  )
}