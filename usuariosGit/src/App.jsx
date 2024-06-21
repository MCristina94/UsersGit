import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Detalle from './Pages/Detalle'
import Favs from './Pages/Favs'
import Login from './Pages/Login'
function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
        <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/detail/:id' element={<Detalle/>}/>
          <Route path='/favs' element={<Favs/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
