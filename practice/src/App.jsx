import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useCallback } from 'react';
import { useRef } from 'react';
import { createContext,useContext } from 'react';

// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import 'remixicon/fonts/remixicon.css'
// import Explore from './components/explore.jsx'
// import Senior from './components/Senior.jsx'

const UserContext=createContext()
function App(){
  const username="Rahul"
  return(
    <UserContext.Provider value={username}>
      <Dashboard/>
    </UserContext.Provider>
  )
}

function Dashboard (){
  return<Profile/>
}

function Profile(){
  
  return<h1>Welcome,{props.name}</h1>
}

export default App