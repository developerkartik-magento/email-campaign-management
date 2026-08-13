import React from 'react'
import { Link } from "react-router-dom";
import CampaignStatus from "./CampaignStatus";

export default function CampaignTable({ campaigns }) {
    if (campaigns.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✉</div>

        <h3>No campaigns found</h3>

        <p>
          Try changing your search or filter.
        </p>
      </div>
    );
  }
  return (
    <div className="table-container">

      <table>

        <thead>
          <tr>
            <th>Campaign</th>
            <th>Audience</th>
            <th>Status</th>
            <th>Scheduled Date</th>
            <th>Emails Sent</th>
            <th>Open Rate</th>
            <th>Click Rate</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {campaigns.map((campaign) => {

            const openRate =
              campaign.sent > 0
                ? (
                    (campaign.opened / campaign.sent) *
                    100
                  ).toFixed(1)
                : 0;

            const clickRate =
              campaign.sent > 0
                ? (
                    (campaign.clicked / campaign.sent) *
                    100
                  ).toFixed(1)
                : 0;

            return (
              <tr key={campaign.id}>

                <td>
                  <Link
                    to={`/campaigns/${campaign.id}`}
                    className="campaign-name"
                  >
                    {campaign.name}
                  </Link>
                </td>

                <td>
                  {campaign.audience}
                </td>

                <td>
                  <CampaignStatus
                    status={campaign.status}
                  />
                </td>

                <td>
                  {campaign.scheduledDate}
                </td>

                <td>
                  {campaign.sent.toLocaleString()}
                </td>

                <td>
                  {openRate}%
                </td>

                <td>
                  {clickRate}%
                </td>

                <td>
                  <Link
                    to={`/campaigns/${campaign.id}`}
                    className="table-action"
                  >
                    View
                  </Link>
                </td>

              </tr>
            );
          })}

        </tbody>

      </table>

    </div>
  )
}
