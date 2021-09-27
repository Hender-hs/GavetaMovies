import { useParams }          from 'react-router'
import { ActorContentPage }   from './actorContentPage'
import { MovieContentPage }   from './movieContentPage'
import { TvSerieContentPage } from './tvContentPage'


interface useParamsProps {
  'id': string,
  'type': string
}

export const InfoContent = () => {
  
  const { id, type } = useParams<useParamsProps>()
  
  return (
    <div>
      { type === 'person' && <ActorContentPage id={id} type={type} /> } 
      { type === 'movie'  && <MovieContentPage id={id} type={type} /> }
      { type === 'tv'     && <TvSerieContentPage id={id} type={type} /> }
    </div>
  )
}