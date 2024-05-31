import React from 'react'

type Props = {}

const notFound = (props: Props) => {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", textAlign: "center", width: "90vw", justifyContent: "center" }}>
      <h2>No Coding Challenge here 🥺</h2>
      <a href='/'><h3>Better try again...</h3></a>
    </main>
  )
}

export default notFound