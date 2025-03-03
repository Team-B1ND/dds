import { DodamTypography } from '@b1nd/dds-web'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface TitleProps {
  type: 'Title1' | 'Title2' | 'Title3'
  size: 'Bold' | 'Medium' | 'Regular'
  children: ReactNode
}

const Title = ({ type, size, children }: TitleProps) => {
  return (
    <StyledTitle type={type} size={size}>
      {children}
    </StyledTitle>
  )
}

export default Title

const StyledTitle = styled.h2<{
  type: 'Title1' | 'Title2' | 'Title3'
  size: 'Bold' | 'Medium' | 'Regular'
}>`
  ${({ type, size }) => DodamTypography[type][size]}
`
