import React from 'react'
import { Link } from "react-router-dom";
import CampaignStatus from "./CampaignStatus";

export default function CampaignHeader({ campaign }) {
  return (
    <div className="campaign-detail-header">

      <div className="campaign-header-left">

        <Link
          to="/campaigns"
          className="back-link"
        >
          ← Back to Campaign Library
        </Link>

        <div className="campaign-title-row">

          <div>
            <h1>{campaign.name}</h1>

            <p>
              Campaign ID: #{campaign.id}
            </p>
          </div>

          <CampaignStatus
            status={campaign.status}
          />

        </div>

      </div>

      <div className="campaign-header-actions">

        <button className="secondary-button">
          Duplicate
        </button>

        <Link
          to="/campaigns/create"
          className="primary-button"
        >
          Edit Campaign
        </Link>

      </div>

    </div>
  )
}
