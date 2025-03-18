import React from 'react'
import { Checkmark, DodamCheckBox } from '@b1nd/dds-web'
import styled from 'styled-components'

interface CheckBoxProps {
  isDisabled: boolean
  color: 'red' | 'blue'
}

const CheckBox = ({ isDisabled = false, color }: CheckBoxProps) => {
  return isDisabled === true ? (
    <DefaultCheckBox></DefaultCheckBox>
  ) : (
    <CheckBoxContainer color={color}>
      <Checkmark size={24} color='staticWhite' />
    </CheckBoxContainer>
  )
}

export default CheckBox

const CheckBoxContainer = styled.div<{ color: 'red' | 'blue' }>`
  width: 24px;
  height: 24px;

  display: flex;
  padding: 3px;
  border-radius: 4px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  background-color: ${({ color }) => (color === 'red' ? '#FF4242' : '#0083F0')};
`

const DefaultCheckBox = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  padding: 3px;
  border-radius: 4px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 4px;
  border: 2px solid #c4c5c6;
`
