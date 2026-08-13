import React from 'react'

export default function CampaignSchedule({
  campaignData,
  setCampaignData,
  onNext,
  onBack,
}) {
  return (
    <div className="builder-single-column">

      <div className="builder-card">

        <div className="builder-card-header">

          <h2>Schedule Campaign</h2>

          <p>
            Choose when the campaign should be sent.
          </p>

        </div>

        <div className="schedule-options">

          <label className="schedule-option">

            <input
              type="radio"
              name="scheduleType"
              value="now"
              checked={
                campaignData.scheduleType === "now"
              }
              onChange={(event) =>
                setCampaignData({
                  ...campaignData,
                  scheduleType: event.target.value,
                })
              }
            />

            <div>
              <strong>
                Send Immediately
              </strong>

              <span>
                Send the campaign as soon as it is approved.
              </span>
            </div>

          </label>

          <label className="schedule-option">

            <input
              type="radio"
              name="scheduleType"
              value="scheduled"
              checked={
                campaignData.scheduleType === "scheduled"
              }
              onChange={(event) =>
                setCampaignData({
                  ...campaignData,
                  scheduleType: event.target.value,
                })
              }
            />

            <div>
              <strong>
                Schedule for Later
              </strong>

              <span>
                Choose a specific date and time.
              </span>
            </div>

          </label>

        </div>

        {campaignData.scheduleType === "scheduled" && (
          <div className="form-row">

            <div className="form-group">

              <label>
                Date
              </label>

              <input
                type="date"
                value={campaignData.scheduleDate}
                onChange={(event) =>
                  setCampaignData({
                    ...campaignData,
                    scheduleDate: event.target.value,
                  })
                }
              />

            </div>

            <div className="form-group">

              <label>
                Time
              </label>

              <input
                type="time"
                value={campaignData.scheduleTime}
                onChange={(event) =>
                  setCampaignData({
                    ...campaignData,
                    scheduleTime: event.target.value,
                  })
                }
              />

            </div>

          </div>
        )}

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
