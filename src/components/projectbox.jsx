import React from 'react'
import './projectbox.css'

const projectbox = ({project}) => {
  return (
    <>
    <div class="holographic-container">
    <div class="holographic-card">
      <h2>{project.title}</h2>
      <p>{project.about}</p>
    </div>
    </div>
    </>
  )
}

export default projectbox
