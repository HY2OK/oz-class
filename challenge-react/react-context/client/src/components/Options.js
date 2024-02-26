import React from 'react'

const Options = ({ name, updateItemCount }) => {
  return (
    <form action="">
      <input
        type="checkbox"
        name=""
        id={`${name} option`}
        onChange={(e) => updateItemCount(name, e.target.checked ? 1 : 0)}
      />{' '}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  )
}

export default Options
