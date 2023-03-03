import React, { useState } from 'react'
import { TfiTrash } from 'react-icons/tfi';
import './ListItem.css'

const  ListItem = ({ id, task, onRemoveTask }) => {
  const [isHovered, setIsHovered] = useState(false)

  const removeItem = () => onRemoveTask(id)

  return (
    <div className='item' onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <li>{task}</li>
      {isHovered && <TfiTrash onClick={removeItem}/>}
    </div>
  )
}

export default ListItem