import React from 'react'

export default function PostOfficeCard({ postOffice }) {
  const {
    Name = 'N/A',
    BranchType = 'N/A',
    DeliveryStatus = 'N/A',
    District = 'N/A',
    Division = 'N/A',
    State = 'N/A',
  } = postOffice

  return (
    <div className="post-office-card">
      <div className="card-row">
        <span className="card-label">Name:</span>
        <span className="card-value">{Name}</span>
      </div>
      <div className="card-row">
        <span className="card-label">Branch Type:</span>
        <span className="card-value">{BranchType}</span>
      </div>
      <div className="card-row">
        <span className="card-label">Delivery Status:</span>
        <span className="card-value">{DeliveryStatus}</span>
      </div>
      <div className="card-row">
        <span className="card-label">District:</span>
        <span className="card-value">{District}</span>
      </div>
      <div className="card-row">
        <span className="card-label">Division:</span>
        <span className="card-value">{Division}</span>
      </div>
      <div className="card-row">
        <span className="card-label">State:</span>
        <span className="card-value">{State}</span>
      </div>
    </div>
  )
}
