"use client"
import { checkText } from '@/serverActions'
import React, { useRef, useState } from 'react'
import ConfettiWrapper from './Confetti';

const CheckText = () => {
  const inputValue = useRef("");
  const [validation, setValidation] = useState("");
  const [complete, setComplete] = useState(false);
  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setValidation("");
    inputValue.current = e.target.value;
  }
  async function handleClick () {
    if (!inputValue.current) {
      return setValidation("You must submit something!");
    }
    try {
      const result = await checkText(inputValue.current);
      if (result?.error) {
        setValidation(result.error);
      } else setComplete(true);
    } catch (error) {
      console.log(error);
      setValidation("Something went wrong.... :/")
    }
  }
  return complete ? (
    <>
      <ConfettiWrapper />
      <h2>You did it!! Congrats 🥳</h2>
    </>
  ) : (
    <>
      <input 
        className={ validation ? "validationError" : ""}
        onChange={handleChange}
        spellCheck={false}
        placeholder="Once you've deciphered your text, enter the name of the film here!" 
        style={{ width: "80%", maxWidth: "600px", alignSelf: "center" }} 
      />
      <button style={{ width: "80%", maxWidth: "600px", alignSelf: "center" }} onClick={handleClick}>Check Text</button>
      <small style={{ margin: "1rem 0", color: "red" }}>{ validation }</small>
    </>
  )
}

export default CheckText