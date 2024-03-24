import React from 'react'
import styles from "./dashboard.module.css"

const dashboard = () => {
  return (
    <>
      <div className={styles.dashboardBox}>
          <div className={styles.dashboardHeader}>
            <h2 className={styles.dashboardTitle}>Dashboard</h2>
            
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Positive</h3>
          <div className={styles.progress}>
            <div className={styles.progressBar} style={{ width: "90%" }}></div>
          </div>
          <div className={styles.details}>80%</div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Negative</h3>
          <div className={styles.progress}>
            <div className={styles.progressBar} style={{ width: "60%" }}></div>
          </div>
          <div className={styles.details}>50%</div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Comments</h3>
          <div className={styles.progress}>
            <div className={styles.progressBar} style={{ width: "70%" }}></div>
          </div>
          <div className={styles.details}>90%</div>
        </div>
    </>
  )
}

export default dashboard