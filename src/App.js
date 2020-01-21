import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { GlobalStyles } from './global.style'
import { getActivities } from './api'
import Header from './components/Header'
import Settings from './components/Settings'
import Button from './components/Button'
import Cards from './components/Cards'

function App() {
  const [settings, setSettings] = useState({ count: 3 })
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  const anim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
    delay: 1000
  })

  const handleClick = () => {
    if (items.length) {
      setItems([])
      return
    }
    setLoading(true)
    getActivities(settings.count).then(activities => {
      setItems(activities)
      setLoading(false)
    })
  }

  return (
    <AppWrapper>
      <GlobalStyles></GlobalStyles>
      <Header selectedCount={settings.count}></Header>
      <FormWrapper style={anim}>
        <Settings onChange={setSettings}></Settings>
        <Button onClick={handleClick}>
          {loading ? 'Laddar..' : items.length ? 'Nytt försök!' : 'Nu kör vi!'}
        </Button>
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
