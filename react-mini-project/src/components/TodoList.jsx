import React, { useState } from "react";
import Tasks from "../assets/tasks.json";
// import tasksData from "../assets/tasks.json";
import { Link } from "react-router-dom";

function TodoList() {
  // const taskDetails = tasksData.find((task) => task._id === taskId);
  const [task, setTask] = useState(Tasks);
  return (
    <>
          {task.map((oneTask) => {
        return (
          oneTask.completed && (
            <>
              <Link to={`/task/${oneTask.id}`}><li>{oneTask.task}</li></Link>
              <button
                onClick={() => setTask((oneTask.completed = true))}
                className="delete-button">
                Delete Task
              </button>
            </>
          )
        );
      })}
    </>
  );
}

export default TodoList;
