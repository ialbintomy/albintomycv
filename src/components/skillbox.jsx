import React from 'react'
import "./skillbox.css"

const skillbox = ({skills}) => {
  return (
    <>
    <div className='skillcontainer'>
    <div className="box">
              <h5>{skills.title}</h5>
              <p>{skills.about}</p>
          </div>   
    </div>
    </>
  )
}

export default skillbox
