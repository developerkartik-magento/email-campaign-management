import React from 'react'

export default function AudienceTable({ audiences }) {
  return (
    <div className="campaign-table-wrapper">

      <table className="campaign-table">

        <thead>
          <tr>
            <th>Audience Name</th>
            <th>Type</th>
            <th>Members</th>
            <th>Domain</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {audiences.length === 0 ? (

            <tr>
              <td colSpan="6" className="empty-state">
                No audiences found.
              </td>
            </tr>

          ) : (

            audiences.map((audience) => (

              <tr key={audience.id}>

                <td>
                  <div className="audience-name">
                    <strong>
                      {audience.name}
                    </strong>

                    <span>
                      {audience.description}
                    </span>
                  </div>
                </td>

                <td>
                  {audience.type}
                </td>

                <td>
                  {audience.members.toLocaleString()}
                </td>

                <td>
                  {audience.domain}
                </td>

                <td>

                  <span
                    className={`status-badge status-${audience.status.toLowerCase()}`}
                  >
                    {audience.status}
                  </span>

                </td>

                <td>

                  <div className="table-actions">

                    <button
                      className="table-action-button"
                      title="View Audience"
                    >
                      View
                    </button>

                    <button
                      className="table-action-button"
                      title="Edit Audience"
                    >
                      Edit
                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  )
}
