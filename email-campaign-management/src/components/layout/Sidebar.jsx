import React from 'react'
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <NavLink
          to="/dashboard">
        <div className="sidebar-logo">
        <div className="logo-icon">
          EC
        </div>

        <div>
          <h2>Email Campaign</h2>
          <span>Management Platform</span>
        </div>
      </div>
      </NavLink>

      <nav className="sidebar-nav">

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>▣</span>
          Dashboard
        </NavLink>

        <div className="nav-section-title">
          CAMPAIGNS
        </div>

        <NavLink
          to="/campaigns"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>✉</span>
          Campaign Library
        </NavLink>

        <NavLink
          to="/campaigns/create"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>＋</span>
          Create Campaign
        </NavLink>

        <div className="nav-section-title">
          AUDIENCE
        </div>

        <NavLink
          to="/audience"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>♟</span>
          Audience Management
        </NavLink>

        <div className="nav-section-title">
          TRAINING
        </div>

        <NavLink
          to="/training"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>▤</span>
          Courses
        </NavLink>

        <div className="nav-section-title">
          ANALYTICS
        </div>

        <NavLink
          to="/analytics"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <span>▥</span>
          Campaign Analytics
        </NavLink>

      </nav>

      <div className="sidebar-footer">
        <div className="user-avatar">
          A
        </div>

        <div>
          <strong>Admin User</strong>
          <small>Administrator</small>
        </div>
      </div>

    </aside>
  )
}
