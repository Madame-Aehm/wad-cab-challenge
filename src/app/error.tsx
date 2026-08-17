"use client"
import { deleteThisCookie } from '@/serverActions'
import { useEffect } from 'react'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({ error }: Props) => {

  useEffect(() => {
    if (error.digest) {
      deleteThisCookie();
    }
  }, [error.digest])
  return (
    <>
      <h2>Uh oh... something went wrong 🥺</h2>
      <a href='/'><h3>Better try again...</h3></a>
    </>
  )
}

export default Error