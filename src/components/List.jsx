import ListItem from "../components/ListItem";
import itemData from "../assets/items.json";
import { useState } from "react";

function List() {
  const [items, setItems] = useState(itemData);
  const [text, setText] = useState("");

  function addItem(text) {
    const newItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    setItems([...items, newItem]);
    console.log("Updated items:", [...items, newItem]); // Log updated items
    setText("");
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

  return (
    <div className="item-list">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <div className="line-break"></div>
      <input className="add-input" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="add-button" onClick={() => addItem(text)}>Add Item</button>
    </div>
  );
}

export default List;
