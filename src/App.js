import React, { useState } from 'react'
import styled from 'styled-components'
import { GlobalStyles } from './global.style'
import Header from './components/Header'
import Settings from './components/Settings'

function App() {
  const [settings, setSettings] = useState({ count: 3 })

  return (
    <AppWrapper>
      <GlobalStyles></GlobalStyles>
      <Header selectedCount={settings.count}></Header>
      <Settings onChange={setSettings}></Settings>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
