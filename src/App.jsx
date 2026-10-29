import React, { useState } from 'react'
import PostOfficeCard from './components/PostOfficeCard'
import Loader from './components/Loader'
import './App.css'

function App() {
  // State variables for form input and data handling
  const [pincode, setPincode] = useState('')
  const [searchedPincode, setSearchedPincode] = useState('')
  const [postOffices, setPostOffices] = useState([])
  const [apiMessage, setApiMessage] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  // Handle form submission and API call
  const handleLookup = async (e) => {
    if (e) e.preventDefault()

    const trimmedPincode = pincode.trim()

    // Validation: 6 digits Indian postal code
    if (!/^\d{6}$/.test(trimmedPincode)) {
      setError('Postal code must be exactly 6 digits.')
      return
    }

    // Reset previous errors and start loading
    setError('')
    setIsLoading(true)
    setFilterTerm('')

    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${trimmedPincode}`)
      
      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`)
      }

      const data = await response.json()

      // The API returns an array with an object { Message, Status, PostOffice }
      if (Array.isArray(data) && data.length > 0) {
        const result = data[0]

        if (result.Status === 'Success' && Array.isArray(result.PostOffice) && result.PostOffice.length > 0) {
          setPostOffices(result.PostOffice)
          setApiMessage(result.Message || `Number of pincode(s) found: ${result.PostOffice.length}`)
          setSearchedPincode(trimmedPincode)
          setHasSearched(true)
          setError('')
        } else {
          // Status Error or no records found
          const errorMsg = result.Message || 'No postal data found for this pincode.'
          setError(errorMsg)
          setPostOffices([])
          setApiMessage(errorMsg)
          setSearchedPincode(trimmedPincode)
          setHasSearched(true)
        }
      } else {
        throw new Error('Invalid response format from postal service.')
      }
    } catch (err) {
      console.error('Fetch error:', err)
      setError('Failed to fetch postal data. Please check your internet connection and try again.')
      setPostOffices([])
      setHasSearched(false)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle resetting back to initial search view
  const handleReset = () => {
    setHasSearched(false)
    setPostOffices([])
    setApiMessage('')
    setFilterTerm('')
    setError('')
  }

  // Real-time filtering by post office Name
  const filteredPostOffices = postOffices.filter((po) => {
    if (!filterTerm) return true
    return po.Name && po.Name.toLowerCase().includes(filterTerm.trim().toLowerCase())
  })

  return (
    <div className="app-container">
      {/* Before clicking button: Initial Form View */}
      {!hasSearched ? (
        <div className="lookup-section">
          <h1 className="lookup-title">Enter Pincode</h1>
          <form className="lookup-form" onSubmit={handleLookup}>
            <input
              type="text"
              className="pincode-input"
              placeholder="Pincode"
              value={pincode}
              maxLength={6}
              onChange={(e) => {
                // Allow only numbers
                const val = e.target.value.replace(/\D/g, '')
                setPincode(val)
                if (error) setError('')
              }}
              aria-label="Enter 6-digit Pincode"
            />

            {error && (
              <div className="error-message" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="lookup-btn"
              disabled={isLoading}
            >
              Lookup
            </button>
          </form>

          {/* Loader shown while API is fetching */}
          {isLoading && <Loader message="Fetching postal details..." />}
        </div>
      ) : (
        /* After clicking button: Results View */
        <div className="results-section">
          {/* Loader if re-fetching */}
          {isLoading ? (
            <Loader message="Fetching postal details..." />
          ) : (
            <>
              <div className="results-header">
                <div className="header-info">
                  <div className="pincode-display">
                    <strong>Pincode: {searchedPincode}</strong>
                  </div>
                  <div className="message-display">
                    <strong>Message:</strong> {apiMessage}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="change-pincode-btn"
                >
                  ← Search another Pincode
                </button>
              </div>

              {/* Show error on screen if API returned error */}
              {error ? (
                <div className="error-banner" role="alert">
                  <p>{error}</p>
                  <button onClick={handleReset} className="retry-btn">
                    Try another pincode
                  </button>
                </div>
              ) : (
                <>
                  {/* Real-time Filter Input Field */}
                  <div className="filter-wrapper">
                    <span className="search-icon" aria-hidden="true">
                      🔍
                    </span>
                    <input
                      type="text"
                      className="filter-input"
                      placeholder="Filter"
                      value={filterTerm}
                      onChange={(e) => setFilterTerm(e.target.value)}
                      aria-label="Filter post offices by name"
                    />
                  </div>

                  {/* Empty Filter State or Cards Grid */}
                  {filteredPostOffices.length === 0 ? (
                    <div className="empty-message" role="status">
                      <p>Couldn’t find the postal data you’re looking for…</p>
                    </div>
                  ) : (
                    <div className="cards-grid">
                      {filteredPostOffices.map((postOffice, index) => (
                        <PostOfficeCard
                          key={`${postOffice.Name}-${index}`}
                          postOffice={postOffice}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default App
