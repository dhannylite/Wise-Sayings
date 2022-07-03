import { Button, TextField } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import classes from './NewQuotes.module.css'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/requests'
import {useNavigate} from 'react-router-dom'
import Loader from '../components/UI/Loader'

export default function NewQuotes() {
    const { sendRequest, loading } = useHttp(addQuote)
    const [author, setAuthor] = useState('')
    const textRef = useRef()
    const navigate = useNavigate()

    function setAuthorHandler(event) {
        setAuthor(event.target.value)
    }
    
    function submitHandler(event) {
        event.preventDefault()
        sendRequest({
            author,
            text: textRef.current.value
        })
     }
    if (loading === "pending") {
        return <div className={classes.center}><Loader /></div>
    } 
    if (loading === 'completed') {
        navigate('/quotes')
    }
  return (
      <div className={classes.quotes}>
          <form className={classes.form} onSubmit={submitHandler}>
              <TextField className={classes.author}
                  label='Author'
                  variant='outlined'
                  onChange={setAuthorHandler}
              />
              <label className={classes.text_label}>Add your Quote</label>
              <textarea className={classes.text} id='text' rows='5' ref={textRef}></textarea>
              <div className={classes.btn_box}>
              <button className={classes.btn}>Add Quote</button>
              </div>
          </form>
    </div>
  )
}
