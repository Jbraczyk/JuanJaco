import { supabase, userStatus } from '../client'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import '../App.css'

export function Login() {

  const navigate = useNavigate()

  useEffect(() => {
    userStatus().then(user => user.data.user ? navigate('/home') : null)
  }, [])

  async function signInWithDiscord(e) {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'discord' })
  }

  return (
    <form id="default-form" className="flex column">
      <button onClick={signInWithDiscord}>Me connecter</button>
    </form>
  )
}