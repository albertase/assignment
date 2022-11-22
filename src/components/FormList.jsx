import React from 'react'

function FormList(props) {
  return (
    <div>
      {props.name.map(item => {
        return (
        <>
        <h2>{item.firstName}1</h2>
        <h2>{item.lastName}2</h2>
        <h2>{item.username}3</h2>
        </>)
      })}
        
    </div>
  )
}

export default FormList