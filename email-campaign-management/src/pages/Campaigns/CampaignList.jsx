import React from 'react'
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { campaigns } from "../../data/campaigns";

import CampaignFilters from "./components/CampaignFilters";
import CampaignTable from "./components/CampaignTable";



export default function CampaignList() {
    const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");
  const filteredCampaigns = useMemo(() => {

    return campaigns.filter((campaign) => {

      const matchesSearch =
        campaign.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        campaign.audience
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        campaign.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

  }, [searchTerm, statusFilter]);
  return (
    <div className="campaign-page">

      {/* Page Header */}

      <div className="page-header">

        <div>
          <h1>Campaign Library</h1>

          <p>
            Create, manage and monitor your email campaigns.
          </p>
        </div>

        <Link
          to="/campaigns/create"
          className="primary-button"
        >
          + Create Campaign
        </Link>

      </div>

      {/* Filters */}

      <CampaignFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Results */}

      <div className="campaign-results">

        <div className="results-header">

          <h2>
            Campaigns
          </h2>

          <span>
            {filteredCampaigns.length} campaigns
          </span>

        </div>

        <CampaignTable
          campaigns={filteredCampaigns}
        />

      </div>

    </div>
  )
}
