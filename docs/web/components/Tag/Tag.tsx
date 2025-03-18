import React from 'react'
import { DodamLightTheme, DodamTag, DodamTypography } from '@b1nd/dds-web'
import styled, { CSSObject } from 'styled-components'

type TagColor = 'red' | 'blue' | 'default'

interface Props {
  color: TagColor
  text: string
}

const Tag = ({ color, text }: Props) => {
  return (
    <StyledTagWrap color={color}>
      <StyledTag color={color}>{text}</StyledTag>
    </StyledTagWrap>
  )
}

export default Tag

const StyledTagWrap = styled.div<{ color: TagColor }>`
  width: 45px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  border-radius: 34px;
  background-color: ${({ color, theme }) => {
    switch (color) {
      case 'red':
        return DodamLightTheme.statusNegative

      case 'blue':
        return DodamLightTheme.primaryNormal

      case 'default':
        return DodamLightTheme.fillNormal
    }
  }};
`

const StyledTag = styled.span<{ color: TagColor }>`
  color: ${({ color }) =>
    color === 'default'
      ? DodamLightTheme.labelNeutral
      : DodamLightTheme.staticWhite};
  ${DodamTypography.Caption1.Bold};

  padding: 7.5px 12px;
`
