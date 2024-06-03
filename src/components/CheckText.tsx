"use client"
import { checkText } from '@/serverActions'
import React, { useRef, useState } from 'react'

const CheckText = () => {
  const inputValue = useRef("");
  const [validation, setValidation] = useState("");
  function handleChange (e: React.ChangeEvent<HTMLTextAreaElement>) {
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
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      setValidation("Something went wrong.... :/")
    }
  }
  return (
    <>
      <textarea 
        className={ validation ? "validationError" : ""}
        onChange={handleChange}
        spellCheck={false}
        placeholder="Once you've deciphered your text, paste it here to test if it's correct!" 
        style={{ width: "80%", maxWidth: "600px", alignSelf: "center" }} 
      />
      <button style={{ width: "80%", maxWidth: "600px", alignSelf: "center" }} onClick={handleClick}>Check Text</button>
      <small style={{ marginTop: "1rem", color: "red" }}>{ validation }</small>
    </>
  )
}

export default CheckText