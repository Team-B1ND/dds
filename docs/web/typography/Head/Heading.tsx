import { DodamTypography } from '@b1nd/dds-web'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface TitleProps {
  type: 'Heading1' | 'Heading2'
  size: 'Bold' | 'Medium' | 'Regular'
  children: ReactNode
}

const Heading = ({ type, size, children }: TitleProps) => {
  return (
    <StyledHeading type={type} size={size}>
      {children}
    </StyledHeading>
  )
}

export default Heading

const StyledHeading = styled.h2<{
  type: 'Heading1' | 'Heading2'
  size: 'Bold' | 'Medium' | 'Regular'
}>`
  ${({ type, size }) => DodamTypography[type][size]}
`
