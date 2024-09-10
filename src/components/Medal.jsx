import * as React from "react"
import { tc } from '../Utils.js'

function Medal(props) {
  return (
    <div style={{ marginLeft: "10px" }}>
      {tc(props.medal.name)} Medals - {props.country[props.medal.name]}
    </div>
  )
}

export default Medal
