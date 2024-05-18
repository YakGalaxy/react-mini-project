import { useState } from "react";
import tasks from "../assets/tasks.json";
import { Link } from "react-router-dom";

function TodoList() {
  const [task, setTask] = useState(tasks);

  function DeleteListItem(id) {
    const newTaskList = task.filter((task) => task.id !== id);
    setTask(newTaskList);
  }

  return (
    <div className="TaskList">
      {task.map((oneTask) => {
        return (
          <div key={oneTask.id}>
            <Link to={`/task/${oneTask.id}`}>
              <li>{oneTask.task}</li>
            </Link>
            <button
              onClick={ () => DeleteListItem(oneTask.id)}
              className="delete-button">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}


export default TodoList;
