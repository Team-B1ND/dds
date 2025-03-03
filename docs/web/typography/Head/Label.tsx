import { DodamTypography } from '@b1nd/dds-web'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface LabelProps {
  type: 'Label'
  size: 'Bold' | 'Medium' | 'Regular'
  children: ReactNode
}

const Label = ({ type, size, children }: LabelProps) => {
  return (
    <StyledLabel type={type} size={size}>
      {children}
    </StyledLabel>
  )
}

export default Label

const StyledLabel = styled.h2<{
  type: 'Label'
  size: 'Bold' | 'Medium' | 'Regular'
}>`
  ${({ type, size }) => DodamTypography[type][size]}
`
