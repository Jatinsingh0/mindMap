import React from 'react';
import styles from './planning.module.css';


export const metadata = {
  title: 'Planning',
  description: 'This is a Planning',
}
const Planning = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Planning Phase:</h1>
      <div className={styles.section}>
        <h2 className={styles.subtitle}>1. Project Scope Definition</h2>
        <p className={styles.paragraph}>Defining the scope of the project by outlining objectives, deliverables, timelines, and resource requirements. This involves conducting feasibility studies, risk assessments, and stakeholder consultations to establish clear project goals and expectations.</p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.subtitle}>2. Resource Allocation</h2>
        <p className={styles.paragraph}>Allocating resources such as manpower, materials, and budget to support project activities. This includes identifying key personnel, establishing budgets, and securing necessary resources to ensure the successful execution of the project plan.</p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.subtitle}>3. Timeline Development</h2>
        <p className={styles.paragraph}>Developing a detailed timeline or project schedule that outlines key milestones, tasks, and dependencies. This involves creating Gantt charts, project calendars, and timelines to effectively manage project progress and track critical deadlines.</p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.subtitle}>4. Risk Management</h2>
        <p className={styles.paragraph}>Identifying potential risks and uncertainties that may impact project execution and developing strategies to mitigate them. This includes conducting risk assessments, implementing contingency plans, and monitoring risks throughout the project lifecycle.</p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.subtitle}>5. Communication and Collaboration</h2>
        <p className={styles.paragraph}>Establishing communication channels and collaboration tools to facilitate effective communication and collaboration among project team members, stakeholders, and external partners. This includes holding regular meetings, providing progress updates, and addressing any issues or concerns in a timely manner.</p>
      </div>
    </div>
  );
};

export default Planning;
