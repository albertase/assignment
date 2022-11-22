import React from 'react'
import Lowest from './Lowest'

function ItemDescription(props) {
  return (
    <div>
        <p>{props.me.firstName}</p>
        <p>{props.me.lastName}</p>
        <p>{props.me.username}</p>
        <Lowest us={props.me}/>
    </div>
  )
}

export default ItemDescription