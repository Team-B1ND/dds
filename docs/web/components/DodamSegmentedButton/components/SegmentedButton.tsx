import React from 'react'
import { DodamSegmentedButton, DodamTheme } from '@b1nd/dds-web'

type ButtonType = 'block' | 'inline'

interface SegmentedBtnDataProps {
  text: string
  isAtv: boolean
}

interface SegmentedButtonProps {
  num: number
  type: ButtonType
  data: SegmentedBtnDataProps[]
  width?: number
  height?: number
  onClick?: (text?: string) => void
  textColor?: keyof DodamTheme
  customBackbgroundColor?: keyof DodamTheme
  customBackbgroundWrapColor?: keyof DodamTheme
}

const SegmentedButton = ({
  num,
  type,
  data,
  width,
  height,
  onClick,
  textColor,
  customBackbgroundColor,
  customBackbgroundWrapColor,
}: SegmentedButtonProps) => {
  return (
    <DodamSegmentedButton
      num={num}
      type={type}
      data={data}
      width={width}
      height={height}
      onClick={onClick}
      textColor={textColor}
      customBackbgroundColor={customBackbgroundColor}
      customBackbgroundWrapColor={customBackbgroundWrapColor}
    />
  )
}

export default SegmentedButton
