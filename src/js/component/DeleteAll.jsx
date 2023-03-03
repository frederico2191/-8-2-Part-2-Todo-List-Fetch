import React from 'react'
import './DeleteAll.css'

const DeleteAll = ({ onDeleteAllTasks }) => {
  return (
    <button className="delete" onClick={onDeleteAllTasks}>Delete All Tasks</button>
  )
}

export default DeleteAll