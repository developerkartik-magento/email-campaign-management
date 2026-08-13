import React from 'react'

export default function CampaignStatus({ status }) {
  return (
    <span
      className={`status-badge status-${status.toLowerCase()}`}
    >
      {status}
    </span>
  )
}
