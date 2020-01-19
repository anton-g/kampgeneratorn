import React from 'react'
import styled from 'styled-components'
import { useTransition, animated as a } from 'react-spring'

export default function Cards({ items }) {
  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, transform: `perspective(600px) rotateX(-90deg)` },
    enter: { opacity: 1, transform: `perspective(600px) rotateX(0deg)` },
    trail: 500,
    config: { mass: 2, tension: 120, friction: 12, precision: 0.01 }
  })

  return transitions.map(({ item, props, key }) => (
    <Card
      key={key}
      url={item.url}
      style={{
        opacity: props.opacity.interpolate(o => o),
        transform: props.transform
      }}
    />
  ))
}

const Card = styled(a.div)`
  max-width: 500px;
  max-height: 250px;
  width: 50ch;
  height: 50ch;
  will-change: transform, opacity;
  transform-origin: center top;
  background-size: cover;
  background-image: url(${props => props.url});
`

const data = [
  {
    url:
      'https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop',
    key: 1
  },
  {
    url:
      'https://images.unsplash.com/photo-1578990628615-3582f6bfa0d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    key: 2
  },
  {
    url:
      'https://images.unsplash.com/photo-1579021038157-9926ddfa0e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    key: 3
  }
]
