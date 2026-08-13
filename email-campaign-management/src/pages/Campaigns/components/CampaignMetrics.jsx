import React from 'react'

export default function CampaignMetrics({ campaign }) {
    const openRate =
    campaign.sent > 0
      ? ((campaign.opened / campaign.sent) * 100).toFixed(1)
      : 0;

  const clickRate =
    campaign.sent > 0
      ? ((campaign.clicked / campaign.sent) * 100).toFixed(1)
      : 0;
  return (
    <div className="campaign-detail-metrics">

      <div className="detail-metric-card">
        <span>Total Sent</span>

        <strong>
          {campaign.sent.toLocaleString()}
        </strong>

        <small>
          Emails delivered
        </small>
      </div>

      <div className="detail-metric-card">
        <span>Opened</span>

        <strong>
          {campaign.opened.toLocaleString()}
        </strong>

        <small>
          {openRate}% open rate
        </small>
      </div>

      <div className="detail-metric-card">
        <span>Clicked</span>

        <strong>
          {campaign.clicked.toLocaleString()}
        </strong>

        <small>
          {clickRate}% click rate
        </small>
      </div>

      <div className="detail-metric-card">
        <span>Audience</span>

        <strong>
          {campaign.audience}
        </strong>

        <small>
          Target audience
        </small>
      </div>

    </div>
  )
}
