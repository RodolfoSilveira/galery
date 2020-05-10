import React from 'react'
import style from './style.module.css'
import { Link } from 'gatsby'

const Header = ({title}) => {
  return (
    <div className='shadow-lg p-4 mb-4'>
      <h1 className={style.title}><Link to='/'>{title}</Link></h1>
    </div>
  )
}

export default Header
