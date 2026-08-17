import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";

export default function Header({ onMenuClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);


  const handleSettings = () => {

    setDropdownOpen(false);

    navigate("/settings");
  };


  const handleLogout = () => {

  // Remove demo login information
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("user");

  setDropdownOpen(false);

  // Redirect to login page
  navigate("/login", {
    replace: true,
  });
};
  return (
    <header className="header">

      <div className="header-left">

        {/* Mobile Menu Button */}

        <button
        type="button"
          className="mobile-menu-button"
          onClick={onMenuClick}
        >
          ☰
        </button>


        <div>

          <h3>
            Internal Communication Platform
          </h3>

          <p>
            Manage campaigns, training and analytics
          </p>

        </div>

      </div>

      <div className="header-actions">
        <ThemeToggle />
        <button className="notification-button">
          🔔
          <span className="notification-dot">5</span>
        </button>
        
        <div
          className="header-user-wrapper"
          ref={dropdownRef}
        >
          <button
            type="button"
            className="header-user"
            onClick={() =>
              setDropdownOpen(
                (previous) => !previous
              )
            }
          >
            <div className="header-avatar">
             A
             </div>
             <div className="header-user-info">
            
              <strong>
                Admin User
              </strong>

              <small>
                Administrator
              </small>

            </div>
            <span
              className={`dropdown-arrow ${
                dropdownOpen ? "open" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {/* Dropdown */}

          {dropdownOpen && (

            <div className="user-dropdown">

              <div className="dropdown-user-info">

                <div className="dropdown-avatar">
                  A
                </div>

                <div>

                  <strong>
                    Admin User
                  </strong>

                  <span>
                    admin@company.com
                  </span>

                </div>

              </div>


              <div className="dropdown-divider"></div>


              <button
                type="button"
                className="dropdown-item"
                onClick={handleSettings}
              >

                <span>⚙️</span>

                <div>
                  <strong>Settings</strong>
                  <small>
                    Manage your preferences
                  </small>
                </div>

              </button>


              <div className="dropdown-divider"></div>


              <button
                type="button"
                className="dropdown-item logout-item"
                onClick={handleLogout}
              >

                <span>🚪</span>

                <div>
                  <strong>Logout</strong>
                  <small>
                    Sign out of your account
                  </small>
                </div>

              </button>

            </div>

          )}
        </div>
        

      </div>

    </header>
  )
}
