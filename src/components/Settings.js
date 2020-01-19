import React, { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'
import CountSelect from './CountSelect'

export default function Settings({ onChange }) {
  const [selectedCount, setSelectedCount] = useState(values[0])

  useEffect(() => {
    onChange({
      count: selectedCount
    })
  }, [selectedCount, onChange])

  const anim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
    delay: 2000
  })

  return (
    <animated.div style={anim}>
      <CountSelect
        values={values}
        defaultValue={selectedCount}
        onChange={setSelectedCount}
      ></CountSelect>
    </animated.div>
  )
}

const values = [
  {
    text: 'Tre',
    value: 3
  },
  {
    text: 'Fem',
    value: 5
  },
  {
    text: 'Sju',
    value: 7
  },
  {
    text: 'Tio',
    value: 10
  }
]
