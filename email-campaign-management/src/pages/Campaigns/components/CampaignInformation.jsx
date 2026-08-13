import React from 'react'

export default function CampaignInformation({ campaign }) {
  return (
    <div className="detail-card">

      <div className="detail-card-header">
        <div>
          <h2>Campaign Information</h2>
          <p>Basic campaign configuration</p>
        </div>
      </div>

      <div className="information-grid">

        <div className="information-item">
          <span>Campaign Name</span>
          <strong>{campaign.name}</strong>
        </div>

        <div className="information-item">
          <span>Email Subject</span>
          <strong>{campaign.subject}</strong>
        </div>

        <div className="information-item">
          <span>Sender</span>
          <strong>{campaign.sender}</strong>
        </div>

        <div className="information-item">
          <span>Audience</span>
          <strong>{campaign.audience}</strong>
        </div>

        <div className="information-item">
          <span>Scheduled Date</span>
          <strong>{campaign.scheduledDate}</strong>
        </div>

        <div className="information-item">
          <span>Status</span>
          <strong>{campaign.status}</strong>
        </div>

      </div>

      <div className="campaign-description">

        <span>Description</span>

        <p>
          {campaign.description}
        </p>

      </div>

    </div>
  )
}
