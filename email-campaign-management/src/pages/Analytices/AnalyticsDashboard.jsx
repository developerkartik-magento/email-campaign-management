import React from 'react'
import {
  analyticsSummary,
  campaignPerformance,
  regionalPerformance,
  organizationalPerformance,
  geographicPerformance,
} from "../../data/analytics";

export default function AnalyticsDashboard() {
  return (
    <div className="campaign-page">

      {/* Header */}

      <div className="page-header">

        <div>

          <h1>
            Analytics & Reporting
          </h1>

          <p>
            Monitor campaign performance and user engagement.
          </p>

        </div>

      </div>


      {/* Summary Cards */}

      <div className="campaign-stats">

        <div className="stat-card">

          <span>
            Total Emails Sent
          </span>

          <strong>
            {analyticsSummary.totalSent.toLocaleString()}
          </strong>

        </div>


        <div className="stat-card">

          <span>
            Open Rate
          </span>

          <strong>
            {analyticsSummary.openRate}%
          </strong>

        </div>


        <div className="stat-card">

          <span>
            Click Rate
          </span>

          <strong>
            {analyticsSummary.clickRate}%
          </strong>

        </div>


        <div className="stat-card">

          <span>
            Total Campaigns
          </span>

          <strong>
            {analyticsSummary.totalCampaigns}
          </strong>

        </div>

      </div>


      {/* Engagement Overview */}

      <div className="analytics-grid">

        <div className="campaign-card">

          <div className="card-header">

            <h2>
              Engagement Overview
            </h2>

          </div>


          <div className="analytics-metrics">

            <div>

              <span>
                Emails Sent
              </span>

              <strong>
                {analyticsSummary.totalSent.toLocaleString()}
              </strong>

            </div>


            <div>

              <span>
                Emails Opened
              </span>

              <strong>
                {analyticsSummary.totalOpened.toLocaleString()}
              </strong>

            </div>


            <div>

              <span>
                Link Clicks
              </span>

              <strong>
                {analyticsSummary.totalClicked.toLocaleString()}
              </strong>

            </div>

          </div>

        </div>


        {/* Performance */}

        <div className="campaign-card">

          <div className="card-header">

            <h2>
              Overall Performance
            </h2>

          </div>


          <div className="performance-bars">

            <div className="performance-item">

              <div>

                <span>
                  Open Rate
                </span>

                <strong>
                  {analyticsSummary.openRate}%
                </strong>

              </div>

              <div className="analytics-progress">

                <div
                  style={{
                    width: `${analyticsSummary.openRate}%`,
                  }}
                />

              </div>

            </div>


            <div className="performance-item">

              <div>

                <span>
                  Click Rate
                </span>

                <strong>
                  {analyticsSummary.clickRate}%
                </strong>

              </div>

              <div className="analytics-progress">

                <div
                  style={{
                    width: `${analyticsSummary.clickRate}%`,
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Campaign Performance */}

      <div className="campaign-results">

        <div className="results-header">

          <h2>
            Campaign Performance
          </h2>

          <span>
            {campaignPerformance.length} campaigns
          </span>

        </div>


        <div className="campaign-table-wrapper">

          <table className="campaign-table">

            <thead>

              <tr>

                <th>
                  Campaign
                </th>

                <th>
                  Sent
                </th>

                <th>
                  Opened
                </th>

                <th>
                  Clicked
                </th>

                <th>
                  Open Rate
                </th>

                <th>
                  Click Rate
                </th>

              </tr>

            </thead>


            <tbody>

              {campaignPerformance.map((campaign) => (

                <tr key={campaign.id}>

                  <td>
                    <strong>
                      {campaign.name}
                    </strong>
                  </td>

                  <td>
                    {campaign.sent.toLocaleString()}
                  </td>

                  <td>
                    {campaign.opened.toLocaleString()}
                  </td>

                  <td>
                    {campaign.clicked.toLocaleString()}
                  </td>

                  <td>
                    {campaign.openRate}%
                  </td>

                  <td>
                    {campaign.clickRate}%
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* Regional Performance */}

      <div className="campaign-results">

        <div className="results-header">

          <h2>
            Regional Performance
          </h2>

        </div>


        <div className="campaign-table-wrapper">

          <table className="campaign-table">

            <thead>

              <tr>

                <th>
                  Region
                </th>

                <th>
                  Emails Sent
                </th>

                <th>
                  Emails Opened
                </th>

                <th>
                  Open Rate
                </th>

                <th>
                  Click Rate
                </th>

              </tr>

            </thead>


            <tbody>

              {regionalPerformance.map((region) => (

                <tr key={region.region}>

                  <td>
                    <strong>
                      {region.region}
                    </strong>
                  </td>

                  <td>
                    {region.sent.toLocaleString()}
                  </td>

                  <td>
                    {region.opened.toLocaleString()}
                  </td>

                  <td>
                    {region.openRate}%
                  </td>

                  <td>
                    {region.clickRate}%
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    {/* Geographic Performance */}

<div className="campaign-results">

  <div className="results-header">

    <div>

      <h2>
        Geographic Performance
      </h2>

      <p className="section-description">
        Campaign engagement across geographic locations.
      </p>

    </div>

  </div>


  <div className="geographic-grid">

    {geographicPerformance.map((location) => (

      <div
        className="geographic-card"
        key={location.id}
      >

        <div className="geographic-card-header">

          <div>

            <h3>
              {location.country}
            </h3>

            <span>
              {location.region}
            </span>

          </div>

        </div>


        <div className="geographic-stats">

          <div>

            <span>
              Emails Sent
            </span>

            <strong>
              {location.sent.toLocaleString()}
            </strong>

          </div>


          <div>

            <span>
              Open Rate
            </span>

            <strong>
              {location.openRate}%
            </strong>

          </div>


          <div>

            <span>
              Click Rate
            </span>

            <strong>
              {location.clickRate}%
            </strong>

          </div>

        </div>


        {/* Engagement Bar */}

        <div className="geographic-progress">

          <div className="geographic-progress-header">

            <span>
              Engagement
            </span>

            <strong>
              {location.openRate}%
            </strong>

          </div>


          <div className="analytics-progress">

            <div
              style={{
                width: `${location.openRate}%`,
              }}
            />

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

      {/* Organizational Performance */}

      <div className="campaign-results">

        <div className="results-header">

          <h2>
            Organizational Performance
          </h2>

        </div>


        <div className="campaign-table-wrapper">

          <table className="campaign-table">

            <thead>

              <tr>

                <th>
                  Department
                </th>

                <th>
                  Emails Sent
                </th>

                <th>
                  Emails Opened
                </th>

                <th>
                  Open Rate
                </th>

                <th>
                  Click Rate
                </th>

              </tr>

            </thead>


            <tbody>

              {organizationalPerformance.map(
                (department) => (

                  <tr key={department.department}>

                    <td>
                      <strong>
                        {department.department}
                      </strong>
                    </td>

                    <td>
                      {department.sent.toLocaleString()}
                    </td>

                    <td>
                      {department.opened.toLocaleString()}
                    </td>

                    <td>
                      {department.openRate}%
                    </td>

                    <td>
                      {department.clickRate}%
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}
