import React from "react";
import List from "./List";

function DashboardPage({ items, addItem, deleteItem, toggleCompleted }) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <List
        items={items}
        addItem={addItem}
        deleteItem={deleteItem}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default DashboardPage;
