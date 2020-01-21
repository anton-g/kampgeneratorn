import React from 'react'
import { useTransition, animated } from 'react-spring'
import Card from './Card'

export default function Cards({ items }) {
  const transitions = useTransition(items, item => item.id, {
    from: { opacity: 0, transform: `perspective(600px) rotateX(-90deg)` },
    enter: { opacity: 1, transform: `perspective(600px) rotateX(0deg)` },
    trail: 250,
    config: { mass: 1.5, tension: 120, friction: 12, precision: 0.01 }
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
