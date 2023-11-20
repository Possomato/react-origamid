import React from 'react'

const Produto = ({name, prop1, prop2}) => {
  return (
    <div id='produto'>
      <p>{name}</p>
      <ul>
        <li>{prop1}</li>
        <li>{prop2}</li>
      </ul>
    </div>
  )
}

export default Produto
