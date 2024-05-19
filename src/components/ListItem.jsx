import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ListItem({ item, deleteItem, toggleCompleted }) {
  console.log("ListItem received item:", item); // Log the item for debugging

  function handleChange() {
    toggleCompleted(item.id);
  }

  return (
    <div className="list-item line-break">
      <input
        className="checkbox-scaling"
        type="checkbox"
        checked={item.completed}
        onChange={handleChange}
      />
      <Link to={`/item/${item.id}`}>
        <p>{item.item}</p> {/* Ensure this uses `item.item` */}
      </Link>
      <button className="delete-button" onClick={() => deleteItem(item.id)}>
        X
      </button>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default ListItem;
