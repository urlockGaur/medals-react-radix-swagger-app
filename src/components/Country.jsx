import * as React from "react"

function Country(props) {
  return (
    <li>
      {props.country.name} <button onClick={() => props.onDelete(props.country.id)}>Delete</button>
    </li>
  )
}

export default Country
