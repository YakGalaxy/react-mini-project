import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ListItem from "../components/ListItem";

function List({ items, addItem, deleteItem, toggleCompleted }) {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("List component mounted. Items:", items);
  }, [items]);

  return (
    <div className="item-list">
      {items &&
        items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            toggleCompleted={toggleCompleted}
          />
        ))}
      <div className="line-break"></div>
      <input
        className="add-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="add-button"
        onClick={() => {
          addItem(text);
          setText("");
        }}
      >
        Add Item
      </button>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default List;
