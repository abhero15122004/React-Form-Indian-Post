import React from 'react'
import './Loader.css'

export default function Loader({ message = "Fetching postal data..." }) {
  return (
    <div className="loader-container" role="status" aria-live="polite">
      <div className="custom-spinner"></div>
      <p className="loader-text">{message}</p>
    </div>
  )
}
