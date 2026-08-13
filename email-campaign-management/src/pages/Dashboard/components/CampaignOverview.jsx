import React from 'react'
import { campaigns } from "../../../data/campaigns";
import MetricCard from "./MetricCard";

export default function CampaignOverview() {
    const totalSent = campaigns.reduce(
    (total, campaign) => total + campaign.sent,
    0
  );

  const totalOpened = campaigns.reduce(
    (total, campaign) => total + campaign.opened,
    0
  );

  const totalClicked = campaigns.reduce(
    (total, campaign) => total + campaign.clicked,
    0
  );

  const openRate =
    totalSent > 0
      ? ((totalOpened / totalSent) * 100).toFixed(1)
      : 0;

  const clickRate =
    totalSent > 0
      ? ((totalClicked / totalSent) * 100).toFixed(1)
      : 0;
  return (
    <div className="dashboard-section">

      <div className="section-header">
        <div>
          <h2>Campaign Overview</h2>
          <p>Overall campaign performance</p>
        </div>
      </div>

      <div className="metric-grid">

        <MetricCard
          title="Total Campaigns"
          value={campaigns.length}
          subtitle="Campaigns created"
          icon="✉"
        />

        <MetricCard
          title="Emails Sent"
          value={totalSent.toLocaleString()}
          subtitle="Total emails delivered"
          icon="➤"
        />

        <MetricCard
          title="Open Rate"
          value={`${openRate}%`}
          subtitle="Average email opens"
          icon="◉"
        />

        <MetricCard
          title="Click Rate"
          value={`${clickRate}%`}
          subtitle="Average click engagement"
          icon="↗"
        />

      </div>

    </div>
  )
}
