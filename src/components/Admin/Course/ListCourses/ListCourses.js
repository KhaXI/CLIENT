import React, { useState, useEffect } from 'react'
import { Course } from "../../../../api";

const courseController = new Course()

export function ListCourses() {
  const [courses, setCourses] = useState(false)

  useEffect(() => { }, [])

  return (
    <div>
      <h2>ListCourses</h2>
    </div>
  )
}
