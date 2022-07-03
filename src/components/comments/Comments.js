import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import useHttp from '../../hooks/use-http'
import { addComment, getAllComments } from '../../lib/requests'
import Loader from '../UI/Loader'
import CommentList from './CommentList'
import classes from './Comments.module.css'
export default function Comments() {
    const { sendRequest, data: loadedData, loading } = useHttp(addComment)
    const { sendRequest:fetchData, data: fetchedData, loading:pending } = useHttp(getAllComments, true)
    const [showTextArea, setShowTextArea] = useState(false)
    const textRef = useRef()
    const params = useParams()
    const {id} = params
    // console.log(fetchedData,9)
    useEffect(() => {
        fetchData(id)

    },[])
    useEffect(() => {
        if (loading === 'completed') {
            fetchData(id)
        }
    },[fetchData, loading])
    // const fetchCommentHandler = useCallback(() => {
    //     fetchData(id)
    // },[fetchData])
    function addCommentHandler() {
        sendRequest({
            id,
            text: textRef.current.value
        })
    }

    function showTextAreaHandler() {
        setShowTextArea(true)
    }
  return (
    <div className={classes.comment}>
          <h1>User Comments</h1>
          <p>Your Comment</p> 
         {loading === 'pending' && <div><Loader /></div>}
        {showTextArea && <textarea className={classes.text} id='text' rows='5' ref={textRef}></textarea>}
        <div className={classes.btn_box}>
          <button onClick={!showTextArea ? showTextAreaHandler : addCommentHandler}>Add {`${!showTextArea ? 'a' : ''}`} Comment</button>
          </div>
          {pending === 'pending' && <Loader />}
          {pending === 'completed' &&<CommentList data={fetchedData} />}
    </div>
  )
}
