import React, { useState } from 'react'
import Cards from './components/Cards'

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

function App() {
  const [items, setItems] = useState([])

  return (
    <div>
      <button onClick={() => setItems(data)}>test</button>
      <Cards items={items}></Cards>
    </div>
  )
}

export default App
