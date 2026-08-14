import React from 'react'
import { Link, useParams } from "react-router-dom";

import { campaigns } from "../../data/campaigns";

import CampaignHeader from "./components/CampaignHeader";
import CampaignMetrics from "./components/CampaignMetrics";
import CampaignInformation from "./components/CampaignInformation";
import CampaignEmailPreview from "./components/CampaignEmailPreview";

export default function CampaignDetails() {
    const { id } = useParams();
    const campaign = campaigns.find(
    (item) => item.id === Number(id)
  );

  if (!campaign) {
    return (
      <div className="campaign-page">

        <div className="page-header">

          <div>
            <h1>Campaign Not Found</h1>

            <p>
              The campaign you are looking for does not exist.
            </p>
          </div>

          <Link
            to="/campaigns"
            className="secondary-button"
          >
            ← Back to Campaigns
          </Link>

        </div>

      </div>
    );
  }
  return (
    <div className="campaign-details">

      <CampaignHeader
        campaign={campaign}
      />

      <CampaignMetrics
        campaign={campaign}
      />

      <div className="campaign-detail-layout">

        <div>

          <CampaignInformation
            campaign={campaign}
          />

          <CampaignEmailPreview
            campaign={campaign}
          />

        </div>

        <aside className="campaign-sidebar">

          <div className="detail-card">

            <h2>Campaign Actions</h2>

            <div className="detail-actions">

              <Link
                to="/campaigns/create"
                className="primary-button full-width"
              >
                Edit Campaign
              </Link>

              <button className="secondary-button full-width">
                Duplicate Campaign
              </button>

              <button className="danger-button full-width">
                Cancel Campaign
              </button>

            </div>

          </div>

          <div className="detail-card">

            <h2>Campaign Status</h2>

            <div className="status-timeline">

              <div className="timeline-item completed">
                <span></span>

                <div>
                  <strong>Created</strong>
                  <small>Campaign created</small>
                </div>
              </div>

              <div
                className={`timeline-item ${
                  campaign.status !== "Draft"
                    ? "completed"
                    : ""
                }`}
              >
                <span></span>

                <div>
                  <strong>Scheduled</strong>
                  <small>
                    {campaign.scheduledDate}
                  </small>
                </div>
              </div>

              <div
                className={`timeline-item ${
                  campaign.status === "Completed"
                    ? "completed"
                    : ""
                }`}
              >
                <span></span>

                <div>
                  <strong>Completed</strong>
                  <small>
                    Campaign delivery status
                  </small>
                </div>
              </div>

            </div>

          </div>

        </aside>

      </div>

    </div>
  )
}
