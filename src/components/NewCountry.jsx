import React, { useState } from "react"
import {tc} from '../Utils.js'

function NewCountry(props) {
  const [open, setOpen] = useState(false);
  const [newCountryName, setNewCountryName] = useState("");

  function handleSave() {
    if (newCountryName.length > 0) {
      props.onAdd(newCountryName);
      closeDialog();
    }
  }
  function closeDialog() {
    setNewCountryName("");
    setOpen(false);
  }
  const handleChange = (e) => {
    setNewCountryName(tc(e.target.value));
  }

  return (
    <>
      {
        (open) ?
          <div style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            width: "200px",
            padding: "15px",
            border: "1px solid #1a1a1a",
            borderRadius: "5px",
            backgroundColor: "grey",
            zIndex: 10,
          }}>
            <input
              type="text"
              name="newCountryName"
              placeholder="Enter the country name"
              autoComplete="off"
              autoFocus
              value={newCountryName}
              onChange={handleChange}
            /><br />
            <button onClick={closeDialog}>
              Cancel
            </button>
            <button onClick={handleSave}>
              Save
            </button>
          </div>
          :
          <button onClick={() => setOpen(true)}>Add Country</button>
      }
    </>
  )
}

export default NewCountry
