import React from 'react'
import { useParams } from "react-router-dom";

export default function CampaignDetails() {
    const { id } = useParams();
  return (
    <div>
      <h1>Campaign Details</h1>

      <p>
        Campaign ID: {id}
      </p>
    </div>
  )
}
