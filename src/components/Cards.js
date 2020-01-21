import React, { useMemo } from 'react'
import { useTransition, animated } from 'react-spring'
import Card from './Card'

export default function Cards({ items }) {
  const itemsWithColors = useMemo(() => addColors(items), [items])

  const transitions = useTransition(itemsWithColors, item => item.id, {
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

const addColors = items => {
  const randomColorStartIdx = Math.floor(Math.random() * colors.length)

  return items.map((item, idx) => {
    let colorIdx = randomColorStartIdx + idx
    if (colorIdx > colors.length - 1) colorIdx = colorIdx - colors.length
    return {
      ...item,
      color: colors[colorIdx]
    }
  })
}

const colors = [
  'hsl(58, 55%, 88%)',
  'hsl(23, 37%, 60%)',
  'hsl(97, 100%, 90%)',
  'hsl(39, 57%, 70%)',
  'hsl(114, 66%, 78%)',
  'hsl(60, 62%, 75%)',
  'hsl(354, 88%, 81%)',
  'hsl(152, 41%, 82%)',
  'hsl(184, 33%, 65%)',
  'hsl(129, 49%, 81%)',
  'hsl(0, 72%, 70%)',
  'hsl(199, 53%, 77%)',
  'hsl(357, 40%, 76%)',
  'hsl(172, 50%, 69%)',
  'hsl(288, 94%, 91%)',
  'hsl(0, 57%, 86%)',
  'hsl(201, 49%, 80%)'
]
