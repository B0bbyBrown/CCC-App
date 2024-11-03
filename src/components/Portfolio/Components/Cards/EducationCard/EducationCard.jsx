import React from "react";
import styles from "./EducationCard.module.css";

export const EducationCard = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    institution,
    degree,
    field,
    duration,
    location,
    achievements = [],
    courses = [],
    gpa,
  } = data;

  return (
    <div className={styles.educationCard}>
      <div className={styles.header}>
        {institution && <h3 className={styles.institution}>{institution}</h3>}
        <div className={styles.degreeInfo}>
          {degree && field && (
            <h4 className={styles.degree}>
              {degree} in {field}
            </h4>
          )}
          {duration && <p className={styles.duration}>{duration}</p>}
          {location && <p className={styles.location}>{location}</p>}
          {gpa && <p className={styles.gpa}>GPA: {gpa}</p>}
        </div>
      </div>

      {courses.length > 0 && (
        <div className={styles.section}>
          <h4>Key Courses</h4>
          <div className={styles.coursesList}>
            {courses.map((course, index) => (
              <span key={index} className={styles.course}>
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {achievements.length > 0 && (
        <div className={styles.section}>
          <h4>Achievements</h4>
          <ul className={styles.achievementsList}>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
