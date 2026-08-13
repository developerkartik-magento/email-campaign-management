import React from 'react'

export default function CampaignReview({
  campaignData,
  onBack,
}) {
  return (
    <div className="builder-single-column">

      <div className="builder-card">

        <div className="builder-card-header">

          <h2>Review Campaign</h2>

          <p>
            Review your campaign before publishing.
          </p>

        </div>

        <div className="review-section">

          <h3>Campaign Information</h3>

          <div className="review-grid">

            <div>
              <span>Campaign Name</span>
              <strong>
                {campaignData.campaignName}
              </strong>
            </div>

            <div>
              <span>Subject</span>
              <strong>
                {campaignData.subject}
              </strong>
            </div>

            <div>
              <span>Sender</span>
              <strong>
                {campaignData.sender}
              </strong>
            </div>

            <div>
              <span>Audience</span>
              <strong>
                {campaignData.audience}
              </strong>
            </div>

            <div>
              <span>Schedule</span>
              <strong>
                {campaignData.scheduleType === "now"
                  ? "Send Immediately"
                  : `${campaignData.scheduleDate} ${campaignData.scheduleTime}`}
              </strong>
            </div>

          </div>

        </div>

        <div className="review-section">

          <h3>Email Content</h3>

          <div className="review-email">

            <h2>
              {campaignData.heading}
            </h2>

            <p>
              {campaignData.message}
            </p>

            <strong>
              Button: {campaignData.buttonText}
            </strong>

          </div>

        </div>

      </div>

      <div className="builder-actions">

        <button
          className="secondary-button"
          type="button"
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          className="primary-button"
          type="button"
        >
          Create Campaign
        </button>

      </div>

    </div>
  )
}
