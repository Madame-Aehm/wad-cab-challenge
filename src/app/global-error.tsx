'use client'

import { deleteThisCookie } from "@/serverActions";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.log("GLOBAL GLOBAL GLOBAL", error, error.digest);

  useEffect(() => {
    if (error.message === "no challenger") {
      deleteThisCookie();
    }
  }, [error.message])
  return (
    <html>
      <body>
      <>
        <h2>Uh oh... something went wrong 🥺</h2>
        <a href='/'><h3>Better try again...</h3></a>
      </>
      </body>
    </html>
  )
}