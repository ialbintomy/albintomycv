import React from 'react'
import "./skills.css"

const skills = ({skill}) => {
  return (
    <>
    <div className='skills'>
        <div className="techskills">
            <h1>{skill.technical}</h1>
            <h1>{skill.ability}</h1>
        </div>
    </div>
    </>
  )
}

export default skills
