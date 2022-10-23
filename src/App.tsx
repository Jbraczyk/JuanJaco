import { Header } from './components/Header'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import { Login } from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css'

// export const App = () => {
//   return (
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={ <Home /> } />
//         <Route path="profile" element={ <Profile /> } />
//       </Routes>
//       </BrowserRouter>
//   )
// }

export const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="profile" element={ <Profile /> } />
        </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}
