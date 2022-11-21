import { Header } from './components/layouts/Header'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import { AddSong } from './components/AddSong'
import { Login } from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'

export function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/home" element={ [<Header />, <Home />] } />
            <Route path="/profile" element={ [<Header />, <Profile />] } />
            <Route path="/add" element={ [<Header/>, <AddSong />] } />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}
