import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './QuotesList.module.css'

export default function QuotesList(props) {
    // console.log(props.text)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <li key={props.id} className={`${show ? `${classes.list} ${classes.show}` : classes.list}`}>
          <div className={classes.content}>
              <p className={classes.text}>{props.text}</p>
              <p>{props.author}</p>
          </div>
          <div className={classes.link_container}>    
          <Link to={`/detail/${props.id}`}>View Fullscreen</Link>
          </div>
    </li>
  )
}

// style={{transitionDelay:'2s'}}
// {`${show ? `${classes.list} ${classes.show}` : classes.list}`} style={{transitionDelay:`${0.1*props.id}s`}