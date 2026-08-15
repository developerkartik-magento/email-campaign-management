import React from 'react'
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className="header">

      <div>
        <h3>Internal Communication Platform</h3>
        <p>Manage campaigns, training and analytics</p>
      </div>

      <div className="header-actions">
        <ThemeToggle />
        <button className="notification-button">
          🔔
          <span className="notification-dot">5</span>
        </button>

        <div className="header-user">

          <div className="header-avatar">
            A
          </div>

          <div>
            <strong>Admin User</strong>
            <small>Administrator</small>
          </div>

          <span>▼</span>

        </div>

      </div>

    </header>
  )
}
