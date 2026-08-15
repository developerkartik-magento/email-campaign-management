import React from 'react'
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="app-layout">

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-content">

        <Header
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <main>
          <Outlet />
        </main>

      </div>

    </div>
  )
}
