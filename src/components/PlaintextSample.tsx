"use client"
import React, { useState } from 'react'

type Props = {
  cipherText: string
}

const PlaintextSample = ({ cipherText }: Props) => {
  const [showButton, setShowButton] = useState(false);
  const [buttonValue, setButtonValue] = useState("copy");
  const handleShowButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowButton(e.type === "mouseenter" ? true : false);
  }
  const copyText = () => {
    navigator.clipboard.writeText(cipherText);
    setButtonValue("copied");
  }
  return (
    <div className='plaintext' onMouseEnter={handleShowButton} onMouseLeave={handleShowButton}>
      <p >{ cipherText }</p>
      <button className={`copyBtn ${showButton ? "" : "hide"}`} onClick={copyText}>{ buttonValue }</button>
    </div>
  )
}

export default PlaintextSample