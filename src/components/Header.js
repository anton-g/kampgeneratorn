import React from 'react'
import styled from 'styled-components'
import { animated, useSpring, useTransition, config } from 'react-spring'

const springConfig = {
  friction: 30,
  tension: 200,
  mass: 4
}

const items = [
  {
    key: 3,
    text: 'Tre',
    padding: 93
  },
  { key: 5, text: 'Fem', padding: 119 },
  { key: 7, text: 'Sju', padding: 91 },
  { key: 10, text: 'Tio', padding: 89 }
]

export default function Header({ selectedCount = 3 }) {
  const topAnimation = useSpring({
    from: { opacity: 0, transform: 'translate(-100%) rotate(8deg)' },
    to: { opacity: 1, transform: 'translate(0) rotate(-8deg)' },
    config: springConfig,
    delay: 500
  })

  const bottomAnimation = useSpring({
    from: { opacity: 0, transform: 'translate(100%) rotate(8deg)' },
    to: { opacity: 1, transform: 'translate(0) rotate(-8deg)' },
    config: springConfig,
    delay: 500
  })

  const item = items.find(i => i.key === selectedCount) ?? items[0]
  const transitions = useTransition(item, item => item.text, {
    from: { position: 'absolute', opacity: 0, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(50%)' },
    config: config.stiff
  })

  const paddingAnimation = useSpring({
    paddingLeft: `${item.padding}px`,
    config: config.wobbly
  })

  return (
    <StyledHeading>
      <StyledHeadingTop style={topAnimation}>
        {transitions.map(({ item, key, props }) => (
          <animated.span key={key} style={props}>
            {item.text}
          </animated.span>
        ))}
        <animated.span style={paddingAnimation}>kamps</animated.span>
      </StyledHeadingTop>
      <StyledHeadingBottom style={bottomAnimation}>
        Generatorn
      </StyledHeadingBottom>
    </StyledHeading>
  )
}

const StyledHeading = styled.h1`
  display: flex;
  flex-direction: column;

  @import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');
  font-family: 'Patua One', cursive;
  font-size: 62px;
  line-height: 0.8;
  color: white;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.2),
    0 10px 10px rgba(0, 0, 0, 0.15);
`

const StyledHeadingTop = styled(animated.span)`
  margin-left: -45px;
  transform: rotate(-8deg);
`

const StyledHeadingBottom = styled(animated.span)`
  margin-left: 45px;
  transform: rotate(-8deg);
`
