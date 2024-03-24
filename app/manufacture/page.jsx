
import React from 'react';
import styles from "./Manufacture.module.css"
export const metadata = {
  title: 'Manufacture',
  description: 'This is a Manufacture',
}
const ManufacturePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Manufacturing Phase:</h1>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>1. Production Planning</h2>
          <p className={styles.paragraph}>Developing detailed production plans to ensure efficient utilization of resources, optimize production processes, and meet quality standards. This involves scheduling production runs, allocating machinery and equipment, and coordinating with suppliers for timely delivery of materials.</p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>2. Quality Control</h2>
          <p className={styles.paragraph}>Implementing quality control measures to monitor and assess the quality of manufactured products. This includes conducting inspections, testing samples, and implementing corrective actions to address any deviations from quality standards.</p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>3. Production Execution</h2>
          <p className={styles.paragraph}>Executing the production plan by overseeing manufacturing operations, coordinating production activities, and ensuring compliance with safety regulations. This involves supervising production teams, monitoring progress, and addressing any issues or bottlenecks in production processes.</p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>4. Supply Chain Management</h2>
          <p className={styles.paragraph}>Managing the supply chain to ensure smooth flow of materials and components throughout the manufacturing process. This includes sourcing raw materials, managing inventory levels, and optimizing logistics to minimize lead times and costs.</p>
        </div>
      </div>
    </div>
  );
};

export default ManufacturePage;
