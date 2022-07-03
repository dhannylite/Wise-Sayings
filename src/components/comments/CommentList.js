import React from 'react'
import classes from './CommentList.module.css'

export default function CommentList(props) {
    // console.log(props,9)
  return (
      <ul className={classes.lists}>
          {props.data.map((item, id) => <li className={classes.list}>{item.text}</li>)}
    </ul>
  )
}
