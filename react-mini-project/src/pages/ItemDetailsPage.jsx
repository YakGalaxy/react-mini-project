import React from 'react'
import tasksData from "../assets/tasks.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function ItemDetailsPage() {
  const { taskId } = useParams();
  const taskDetails = tasksData.find((task) => task._id === taskId);

  return (
    <div>
      <h1>{taskDetails.task}</h1>
    </div>
  )
}

export default ItemDetailsPage