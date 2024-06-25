"use client"
import { deleteThisCookie } from '@/serverActions'
import React, { useEffect } from 'react'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({ error }: Props) => {

  console.log("ERROR ERROR ERROR", error, error.digest);

  useEffect(() => {
    if (error.message === "no challenger") {
      deleteThisCookie();
    }
  }, [error.message])
  return (
    <>
      <h2>Uh oh... something went wrong 🥺</h2>
      <a href='/'><h3>Better try again...</h3></a>
    </>
  )
}

export default Error