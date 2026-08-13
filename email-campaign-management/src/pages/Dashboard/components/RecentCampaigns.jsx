import React from 'react'
import { Link } from "react-router-dom";
import { campaigns } from "../../../data/campaigns";

export default function RecentCampaigns() {
  return (
    <div className="dashboard-section">

      <div className="section-header">

        <div>
          <h2>Recent Campaigns</h2>
          <p>Latest campaign activity</p>
        </div>

        <Link
          to="/campaigns"
          className="view-all-link"
        >
          View All
        </Link>

      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Campaign</th>
              <th>Audience</th>
              <th>Status</th>
              <th>Scheduled Date</th>
              <th>Open Rate</th>
              <th>Click Rate</th>
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
                    <span
                      className={`status-badge status-${campaign.status.toLowerCase()}`}
                    >
                      {campaign.status}
                    </span>
                  </td>

                  <td>
                    {campaign.scheduledDate}
                  </td>

                  <td>
                    {openRate}%
                  </td>

                  <td>
                    {clickRate}%
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  )
}
