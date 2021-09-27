import { useParams }          from 'react-router'
import { ActorContentPage }   from './actorContentPage'
import { MovieContentPage }   from './movieContentPage'
import { TvSerieContentPage } from './tvContentPage'
import { useHistory }           from 'react-router'
import * as S                 from './styles'

interface useParamsProps {
  'id': string,
  'type': string
}

export const InfoContent = () => {
  
  const history = useHistory()

  const { id, type } = useParams<useParamsProps>()
  
  return (
    <div>
      <S.BackArrow size={40} color='white' onClick={() => history.goBack()} />
      { type === 'person' && <ActorContentPage id={id} type={type} /> } 
      { type === 'movie'  && <MovieContentPage id={id} type={type} /> }
      { type === 'tv'     && <TvSerieContentPage id={id} type={type} /> }
    </div>
  )
}
