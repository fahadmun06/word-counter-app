import React from 'react'

export default function About(props) {
  return (
    <div>
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }} >This is About Page</h1>
    </div>
  )
}
