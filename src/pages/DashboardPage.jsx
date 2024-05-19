import React, { useState } from "react";
import List from "./List";
import itemsData from "../assets/items.json";

function DashboardPage() {
  const [items, setItems] = useState(itemsData);

  function addItem(text) {
    const newItem = {
      id: Date.now(), // Ensure ID is a number
      item: text,
      completed: false,
    };
    setItems([...items, newItem]);
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function toggleCompleted(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  }

  console.log("DashboardPage items state:", items); // Debugging log

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
