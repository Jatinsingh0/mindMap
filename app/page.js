import React from "react";
import styles from "./page.module.css";
import Dashboard from "./components/dashboard/dashboard";
import MindMap from "./components/mindMap/mindMap";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Dashboard />
        <MindMap />
      </div>
    </div>
  );
};

export default page;
