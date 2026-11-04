import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Route ,Routes,

  
} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello</h1>
    {/* anchor tag refresh */}
   

     <Routes>
        <Route path='Home' element= {<Home />}/>
        <Route path='About' element= {<About />}/>
        <Route path='Contact' element= {<Contact />}/>
     </Routes>
    </>
  )
}

export default App
