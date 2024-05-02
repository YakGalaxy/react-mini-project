import React, { useState } from 'react'
import Tasks from '../assets/tasks.json'

function TodoList() {
    const [task, setTask] = useState(Tasks)
    // const [isCompleted, setIsCompleted] = useState(false); 
  return (
      <>
          
          {task.map((oneTask) => {
              return (oneTask.completed && <li>{oneTask.task}</li>)
              }
          )}
    </>
  )
}

export default TodoList