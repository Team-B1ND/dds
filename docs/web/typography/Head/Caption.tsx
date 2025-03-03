import { DodamTypography } from '@b1nd/dds-web'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface CaptionProps {
  type: 'Caption1' | 'Caption2'
  size: 'Bold' | 'Medium' | 'Regular'
  children: ReactNode
}

const Caption = ({ type, size, children }: CaptionProps) => {
  return (
    <StyledCaption type={type} size={size}>
      {children}
    </StyledCaption>
  )
}

export default Caption

const StyledCaption = styled.h2<{
  type: 'Caption1' | 'Caption2'
  size: 'Bold' | 'Medium' | 'Regular'
}>`
  ${({ type, size }) => DodamTypography[type][size]}
`
