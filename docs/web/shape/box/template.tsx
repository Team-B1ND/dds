import { DodamShape } from '@b1nd/dds-web'
import styled from 'styled-components'

interface TemplateProps {
  size: 'ExtraSmall' | 'Small' | 'Medium' | 'Large' | 'ExtraLarge'
}

const Template = ({ size }: TemplateProps) => {
  return <Box size={size} />
}

export default Template

const Box = styled.div<{ size: TemplateProps['size'] }>`
  width: 100px;
  height: 100px;

  background-color: #0083f0;

  ${({ size }) => DodamShape[size]}

  margin-bottom: 25px;
`
