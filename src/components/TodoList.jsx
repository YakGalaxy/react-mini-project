import React, { useState } from "react";
import tasks from "../assets/tasks.json";

import { Link } from "react-router-dom";

function TodoList() {
  // const taskDetails = tasksData.find((task) => task._id === taskId);
  const [task, setTask] = useState(tasks);
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
