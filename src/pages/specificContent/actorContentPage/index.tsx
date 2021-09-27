import * as S                   from './styles'
import { SearchActorType }      from '../../../utils/types/searchActorsTypes'
import { toSVGUrl }             from '../../../utils/toSVGUrl'
import { useEffect, useState }  from 'react'
import { api, apiKey }          from '../../../server'


interface PageProps {
  'id': string,
  'type': string
}

interface Actor extends SearchActorType {
  'biography': string,
  'known_for_department': string,
  'place_of_birth': string,
}


export const ActorContentPage = ({id, type}: PageProps) => {

  const [actorContent, setActorContent] = useState<Actor | null>(null)

  const requestContent = async () => {
    const response = await api.get(`/${type}/${id}?api_key=${apiKey}`)
    setActorContent(response.data)
  }

  useEffect( () => {
    !actorContent && requestContent()
  })

  return (
    <S.MainContainer>
      {
        !!actorContent &&
        <>
          <S.ImgBackGround src={toSVGUrl(actorContent.profile_path)} />
          <S.Img src={toSVGUrl(actorContent.profile_path)} />
          <S.Title>{actorContent.name}</S.Title>
          <S.P>{actorContent.biography.slice(0, 300)}...</S.P>
          <S.Span>{actorContent.known_for_department}</S.Span>
          <S.Span>{actorContent.place_of_birth}</S.Span>
        </>
      }
    </S.MainContainer>
  )
}