import React from 'react'
import { useParams } from "react-router-dom";

export default function CourseDetails() {
    const { id } = useParams();
  return (
    <div>
      <h1>Course Details</h1>

      <p>
        Course ID: {id}
      </p>
    </div>
  )
}
