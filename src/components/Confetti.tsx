"use client"
import useWindowDimensions from '@/hooks/useWindowDimensions';
import React from 'react'
import Confetti from 'react-confetti'

type Props = {}

function ConfettiWrapper({}: Props) {
  const { height, width } = useWindowDimensions();
  
  return (
    <Confetti height={height} width={width} />
  )
}

export default ConfettiWrapper