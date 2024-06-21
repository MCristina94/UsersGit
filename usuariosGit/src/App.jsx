import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Detalle from './Pages/Detalle'
import Favs from './Pages/Favs'
import Login from './Pages/Login'
import { useState } from 'react'
import ProtectedRoute from './Components/ProtectedRoute'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate('/');
    }

  const logout=()=>{
    setIsAuthenticated(false);
    navigate('login')
  }
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
        <Route path='/login' element={<Login login={login}/>} />
          <Route path='/' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home/></ProtectedRoute> }/>
          <Route path='/contact' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Contact/></ProtectedRoute>} />
          <Route path='/detail/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Detalle/></ProtectedRoute>}/>
          <Route path='/favs' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Favs/></ProtectedRoute>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
