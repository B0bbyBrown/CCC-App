import React from "react";
import styles from "./PopupTemplates.module.css";

export const CollaborationTemplate = ({ data }) => (
  <div className={styles.collaborationTemplate}>
    {data.map((item, index) => (
      <div key={index} className={styles.collaborationItem}>
        <h3>{item.project}</h3>
        <p>
          <strong>Client:</strong> {item.client}
        </p>
        <p>
          <strong>Year:</strong> {item.year}
        </p>
      </div>
    ))}
  </div>
);

export const AchievementsTemplate = ({ data }) => (
  <div className={styles.achievementsTemplate}>
    <ul>
      {data.map((achievement, index) => (
        <li key={index}>
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
          <p>Date: {achievement.date}</p>
          {achievement.category && <p>Category: {achievement.category}</p>}
          {achievement.impact && <p>Impact: {achievement.impact}</p>}
        </li>
      ))}
    </ul>
  </div>
);

export const EducationTemplate = ({ data }) => (
  <div className={styles.educationTemplate}>
    {data.map((edu, index) => (
      <div key={index} className={styles.educationItem}>
        <h3>{edu.degree}</h3>
        <p>
          <strong>Institution:</strong> {edu.institution}
        </p>
        <p>
          <strong>Year:</strong> {edu.graduationYear}
        </p>
        {edu.achievements && (
          <div>
            <strong>Achievements:</strong>
            <ul>
              {edu.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
);

export const SkillsTemplate = ({ data }) => (
  <div className={styles.skillsTemplate}>
    <div>
      <h3>Primary Skills</h3>
      <ul>
        {data.primarySkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
    <div>
      <h3>Secondary Skills</h3>
      <ul>
        {data.secondarySkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  </div>
);

export const GoalsTemplate = ({ data }) => (
  <div className={styles.goalsTemplate}>
    <div>
      <h3>Short Term Goals</h3>
      <ul>
        {data.shortTermGoals.map((goal, index) => (
          <li key={index}>
            <strong>{goal.goal}</strong>
            <p>Deadline: {goal.deadline}</p>
            {goal.progress && <p>Progress: {goal.progress}</p>}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3>Long Term Goals</h3>
      <ul>
        {data.longTermGoals.map((goal, index) => (
          <li key={index}>
            <strong>{goal.goal}</strong>
            <p>Deadline: {goal.deadline}</p>
            {goal.strategies && (
              <div>
                <strong>Strategies:</strong>
                <ul>
                  {goal.strategies.map((strategy, i) => (
                    <li key={i}>{strategy}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const ClientsTemplate = ({ data }) => (
  <div className={styles.clientsTemplate}>
    {data.map((client, index) => (
      <div key={index} className={styles.clientItem}>
        <h3>{client.name}</h3>
        <p>
          <strong>Industry:</strong> {client.industry}
        </p>
        <p>
          <strong>Projects:</strong> {client.projects.join(", ")}
        </p>
        <p>
          <strong>Contact:</strong> {client.contact.email},{" "}
          {client.contact.phone}
        </p>
        {client.feedback && (
          <p>
            <strong>Feedback:</strong> {client.feedback}
          </p>
        )}
      </div>
    ))}
  </div>
);
