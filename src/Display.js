import React from 'react'

const Display = props => {
  return (

    <div>
       <h1>Hello  {props.name}</h1>
       <h2>This is my id no : {props.id}</h2>
    </div>
  )
}

export default Display;