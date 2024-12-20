import React from 'react'
import Sidebar from './components/sidebar'
import Player from './components/player'
import Display from './components/display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar></Sidebar>
        <Display></Display>

      </div>
      <Player></Player>
      
      
    </div>
  )
}

export default App
