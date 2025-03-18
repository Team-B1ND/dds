import React from 'react'
import styled from 'styled-components'

interface DodamDividerProps {
  type: 'Large' | 'Small'
}

const Divider = ({ type }: DodamDividerProps) => {
  return <StyeldDodamDivider type={type} />
}

export default Divider

const StyeldDodamDivider = styled.div<{ type: 'Large' | 'Small' }>`
  min-width: 100px;
  width: 100%;
  height: ${({ type }) => (type === 'Large' ? '8px' : '1px')};
  flex-shrink: 0;
  background-color: #99989889;
`
