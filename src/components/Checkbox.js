import React from 'react';

const Checkbox = ({ tags, title, value, handleOnChange }) => {
  return (
    <label htmlFor={value}>
      <input
        type="checkbox"
        name={value}
        id={value}
        checked={!!tags[value]}
        onChange={(event) => handleOnChange(event)} />
      {title}
    </label>
  )
}

export default Checkbox;