import React, { useState } from 'react'
import { TfiTrash } from 'react-icons/tfi';
import './ListItem.css'

const  ListItem = ({ id, label, onRemoveTask, onMarkDone, done }) => {
  const [isHovered, setIsHovered] = useState(false)

  const removeItem = () => onRemoveTask(id)

  const handleSetMarked = (event) => {
    onMarkDone(id, event.target.checked)
  }

  return (
    <div className='item' onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="item-content">
        <input type="checkbox" checked={done} onChange={handleSetMarked}/>
        <p className="item-label">{label}</p>
      </div>
      {isHovered && <TfiTrash onClick={removeItem}/>}
    </div>
  )
}

export default ListItem