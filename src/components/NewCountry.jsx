import React, { useState } from "react"

function NewCountry(props) {
  const [open, setOpen] = useState(false);

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
            /><br />
            <button>
              Cancel
            </button>
            <button>
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
