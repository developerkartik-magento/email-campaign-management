import React from 'react'
import { trainings } from "../../data/trainings";

export default function TrainingList() {
  return (
    <div className="campaign-page">

      {/* Page Header */}

      <div className="page-header">

        <div>

          <h1>
            Training Management
          </h1>

          <p>
            Manage training courses and track employee completion.
          </p>

        </div>

        <button className="primary-button">
          + Create Course
        </button>

      </div>


      {/* Training Summary */}

      <div className="campaign-stats">

        <div className="stat-card">

          <span>
            Total Courses
          </span>

          <strong>
            {trainings.length}
          </strong>

        </div>


        <div className="stat-card">

          <span>
            Active Courses
          </span>

          <strong>
            {
              trainings.filter(
                (training) =>
                  training.status === "Active"
              ).length
            }
          </strong>

        </div>


        <div className="stat-card">

          <span>
            Total Assigned
          </span>

          <strong>
            {trainings
              .reduce(
                (total, training) =>
                  total + training.assignedUsers,
                0
              )
              .toLocaleString()}
          </strong>

        </div>


        <div className="stat-card">

          <span>
            Average Completion
          </span>

          <strong>
            {
              Math.round(
                trainings.reduce(
                  (total, training) =>
                    total + training.completionRate,
                  0
                ) / trainings.length
              )
            }%
          </strong>

        </div>

      </div>


      {/* Course List */}

      <div className="campaign-results">

        <div className="results-header">

          <h2>
            Training Courses
          </h2>

          <span>
            {trainings.length} courses
          </span>

        </div>


        <div className="campaign-table-wrapper">

          <table className="campaign-table">

            <thead>

              <tr>

                <th>
                  Course
                </th>

                <th>
                  Category
                </th>

                <th>
                  Assigned
                </th>

                <th>
                  Completion
                </th>

                <th>
                  Duration
                </th>

                <th>
                  Due Date
                </th>

                <th>
                  Status
                </th>

              </tr>

            </thead>


            <tbody>

              {trainings.map((training) => (

                <tr key={training.id}>

                  <td>

                    <div className="audience-name">

                      <strong>
                        {training.title}
                      </strong>

                      <span>
                        {training.description}
                      </span>

                    </div>

                  </td>


                  <td>
                    {training.category}
                  </td>


                  <td>
                    {training.assignedUsers.toLocaleString()}
                  </td>


                  <td>

                    <div className="completion-cell">

                      <div className="completion-bar">

                        <div
                          className="completion-progress"
                          style={{
                            width: `${training.completionRate}%`,
                          }}
                        />

                      </div>

                      <span>
                        {training.completionRate}%
                      </span>

                    </div>

                  </td>


                  <td>
                    {training.duration}
                  </td>


                  <td>
                    {training.dueDate}
                  </td>


                  <td>

                    <span
                      className={`status-badge status-${training.status.toLowerCase()}`}
                    >
                      {training.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}
