import React from 'react'
import { Link } from 'react-router-dom';

import SingleNavigationButton from './SingleNavigationButton/SingleNavigationButton'
import './Navigation.css'

function Navigation() {



  return (
    <div className="navigations-container">
      <Link to="/">
        <SingleNavigationButton title="H" />
      </Link>
      <Link to="/playerstock">
        <SingleNavigationButton title="S" />
      </Link>
      <Link to="/citystock">
        <SingleNavigationButton title="L" />
      </Link>
    </div>
  )
}

export default Navigation
