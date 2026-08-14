import React from 'react'
import EmailEditor from "./EmailEditor";

export default function CampaignContent({
  campaignData,
  setCampaignData,
  onNext,
}) {
     const handleChange = (event) => {
    const { name, value } = event.target;

    setCampaignData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };
  return (
    <div className="builder-content">

      <div className="builder-form">

        <div className="builder-card">

          <div className="builder-card-header">
            <h2>Email Content</h2>

            <p>
              Configure the basic information for your email.
            </p>
          </div>

          <div className="form-group">

            <label>
              Campaign Name
            </label>

            <input
              type="text"
              name="campaignName"
              value={campaignData.campaignName}
              onChange={handleChange}
              placeholder="Enter campaign name"
            />

          </div>

          <div className="form-group">

            <label>
              Email Subject
            </label>

            <input
              type="text"
              name="subject"
              value={campaignData.subject}
              onChange={handleChange}
              placeholder="Enter email subject"
            />

          </div>

          <div className="form-group">

            <label>
              Sender Email
            </label>

            <input
              type="email"
              name="sender"
              value={campaignData.sender}
              onChange={handleChange}
              placeholder="sender@company.com"
            />

          </div>

          <div className="form-group">

            <label>
              Email Heading
            </label>

            <input
              type="text"
              name="heading"
              value={campaignData.heading}
              onChange={handleChange}
              placeholder="Enter email heading"
            />

          </div>

          <div className="form-group">

        <label>
            Email Body
        </label>

        <EmailEditor
            value={campaignData.message}
            onChange={(value) =>
            setCampaignData((previousData) => ({
                ...previousData,
                message: value,
            }))
            }
        />

        </div>

          <div className="form-row">

            <div className="form-group">

              <label>
                Button Text
              </label>

              <input
                type="text"
                name="buttonText"
                value={campaignData.buttonText}
                onChange={handleChange}
                placeholder="Learn More"
              />

            </div>

            <div className="form-group">

              <label>
                Button Link
              </label>

              <input
                type="url"
                name="buttonLink"
                value={campaignData.buttonLink}
                onChange={handleChange}
                placeholder="https://example.com"
              />

            </div>

          </div>

        </div>

        <div className="builder-actions">

          <button
            className="secondary-button"
            type="button"
          >
            Save as Draft
          </button>

          <button
            className="primary-button"
            type="button"
            onClick={onNext}
          >
            Continue →
          </button>

        </div>

      </div>

      <EmailLivePreview
        campaignData={campaignData}
      />

    </div>
  )
}

function EmailLivePreview({ campaignData }) {
  return (
    <div className="builder-preview">

      <div className="builder-preview-header">
        <h2>Email Preview</h2>

        <span>
          Live Preview
        </span>
      </div>

      <div className="email-live-wrapper">

        <div className="email-live">

          <div className="email-live-meta">

            <strong>
              {campaignData.sender ||
                "security@company.com"}
            </strong>

            <span>
              To: Selected Audience
            </span>

          </div>

          <div className="email-live-subject">
            {campaignData.subject ||
              "Your email subject"}
          </div>

          <div className="email-live-body">

            <div className="email-live-image">
              Email Image
            </div>

            <h2>
              {campaignData.heading ||
                "Your email heading"}
            </h2>

            <div
  className="email-preview-content"
  dangerouslySetInnerHTML={{
    __html:
      campaignData.message ||
      "<p>Your email message will appear here.</p>",
  }}
/>

            <a
              href={campaignData.buttonLink || "#"}
              className="email-live-button"
            >
              {campaignData.buttonText ||
                "Learn More"}
            </a>

          </div>

          <div className="email-live-footer">
            Internal Communication Platform
          </div>

        </div>

      </div>

    </div>
  );
}
