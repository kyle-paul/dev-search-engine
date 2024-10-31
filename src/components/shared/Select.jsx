import React from 'react'
import styles from './select.module.scss'

const Select = ({ label, value, onChange, options, className }) => {
  const selectInputClass = className ? `${className} ${styles.field}` : styles.field

  return (
    <div className={selectInputClass}>
      <div className="control">
        <div className={styles.select}>
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Select
