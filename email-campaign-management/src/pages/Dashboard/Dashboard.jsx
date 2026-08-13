import React from 'react'
import CampaignOverview from "./components/CampaignOverview";
import RecentCampaigns from "./components/RecentCampaigns";
import QuickActions from "./components/QuickActions";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome back! Here's what's happening
            with your campaigns.
          </p>
        </div>

      </div>

      <CampaignOverview />

      <RecentCampaigns />

      <QuickActions />

    </div>
  )
}
