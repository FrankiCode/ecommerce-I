import React from 'react'

const Button = ({title, className}) => {
  return (
    <div>
        <button className={`${className}`}>{title}</button>
    </div>
  )
}

export default Button