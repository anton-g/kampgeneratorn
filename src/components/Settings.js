import React, { useState, useEffect } from 'react'
import CountSelect from './CountSelect'

export default function Settings({ onChange }) {
  const [selectedCount, setSelectedCount] = useState(values[0].value)

  useEffect(() => {
    onChange({
      count: selectedCount
    })
  }, [selectedCount, onChange])

  return (
    <div>
      <CountSelect
        values={values}
        defaultValue={selectedCount}
        onChange={setSelectedCount}
      ></CountSelect>
    </div>
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
