import React from 'react'

export default function CampaignAudience({
  campaignData,
  setCampaignData,
  onNext,
  onBack,
}) {
    const audiences = [
    "All Employees",
    "Engineering",
    "IT Department",
    "Remote Employees",
    "Managers",
  ];
  return (
    <div className="builder-single-column">

      <div className="builder-card">

        <div className="builder-card-header">

          <h2>Select Audience</h2>

          <p>
            Choose who should receive this campaign.
          </p>

        </div>

        <div className="audience-options">

          {audiences.map((audience) => (

            <label
              key={audience}
              className="audience-option"
            >

              <input
                type="radio"
                name="audience"
                value={audience}
                checked={
                  campaignData.audience === audience
                }
                onChange={(event) =>
                  setCampaignData({
                    ...campaignData,
                    audience: event.target.value,
                  })
                }
              />

              <div>
                <strong>
                  {audience}
                </strong>

                <span>
                  Demo distribution list
                </span>
              </div>

            </label>

          ))}

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
          onClick={onNext}
        >
          Continue →
        </button>

      </div>

    </div>
  )
}
