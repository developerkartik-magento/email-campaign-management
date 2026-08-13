import React from 'react'
import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <div className="quick-actions">

      <div>
        <h2>Quick Actions</h2>
        <p>Start managing your campaigns</p>
      </div>

      <div className="quick-action-buttons">

        <Link
          to="/campaigns/create"
          className="primary-button"
        >
          + Create Campaign
        </Link>

        <Link
          to="/campaigns"
          className="secondary-button"
        >
          View Campaigns
        </Link>

        <Link
          to="/analytics"
          className="secondary-button"
        >
          View Analytics
        </Link>

      </div>

    </div>
  )
}
