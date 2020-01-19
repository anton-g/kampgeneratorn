import React from 'react'
import styled from 'styled-components'

export default function CountSelect({ values, defaultValue, onChange }) {
  const handleChange = event => onChange(parseInt(event.target.value))

  return (
    <StyledField>
      <StyledLabel htmlFor="count-select">Antal kamper</StyledLabel>
      <StyledSelect
        id="count-select"
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {values.map(v => (
          <option key={v.value} value={v.value}>
            {v.text}
          </option>
        ))}
      </StyledSelect>
    </StyledField>
  )
}

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  font-size: 1.2rem;
  color: #ece8d9;
  margin-bottom: 4px;
`

const StyledSelect = styled.select`
  color: #ece8d9;
  font-size: 1.3rem;
  line-height: 1.3;
  border: 3px solid #ece8d9;
  background-color: transparent;
  padding: 4px 6px;
  height: 40px;
  width: 160px;
  font-family: 'Roboto Mono', monospace;
`
