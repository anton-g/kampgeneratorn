import React from 'react'
import styled from 'styled-components'
import { useTransition, animated as a } from 'react-spring'

export default function Cards({ items }) {
  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, transform: `perspective(600px) rotateX(-90deg)` },
    enter: { opacity: 1, transform: `perspective(600px) rotateX(0deg)` },
    trail: 500,
    config: { mass: 1.5, tension: 120, friction: 12, precision: 0.01 }
  })

  return transitions.map(({ item, props, key }) => (
    <Card
      key={key}
      color={item.color}
      style={{
        opacity: props.opacity.interpolate(o => o),
        transform: props.transform
      }}
    />
  ))
}

const Card = styled(a.div)`
  max-width: 500px;
  max-height: 150px;
  width: 50ch;
  height: 50ch;
  will-change: transform, opacity;
  transform-origin: center top;
  background-size: cover;
  background-color: ${props => props.color};
  border-radius: 10px;
  border: 3px solid #ece8d9;
  margin-bottom: 10px;
`
