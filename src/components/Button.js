import React from 'react'
import styled from 'styled-components'

export default function Button({ onClick }) {
  return <StyledButton onClick={onClick}>Nu kör vi!</StyledButton>
}

const StyledButton = styled.button`
  color: #ece8d9;
  font-size: 1.3rem;
  line-height: 1.3;
  border: 3px solid #ece8d9;
  padding: 4px 6px;
  height: 40px;
  width: 160px;
  font-family: 'Roboto Mono', monospace;
  border-radius: 5px;
  margin-top: 10px;
  background-color: rgba(246, 114, 128, 0);
  transition: background-color 0.1s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(246, 114, 128, 1);
  }
`
