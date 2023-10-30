import React, { useState } from "react";
import './Edit.css'
function EditForm({ warehouse, onSave }) {
  const [editedWarehouse, setEditedWarehouse] = useState({ ...warehouse });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWarehouse({
      ...editedWarehouse,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    onSave(editedWarehouse);
  };

  return (
    <div>
      <h2>Edit Warehouse</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={editedWarehouse.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Code: </label>
        <input
          type="text"
          name="code"
          value={editedWarehouse.code}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>City: </label>
        <input
          type="text"
          name="city"
          value={editedWarehouse.city}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Space Available: </label>
        <input
          type="number"
          name="space_available"
          value={editedWarehouse.space_available}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Type: </label>
        <input
          type="text"
          name="type"
          value={editedWarehouse.type}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Cluster: </label>
        <input
          type="text"
          name="cluster"
          value={editedWarehouse.cluster}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Is Registered: </label>
        <select
          name="is_registered"
          value={editedWarehouse.is_registered}
          onChange={handleInputChange}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div>
        <label>Is Live: </label>
        <select
          name="is_live"
          value={editedWarehouse.is_live}
          onChange={handleInputChange}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default EditForm;
