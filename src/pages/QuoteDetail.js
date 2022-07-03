import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useMatch, useParams } from 'react-router-dom'
import CommentList from '../components/comments/CommentList'
import Comments from '../components/comments/Comments'
import Loader from '../components/UI/Loader'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/requests'
import classes from './QuoteDetail.module.css'

export default function QuoteDetail(props) {
  const { sendRequest, data: loadedData, loading } = useHttp(getSingleQuote, true)
  const [showComments, setShowComments] = useState(false)
  const params = useParams()
  // console.log(params)
  const {id} = params
  useEffect(() => {
    sendRequest(id)
  }, [id, sendRequest])

  if (loading === 'pending') {
    return <div className={classes.center}><Loader /></div>
  }

  function showCommentHandler() {
      setShowComments(true)
  }

  return (
    <>
      <div className={classes.details}>
        <p>{loadedData.text}</p>
        <div className={classes.author}>{loadedData.author}</div>
      </div>
      <Routes>
      <Route path='' element={<div className={classes.btn_box} onClick={showCommentHandler}>
        <Link to={`comments`}>load comment</Link>
      </div>} />
      </Routes>
      
      <Outlet />
    </>
  )
}
