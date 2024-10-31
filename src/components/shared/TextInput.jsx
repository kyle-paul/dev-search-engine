import React from 'react'
import styles from './textinput.module.scss'

const TextInput = ({ value, onChange, placeholder, className }) => {
  const textInputClass = className ? `${className} ${styles.field}` : styles.field

  return (
    <div className={textInputClass}>
      <div className={styles.control}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  )
}

export default TextInput
