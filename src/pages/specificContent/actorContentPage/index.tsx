import * as S                   from './styles'
import { SearchActorType }      from '../../../utils/types/searchActorsTypes'
import { toSVGUrl }             from '../../../utils/toSVGUrl'
import { useEffect, useState }  from 'react'
import { api, apiKey }          from '../../../server'


interface Actor extends SearchActorType {
  'biography':            string,
  'known_for_department': string,
  'place_of_birth':       string,
  'birthday':             string,
}

interface PageProps {
  'id':   string,
  'type': string,
}


export const ActorContentPage = ({id, type}: PageProps) => {

  const [actorContent, setActorContent] = useState<Actor>({} as Actor)

  const requestContent = async () => {
    const response = await api.get(`/${type}/${id}?api_key=${apiKey}`)
    setActorContent(response.data)
  }
  

  const calculateActorAge = () => {

    const dateNow                           = new Date()
    const [yearNow, monthNow, dayNow]       = [dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDay()]
    const [birthYear, birthMonth, birthDay] = actorContent?.birthday.split('-')

    let actorAge = yearNow - Number(birthYear)

    if (monthNow >= Number(birthMonth) && dayNow >= Number(birthDay)) {
      actorAge++
    }

    return actorAge
  }


  useEffect( () => {
    !actorContent.name && requestContent()
  })

  return (
    <S.MainContainer>
      {
        !!actorContent.name &&
        <>
          <S.ImgBackGround src={toSVGUrl(actorContent.profile_path)} />
          <S.Img src={toSVGUrl(actorContent.profile_path)} />
          <S.Title>{actorContent.name}</S.Title>
          <S.P>{actorContent.biography.slice(0, 300)}...</S.P>
          <S.Span>{actorContent.known_for_department}</S.Span>
          <S.Span>{actorContent.place_of_birth}</S.Span>
          <S.Span>Age: {calculateActorAge()} years old</S.Span>
        </>
      }
    </S.MainContainer>
  )
}