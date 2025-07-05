import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alumni from './Component/Alumni'
import Maganize from './Component/Maganize'
import OnlineERPLogin from './Component/OnlineERPLogin'
import UUCMSLogin from './Component/UUCMSLogin'
import ApplyNow from './Component/ApplyNow'
import { Routes,Route } from 'react-router-dom';
import Navbar from './Page/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='Alumni' element={<Alumni/>}/>
        <Route path='Maganize' element={<Maganize/>}/>
        <Route path='OnlineERPLogin' element={<OnlineERPLogin/>}/>
        <Route path='UUCMSLogin' element={<UUCMSLogin/>}/>
        <Route path='ApplyNow' element={<ApplyNow/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
