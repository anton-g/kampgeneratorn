import React from 'react'
import styled from 'styled-components'

export default function Card({ item, style }) {
  return (
    <CardContainer color={item.color} style={style}>
      <CardContent>
        <CardHeader>{item.title}</CardHeader>
        <CardDescription>{item.description}</CardDescription>
      </CardContent>
      <CardMaterial>
        <h3>Du behöver</h3>
        <ul>
          {item.resources.map(x => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </CardMaterial>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  box-sizing: border-box;
  max-width: 500px;
  width: 100%;
  min-height: 100px;
  will-change: transform, opacity;
  transform-origin: center top;
  background-size: cover;
  background-color: ${props => props.color};
  border-radius: 10px;
  border: 3px solid #ece8d9;
  margin-bottom: 10px;
  padding: 4px 16px;
  display: flex;
`

const CardHeader = styled.h2`
  color: #142d4c;
  margin: 0;
  margin-bottom: 4px;
  font-size: 1.4rem;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`

const CardDescription = styled.p`
  margin: 0;
  margin-bottom: 4px;
  margin-right: 16px;
`

const CardMaterial = styled.div`
  flex-shrink: 0;
  margin-top: 4px;

  h3 {
    margin: 0;
    margin-bottom: 4px;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    margin-bottom: 8px;
    padding: 0;
  }
`
