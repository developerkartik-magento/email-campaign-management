import React from 'react'
import CampaignOverview from "./components/CampaignOverview";
import RecentCampaigns from "./components/RecentCampaigns";
import QuickActions from "./components/QuickActions";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <div>
          <h1>Welcome back, Admin 👋</h1>

          <p>
            Welcome back! Here's what's happening
            with your campaigns.
          </p>
        </div>

      </div>
      <section className="dashboard-section">

        <div className="section-header">

          <div>
            <h2>Quick Actions</h2>

            <p>
              Quickly access common tasks.
            </p>
          </div>

        </div>


        <div className="quick-actions">

          {/* Create Campaign */}

          <Link
            to="/campaigns/create"
            className="quick-action-card"
          >

            <div className="quick-action-icon">
              +
            </div>

            <div>
              <h3>Create Campaign</h3>

              <p>
                Create a new email campaign
              </p>
            </div>

          </Link>


          {/* Audience */}

          <Link
            to="/audience"
            className="quick-action-card"
          >

            <div className="quick-action-icon">
              👥
            </div>

            <div>
              <h3>Manage Audience</h3>

              <p>
                Manage distribution lists
              </p>
            </div>

          </Link>


          {/* Training */}

          <Link
            to="/training"
            className="quick-action-card"
          >

            <div className="quick-action-icon">
              🎓
            </div>

            <div>
              <h3>Assign Training</h3>

              <p>
                Assign training to employees
              </p>
            </div>

          </Link>

        </div>

      </section>

      

      <CampaignOverview />

      <RecentCampaigns />

      <QuickActions />

    </div>
  )
}
