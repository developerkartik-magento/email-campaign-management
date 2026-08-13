import React from 'react'

export default function CampaignEmailPreview({ campaign }) {
  return (
    <div className="detail-card">

      <div className="detail-card-header">

        <div>
          <h2>Email Preview</h2>

          <p>
            Preview how the campaign email will appear.
          </p>
        </div>

      </div>

      <div className="email-preview-wrapper">

        <div className="email-preview">

          <div className="email-preview-top">
            <strong>
              {campaign.sender}
            </strong>

            <span>
              To: {campaign.audience}
            </span>
          </div>

          <div className="email-preview-subject">
            {campaign.subject}
          </div>

          <div className="email-preview-body">

            <div className="email-image-placeholder">
              Email Image
            </div>

            <h2>
              {campaign.content.heading}
            </h2>

            <p>
              {campaign.content.message}
            </p>

            <a
              href={campaign.content.buttonLink}
              className="email-button"
            >
              {campaign.content.buttonText}
            </a>

          </div>

          <div className="email-preview-footer">
            This is a demo email preview.
          </div>

        </div>

      </div>

    </div>
  )
}
