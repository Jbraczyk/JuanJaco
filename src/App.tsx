import { Header } from './components/Header'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import { AddSong } from './components/AddSong'
import { Login } from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="profile" element={ <Profile /> } />
          <Route path="add" element={ <AddSong /> } />
        </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}
