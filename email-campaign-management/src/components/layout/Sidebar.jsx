import React from 'react'
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <aside>

      <h2>Email Platform</h2>

      <nav>

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <h4>CAMPAIGNS</h4>

        <NavLink to="/campaigns">
          Campaign Library
        </NavLink>

        <NavLink to="/campaigns/create">
          Create Campaign
        </NavLink>

        <h4>AUDIENCE</h4>

        <NavLink to="/audience">
          Audience Management
        </NavLink>

        <h4>TRAINING</h4>

        <NavLink to="/training">
          Courses
        </NavLink>

        <h4>ANALYTICS</h4>

        <NavLink to="/analytics">
          Campaign Analytics
        </NavLink>

      </nav>

    </aside>
    </div>
  )
}
