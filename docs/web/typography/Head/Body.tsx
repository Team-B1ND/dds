import { DodamTypography } from '@b1nd/dds-web'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface BodyProps {
  type: 'Body1' | 'Body2'
  size: 'Bold' | 'Medium' | 'Regular'
  children: ReactNode
}

const Body = ({ type, size, children }: BodyProps) => {
  return (
    <StyledBody type={type} size={size}>
      {children}
    </StyledBody>
  )
}

export default Body

const StyledBody = styled.h2<{
  type: 'Body1' | 'Body2'
  size: 'Bold' | 'Medium' | 'Regular'
}>`
  ${({ type, size }) => DodamTypography[type][size]}
`
