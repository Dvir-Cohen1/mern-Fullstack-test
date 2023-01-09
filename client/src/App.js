import React from 'react'
import MainContent from './components/MainContent'
import MainContext from './context/mainContext'

const App = () => {
  return (
    <MainContext>
      <MainContent className="main-content" />
    </MainContext>
  )
}

export default App