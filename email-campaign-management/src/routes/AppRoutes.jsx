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

export default function AppRoutes() {
  return (
    <Routes>

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Main Application */}
      <Route element={<Layout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        {/* Campaigns */}
        <Route path="/campaigns" element={<CampaignList />} />
        
        <Route
    path="/campaigns/create"
    element={<CampaignBuilder />}
  /> 

        <Route
          path="/campaigns/:id"
          element={<CampaignDetails />}
        />
        <Route path="/campaigns/create" element={<CreateCampaign />} />
        <Route path="/campaigns/:id" element={<CampaignDetails />} />

        {/* Audience */}
        <Route path="/audience" element={<Audience />} />

        <Route
  path="/training"
  element={<TrainingList />}
/>
        {/* Training */}
        <Route path="/training" element={<Courses />} />
        <Route path="/training/:id" element={<CourseDetails />} />

        {/* Analytics */}
        <Route path="/analytics" element={<Analytics />} />

      </Route>

      {/* Default route */}
      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />

    </Routes>
  )
}
