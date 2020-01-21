import React from 'react'
import { useTransition, animated } from 'react-spring'
import Card from './Card'

export default function Cards({ items }) {
  const transitions = useTransition(items, item => item.id, {
    from: {
      opacity: 0,
      transform: `perspective(600px) rotateX(-90deg)`
    },
    enter: {
      opacity: 1,
      transform: `perspective(600px) rotateX(0deg)`
    },
    leave: {
      transform: `perspective(600px) rotateX(90deg)`
    },
    trail: 250,
    config: (item, state) => {
      switch (state) {
        case 'enter':
          return { mass: 1.8, tension: 80, friction: 12, precision: 0.01 }
        case 'leave':
          return {
            mass: 1.8,
            tension: 210,
            friction: 40
          }
      }
    }
  })

  return transitions.map(({ item, props, key }) => (
    <AnimatedCard
      key={key}
      item={item}
      style={{
        opacity: props.opacity.interpolate(o => o),
        transform: props.transform
      }}
    />
  ))
}

const AnimatedCard = animated(Card)
