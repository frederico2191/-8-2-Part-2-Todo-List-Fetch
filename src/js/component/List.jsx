import React, {useRef, useState} from 'react'
import ListItem from './ListItem.jsx'

const List = ({ tasks, onAddToDo, onRemoveTask }) => {
  const [enteredToDo, setEnteredToDo] = useState('a')
  const [error,setError] = useState({});

  const addToDoHandler = (event) =>{
      event.preventDefault();
      setError({})
      if (enteredToDo.trim().length === 0) {
          setError({
              title: "Invalid Input",
              message: "Please enter a valid name and age"
          })
      }
      onAddToDo(enteredToDo);
      setEnteredToDo('');
  }

    const toDoHandler = (event) => {
    setEnteredToDo(event.target.value) 
    }

  return (
    <div>
      <form onSubmit={addToDoHandler}>
        <input type="text" onChange={toDoHandler} value={enteredToDo}></input>
        <button type="submit"> Add a Task</button>
      </form>

      {error && <div>
        <h5>{error.title}</h5>
        <p>{error.message}</p>
        </div>}

      {!tasks.length ? <h5>No tasks, add a task</h5> : (
        tasks.map(({ id, task })=>(
          <ListItem key={id} id={id} task={task} onRemoveTask={onRemoveTask}/>
        ))
      )} 
    </div>
  )
}

export default List;

