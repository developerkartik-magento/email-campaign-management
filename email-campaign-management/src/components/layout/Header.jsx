import React from 'react'

export default function Header() {
  return (
    <header className="header">

      <div>
        <h3>Internal Communication Platform</h3>
        <p>Manage campaigns, training and analytics</p>
      </div>

      <div className="header-actions">

        <button className="notification-button">
          🔔
          <span className="notification-dot"></span>
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
