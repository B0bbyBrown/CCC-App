import React from "react";
import { PopupCardBase } from "./PopupCardBase";
import styles from "./EducationPopupCard.module.css";

export const EducationPopupCard = ({ data }) => {
  return (
    <PopupCardBase title="Education">
      <div className={styles.educationContainer}>
        {data.map((education, index) => (
          <div key={index} className={styles.educationItem}>
            <div className={styles.degree}>
              <h4>{education.degree}</h4>
              <span className={styles.year}>{education.year}</span>
            </div>

            <div className={styles.institution}>
              <span className={styles.institutionName}>
                {education.institution}
              </span>
              {education.location && (
                <span className={styles.location}>{education.location}</span>
              )}
            </div>

            {education.specialization && (
              <div className={styles.specialization}>
                <span className={styles.label}>Specialization:</span>
                <span>{education.specialization}</span>
              </div>
            )}

            {education.gpa && (
              <div className={styles.gpa}>
                <span className={styles.label}>GPA:</span>
                <span>{education.gpa}</span>
              </div>
            )}

            {education.achievements && education.achievements.length > 0 && (
              <div className={styles.achievements}>
                <h5>Key Achievements</h5>
                <ul>
                  {education.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {education.courses && education.courses.length > 0 && (
              <div className={styles.courses}>
                <h5>Notable Courses</h5>
                <div className={styles.courseTags}>
                  {education.courses.map((course, i) => (
                    <span key={i} className={styles.tag}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {education.thesis && (
              <div className={styles.thesis}>
                <h5>Thesis</h5>
                <p>{education.thesis.title}</p>
                {education.thesis.supervisor && (
                  <span className={styles.supervisor}>
                    Supervisor: {education.thesis.supervisor}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </PopupCardBase>
  );
};
