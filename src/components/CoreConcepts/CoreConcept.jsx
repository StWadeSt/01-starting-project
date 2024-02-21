import React from 'react'

const CoreConcept = (props) => {
  return (
    <div>
        <img src={props.img} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default CoreConcept