import React from 'react'
import ToDo from "./Todo"

export default function List(props) {

  let list = props.tasks.map((item, i) => {
    return <ToDo key={i} task={item} />
  })

  return <div>{list}</div>


}

