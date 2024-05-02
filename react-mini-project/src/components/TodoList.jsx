import React, { useState } from "react";
import Tasks from "../assets/tasks.json";

function TodoList() {
  const [task, setTask] = useState(Tasks);
  return (
    <>
          {task.map((oneTask) => {
        return (
          oneTask.completed && (
            <>
              <li>{oneTask.task}</li>
             <button onClick={() => setTask(oneTask.completed = true)} className="delete-button">Delete Task</button>
            </>
          )
        );
      })}
    </>
  );
}

export default TodoList;
