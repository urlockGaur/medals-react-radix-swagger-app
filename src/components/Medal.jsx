import * as React from "react"
import { tc } from '../Utils.js'

function Medal(props) {
  return (
    <div style={{ marginLeft: "10px", lineHeight: "2", width: "100%", display: "flex", justifyContent: "space-between" }}>
      <div>{tc(props.medal.name)} Medals:</div>
      <div style={{ marginRight: "5px" }}>
        <button onClick={() => props.onDecrement(props.country.id, props.medal.name)}>-</button>&nbsp;
        {props.country[props.medal.name]}
        <button onClick={() => props.onIncrement(props.country.id, props.medal.name)}>+</button>
      </div>
    </div>
  )
}

export default Medal
