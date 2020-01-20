import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { GlobalStyles } from './global.style'
import Header from './components/Header'
import Settings from './components/Settings'
import Button from './components/Button'
import Cards from './components/Cards'

function App() {
  const [settings, setSettings] = useState({ count: 3 })
  const [items, setItems] = useState([])

  const anim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
    delay: 1000
  })

  const handleClick = () => {
    setItems(
      colors.slice(0, settings.count).map((c, idx) => ({
        key: idx,
        color: c
      }))
    )
  }

  return (
    <AppWrapper>
      <GlobalStyles></GlobalStyles>
      <Header selectedCount={settings.count}></Header>
      <FormWrapper style={anim}>
        <Settings onChange={setSettings}></Settings>
        <Button onClick={handleClick}></Button>
      </FormWrapper>
      <Cards items={items}></Cards>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

const colors = [
  '#4baea0',
  '#b6e6bd',
  '#645c84',
  '#f1f0cf',
  '#427996',
  '#f0c9c9',
  '#f67280',
  '#a9eca2',
  '#eaa3fc',
  '#e97a7a',
  '#e6e696'
]
