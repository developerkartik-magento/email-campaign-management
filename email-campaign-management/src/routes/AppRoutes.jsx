import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import CampaignBuilder from "../pages/Campaigns/CampaignBuilder";
import CampaignList from "../pages/Campaigns/CampaignList";
import CreateCampaign from "../pages/Campaigns/CreateCampaign";
import CampaignDetails from "../pages/Campaigns/CampaignDetails";

import Audience from "../pages/Audience/AudienceList";
import TrainingList from "../pages/Training/TrainingList";
import Courses from "../pages/Training/Courses";
import CourseDetails from "../pages/Training/CourseDetails";

import Analytics from "../pages/Analytices/Analytics";
import AnalyticsDashboard from "../pages/Analytices/AnalyticsDashboard";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
  path="/"
  element={
    <Navigate
      to="/login"
      replace
    />
  }
/>

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Main Application */}
      <Route element={<Layout />}>

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        {/* Campaigns */}
        <Route 
        path="/campaigns" 
        element={
        <ProtectedRoute>
          <CampaignList />
        </ProtectedRoute>
        } />
        
        <Route
    path="/campaigns/create"
    element={<ProtectedRoute><CampaignBuilder /></ProtectedRoute>}
  /> 

        <Route
          path="/campaigns/:id"
          element={<ProtectedRoute><CampaignDetails /></ProtectedRoute>}
        />
        <Route path="/campaigns/create" element={<ProtectedRoute><CreateCampaign /></ProtectedRoute>} />
        <Route path="/campaigns/:id" element={<ProtectedRoute><CampaignDetails /></ProtectedRoute>} />

        {/* Audience */}
        <Route path="/audience" element={<ProtectedRoute><Audience /></ProtectedRoute>} />

        <Route
  path="/training"
  element={<ProtectedRoute><TrainingList /></ProtectedRoute>}
/>
        {/* Training */}
        <Route path="/training" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
        <Route path="/training/:id" element={<ProtectedRoute><CourseDetails /></ProtectedRoute>} />

        {/* Analytics */}
        <Route path="/analytics" element={<ProtectedRoute><AnalyticsDashboard /></ProtectedRoute>} />

      </Route>

      {/* Default route */}
      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />

    </Routes>
  )
}
