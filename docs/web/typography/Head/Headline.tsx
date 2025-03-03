import { DodamTypography } from '@b1nd/dds-web'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface HeadlineProps {
  type: 'Headline'
  size: 'Bold' | 'Medium' | 'Regular'
  children: ReactNode
}

const Headline = ({ type, size, children }: HeadlineProps) => {
  return (
    <StyledHeading type={type} size={size}>
      {children}
    </StyledHeading>
  )
}

export default Headline

const StyledHeading = styled.h2<{
  type: 'Headline'
  size: 'Bold' | 'Medium' | 'Regular'
}>`
  ${({ type, size }) => DodamTypography[type][size]}
`
