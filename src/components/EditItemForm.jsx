import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function EditItemForm({ item, onSave }) {
  const [formData, setFormData] = useState({
    item: item.item,
    completed: item.completed,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
    e.preventDefault();
        onSave(item.id, formData);
        navigate("/");
    };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          id="item"
          name="item"
          value={formData.item}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="completed">Completed:</label>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={formData.completed}
          onChange={handleChange}
        />
      </div>
      <button className="submit-button" type="submit">Save</button>
    </form>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditItemForm;
