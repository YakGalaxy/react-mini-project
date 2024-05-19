import React, { useState } from "react";
import ItemData from "../assets/items.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function ItemDetailsPage() {
  const { taskId } = useParams();
  const [tasks, setTask] = useState(tasksData);
  // const taskDetails = tasksData.find((task) => task._id === taskId);

  return (
    <div>
      {/* {tasks.map((oneTask) => {
        return (
          <h4>{oneTask.task}</h4>
        ); 
      })}  */}
    </div>
  );
}


export default ItemDetailsPage;
