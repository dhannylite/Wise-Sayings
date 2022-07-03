import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'

export default function Navigation() {
  return (
      <header className={classes.header}>
          <h2>Wise Sayings</h2>
          <div className={classes.links}>
              <NavLink className={navData => navData.isActive ? `${classes.link} ${classes.active}` : classes.link} to='/quotes'>All Quotes</NavLink>
              <NavLink className={navData => navData.isActive ? `${classes.link} ${classes.active}` : classes.link} to='/new-quote'>New Quotes</NavLink>
          </div>
    </header>
  )
}
