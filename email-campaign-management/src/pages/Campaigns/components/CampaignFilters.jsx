import React from 'react'

export default function CampaignFilters({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="campaign-filters">

      <div className="search-box">

        <span>⌕</span>

        <input
          type="text"
          placeholder="Search campaigns..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

      </div>

      <select
        value={statusFilter}
        onChange={(event) =>
          setStatusFilter(event.target.value)
        }
      >
        <option value="All">All Status</option>
        <option value="Scheduled">Scheduled</option>
        <option value="Completed">Completed</option>
        <option value="Draft">Draft</option>
      </select>

    </div>
  )
}
