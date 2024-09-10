import * as React from "react"
import Medal from "./Medal";

function Country(props) {
  return (
    <div style={{ margin: "5px", padding: "5px", border: "1px solid #999", borderRadius: "5px", minWidth: "220px" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <strong>{props.country.name}</strong>
        <button onClick={() => props.onDelete(props.country.id)}>
        delete
        </button>
      </div>
      {props.medals.sort((a, b) => a.rank - b.rank).map(medal =>
        <Medal
          key={medal.id}
          medal={medal}
          country={props.country}
        />
      )}
    </div>
  )
}

export default Country
