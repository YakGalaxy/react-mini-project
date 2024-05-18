import { useState } from "react";
import tasks from "../assets/tasks.json";
import { Link } from "react-router-dom";

function ListItem() {
  const [task, setTask] = useState(tasks);

  function DeleteListItem(id) {
    const newTaskList = task.filter((task) => task.id !== id);
    setTask(newTaskList);
  }

  return (
    <div className="ListItem">
      {task.map((oneTask) => {
        const isCompleted = oneTask.completed; 
        return (
          <div key={oneTask.id}>
            <Link to={`/task/${oneTask.id}`}>
              <li>{oneTask.task}</li>
              {isCompleted ? <div>✅</div> : <div>❌</div>}
            </Link>
            <button
              onClick={() => DeleteListItem(oneTask.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}


export default ListItem;
