"use client"
import { createChallenger, refreshAfterCreation } from '@/serverActions'
import { validateCreateChallenger } from '@/utils/validation'
import { revalidatePath } from 'next/cache'
import React, { useRef, useState } from 'react'

export type ChallengerDataType = {
  name: string,
  course: string
}

const JoinChallenge = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState<ChallengerDataType>({
    name: "",
    course: ""
  })

  const challengerData = useRef<ChallengerDataType>({
    name: "",
    course: ""
  })

  function handleChange (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    if (e.target.name === "name") {
      challengerData.current.name = e.target.value;
      if (validation.name) setValidation(prev => { return { ...prev, name: "" }});
      return;
    }
    if (e.target.name === "course") {
      challengerData.current.course = e.target.value;
      if (validation.course) setValidation(prev => { return { ...prev, course: "" }});
      return;
    }
  }

  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const validationCheck = validateCreateChallenger(challengerData.current);
    if (!validationCheck.valid) {
      setValidation(validationCheck.validation);
    } else {
      setLoading(true);
      try {
        const result = await createChallenger({
          name: challengerData.current.name.trim(),
          course: challengerData.current.course
        });
        if (result.error === "Meep - that alias is already being used!") {
          setValidation({ name: result.error, course: "" });
        } 
        else if (result.error) {
          return setError(result.error);
        } 
        else refreshAfterCreation();
      } catch (error) {
        console.log(error);
        setError("Something went wrong... check console");
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <p>To sign up for the challenge, enter your name or alias, and specify which course you&apos;re doing:</p>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <input name='name' onChange={handleChange} placeholder='Choose an alias' className={validation.name ? "validationError" : ""} />
            <small style={{ color: 'red', height: "1.1rem" }}>{validation.name}</small>
          </span>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <select defaultValue={""} name='course' onChange={handleChange} className={validation.course ? "validationError" : ""}>
              <option value="">Select a course:</option>
              <option value={"data"}>Data Science</option>
              <option value={"web"}>Web Development</option>
            </select>
            <small style={{ color: "red", height: "1.1rem" }}>{ validation.course }</small>
          </span>
        </div>
        { error && <p style={{ color: "red", height: "1.1rem" }}>{ error }</p> }
        <button type='submit' disabled={loading}>{ loading ? "Loading..." : "Join Challenge!" }</button>
      </form>
    </>
  )
}

export default JoinChallenge