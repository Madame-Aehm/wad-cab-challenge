"use client"
import React from 'react'

type Props = {}

const error = (props: Props) => {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", textAlign: "center", width: "90vw", justifyContent: "center" }}>
      <h2>Uh oh... something went wrong 🥺</h2>
      <a href='/'><h3>Better try again...</h3></a>
    </main>
  )
}

export default error