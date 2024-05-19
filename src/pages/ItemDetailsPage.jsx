import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function ItemDetailsPage({ items }) {
  const { itemId } = useParams();
  const item = items.find((item) => item.id === Number(itemId)); // Convert itemId to number

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>Item Details</h1>
      <p>
        <strong>ID:</strong> {item.id}
      </p>
      <p>
        <strong>Item:</strong> {item.item}
      </p>
      <p>
        <strong>Completed:</strong> {item.completed ? "Yes" : "No"}
      </p>
    </div>
  );
}

ItemDetailsPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ItemDetailsPage;
