
import React from 'react'

function Title({title,index,setRotationPosition,setIndex}) {
  return (
    <div className='title-item'
    onMouseEnter = {()=>setRotationPosition(index)}
    onMouseLeave = {()=>setIndex(-1)}
    >
        <h1> {title} </h1>

    </div>
  )
}

export default Title