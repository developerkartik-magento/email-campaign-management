import React from 'react'
import { useMemo, useState } from "react";
import { audiences as initialAudiences } from "../../data/audiences";
import AudienceTable from "./components/AudienceTable";

export default function AudienceList() {
    // Audience data
  const [audiences, setAudiences] = useState(initialAudiences);

  // Search & filters
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Modal
  const [showModal, setShowModal] = useState(false);

  // New audience form
  const [newAudience, setNewAudience] = useState({
    name: "",
    type: "Distribution List",
    members: "",
    domain: "",
    status: "Active",
    description: "",
  });


  // Filter audiences
  const filteredAudiences = useMemo(() => {

    return audiences.filter((audience) => {

      const matchesSearch =
        audience.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        audience.domain
          .toLowerCase()
          .includes(searchTerm.toLowerCase());


      const matchesType =
        typeFilter === "All" ||
        audience.type === typeFilter;


      const matchesStatus =
        statusFilter === "All" ||
        audience.status === statusFilter;


      return (
        matchesSearch &&
        matchesType &&
        matchesStatus
      );

    });

  }, [
    audiences,
    searchTerm,
    typeFilter,
    statusFilter,
  ]);


  // Handle form input
  const handleInputChange = (event) => {

    const { name, value } = event.target;

    setNewAudience((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  // Add new audience
  const handleAddAudience = (event) => {

    event.preventDefault();

    if (!newAudience.name.trim()) {
      alert("Please enter an audience name.");
      return;
    }

    if (!newAudience.domain.trim()) {
      alert("Please enter a domain.");
      return;
    }


    const audience = {
      id: Date.now(),

      name: newAudience.name,

      type: newAudience.type,

      members: Number(newAudience.members) || 0,

      domain: newAudience.domain,

      status: newAudience.status,

      description:
        newAudience.description ||
        "New audience created from Audience Management.",
    };


    setAudiences((previous) => [
      ...previous,
      audience,
    ]);


    // Reset form

    setNewAudience({
      name: "",
      type: "Distribution List",
      members: "",
      domain: "",
      status: "Active",
      description: "",
    });


    // Close modal

    setShowModal(false);

  };

  return (
    <div className="campaign-page">

      {/* Page Header */}

      <div className="page-header">

        <div>

          <h1>
            Audience Management
          </h1>

          <p>
            Manage distribution lists and target domains.
          </p>

        </div>


        <button
          className="primary-button"
          onClick={() => setShowModal(true)}
        >
          + Add Audience
        </button>

      </div>


      {/* Filters */}

      <div className="audience-filters">

        <div className="audience-search">

          <input
            type="text"
            placeholder="Search audience or domain..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

        </div>


        <select
          value={typeFilter}
          onChange={(event) =>
            setTypeFilter(event.target.value)
          }
        >

          <option value="All">
            All Types
          </option>

          <option value="Distribution List">
            Distribution List
          </option>

          <option value="Target Domain">
            Target Domain
          </option>

        </select>


        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
        >

          <option value="All">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>

        </select>

      </div>


      {/* Results */}

      <div className="campaign-results">

        <div className="results-header">

          <h2>
            Audiences
          </h2>

          <span>
            {filteredAudiences.length} audiences
          </span>

        </div>


        <AudienceTable
          audiences={filteredAudiences}
        />

      </div>


      {/* Add Audience Modal */}

      {showModal && (

        <div className="modal-overlay">

          <div className="audience-modal">

            <div className="modal-header">

              <div>

                <h2>
                  Add Audience
                </h2>

                <p>
                  Create a new distribution list or target domain.
                </p>

              </div>


              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>

            </div>


            <form onSubmit={handleAddAudience}>

              {/* Audience Name */}

              <div className="form-group">

                <label>
                  Audience Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Product Team"
                  value={newAudience.name}
                  onChange={handleInputChange}
                />

              </div>


              {/* Type */}

              <div className="form-group">

                <label>
                  Audience Type
                </label>

                <select
                  name="type"
                  value={newAudience.type}
                  onChange={handleInputChange}
                >

                  <option value="Distribution List">
                    Distribution List
                  </option>

                  <option value="Target Domain">
                    Target Domain
                  </option>

                </select>

              </div>


              {/* Domain */}

              <div className="form-group">

                <label>
                  Target Domain
                </label>

                <input
                  type="text"
                  name="domain"
                  placeholder="e.g. company.com"
                  value={newAudience.domain}
                  onChange={handleInputChange}
                />

              </div>


              {/* Members */}

              <div className="form-group">

                <label>
                  Number of Members
                </label>

                <input
                  type="number"
                  name="members"
                  placeholder="e.g. 500"
                  min="0"
                  value={newAudience.members}
                  onChange={handleInputChange}
                />

              </div>


              {/* Status */}

              <div className="form-group">

                <label>
                  Status
                </label>

                <select
                  name="status"
                  value={newAudience.status}
                  onChange={handleInputChange}
                >

                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>

                </select>

              </div>


              {/* Description */}

              <div className="form-group">

                <label>
                  Description
                </label>

                <textarea
                  name="description"
                  placeholder="Describe this audience..."
                  rows="3"
                  value={newAudience.description}
                  onChange={handleInputChange}
                />

              </div>


              {/* Actions */}

              <div className="modal-actions">

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="primary-button"
                >
                  Add Audience
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  )
}
