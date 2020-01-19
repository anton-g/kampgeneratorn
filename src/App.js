import React from 'react'
import { GlobalStyles } from './global.style'
import Header from './components/Header'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <GlobalStyles></GlobalStyles>
      <Header></Header>
    </div>
  )
}

export default App
