import { UnitType } from '../types'
import { UnitCard } from './UnitCard'
import { userStatus } from '../client'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles/Profile.css'

const units: Array<UnitType> = [
  {
    name: 'Borgir',
    slug: 'borgir',
    imgLink: 'https://static.wikia.nocookie.net/8be9c569-8086-48ef-8321-443d352094f2',
    mp3Path: 'borgir.mp3',
    authorId: '853765514013835264'
  },
  {
    name: 'T\'es tout le temps la toi',
    slug: 'ttltlt',
    imgLink: 'https://www.rapelite.com/wp-content/uploads/Ohmondieusalva-1350.png',
    mp3Path: 'borgir.mp3',
    authorId: '853765514013835264'
  },
  {
    name: 'Kaaris',
    slug: 'kaaris',
    imgLink: 'https://www.radiofrance.fr/s3/cruiser-production/2018/08/2fe40a6a-d738-4248-a25c-68fb659f50e8/250x250_kaaris_-_credit_edilson.jpg',
    mp3Path: 'kaaris.mp3',
    authorId: '2'
  },
  {
    name: 'HANNNNNNNNNN',
    slug: 'ronflement',
    imgLink: 'https://static9.depositphotos.com/1518767/1118/i/600/depositphotos_11186441-stock-photo-woman-awaken-by-her-husbands.jpg',
    mp3Path: 'ronflement.mp3',
    authorId: '2'
  },
  {
    name: 'GROS NIBARDS',
    slug: 'joel',
    imgLink: 'https://i.ytimg.com/vi/GhiNXGh0KT4/maxresdefault.jpg',
    mp3Path: 'joel.mp3',
    authorId: '853765514013835264'
  },
  {
    name: 'ALERTE AU GOGOL',
    slug: 'alerte',
    imgLink: 'https://i.ytimg.com/vi/0uaQMxBjd5E/hqdefault.jpg',
    mp3Path: 'alerte.mp3',
    authorId: '853765514013835264'
  },
  {
    name: 'Oh Bosetti',
    slug: 'bosetti',
    imgLink: 'https://i.ytimg.com/vi/lzQmxVQg3YA/maxresdefault.jpg',
    mp3Path: 'bosetti.mp3',
    authorId: '2'
  },
  {
    name: 'PIS DU SPEED',
    slug: 'dcpds',
    imgLink: 'https://f4.bcbits.com/img/0021705450_24.jpg',
    mp3Path: 'dcpds.mp3',
    authorId: '853765514013835264'
  },
  {
    name: 'Je suis fatigué',
    slug: 'tuchel',
    imgLink: 'https://icdn.psgtalk.com/wp-content/uploads/2019/10/Thomas-Tuchel-pre-match-press-conference-Nice-vs-PSG-Ligue-1-2019-1024x682.jpg',
    mp3Path: 'tuchel.mp3',
    authorId: '853765514013835264'
  }
]

export const Profile = () => {
  const [userInfos, setUserInfos] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    userStatus().then(user => {
      if (!user.data.user) navigate('/')
      setUserInfos({
        providerId: user.data.user?.user_metadata.provider_id,
        username: user.data.user?.user_metadata.full_name
      })
      console.log(user.data.user?.user_metadata)
    })
  }, [])

  return (
    <div className="flex column">
      <h2>Salut { userInfos.username }, t'a tes sons, tu peux les supprimer t'sais</h2>
      <h3>Mes sons</h3>
      <div className="flex wrap">
        { units.filter(unit => unit.authorId === userInfos.providerId).map(unit => <UnitCard key={unit.slug} unit={unit}></UnitCard>) }
      </div>
    </div>

  )
}