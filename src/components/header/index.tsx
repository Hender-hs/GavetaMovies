import { Button } from '../button'
import { Nav } from '../nav'
import * as S from './styles'

export const Header = () => {

  return (
    <S.Header>
      <Nav />
      
      <S.ImgBackgroung src='https://s3-alpha-sig.figma.com/img/9125/3fda/2ae5f43277c173e4558b1e8e668076ee?Expires=1633305600&Signature=Cm~O~KGtMOjki0nQSRQ77hBaU-GqeDOG-U96rthkSFop-P8hkL8npQyG9Y8vzTqofD3NQVARc16Oh39K8I6NAVhuezNmN5xXEi2FP8F~5oGQKjbHKyBzf88MqYxxDV-8V0Yv2Ph2aKX4fPST8VtnYgAWwKcdd3JKhW-YffrXZ7sxHP6BrIVrb5Q4Ku-SccsBuRo-WBmIGpYUj1lkNHDiL57Nwecofl4WHVOdUsNAVxFSzSGQyW-c7F1jYSDOiUqwz1GO1eRGAcmOR2zj3K9uLnUDxLfmy-j2O2gawuDWAuz-~rd5ae5ZVNjdEo6sBUG5rOk9I9GViQUVDs4uv3lX~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />

      <S.ImgInfoDiv>
        <S.H1>Cavaleiro das Trevas</S.H1>
        <Button color='blue' >Mais Info</Button>
      </S.ImgInfoDiv>

    </S.Header>
  )
}