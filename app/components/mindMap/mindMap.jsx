import Link from "next/link";
import styles from "./mindMap.module.css";

export default function TimelineMindMap() {
  return (
    <div className={styles.timeline}>
      <div className={styles.title}>Timeline MindMap</div>
      <Link href="/research">
        <div className={styles.node} style={{ top: "0" }}>
          Research
          <div className={styles.nodeContent}>
            <p>
              1. Purpose: Understand customer needs.<br></br>
              2. Methods: Surveys, interviews, data analysis.<br></br>
              3. Findings: Demographics, preferences, trends.
            </p>
          </div>
        </div>
      </Link>

      <Link href="/planning">
        <div className={styles.node} style={{ top: "0" }}>
          Planning
          <div className={styles.nodeContent}>
            <p>
              1. Goals: Define project objectives. <br></br>
              2. Strategy: Develop action plans.<br></br>
              3. Timeline: Establish deadlines.<br></br>
              4. Resources: Allocate budget and manpower.
            </p>
          </div>
        </div>
      </Link>

      <Link href="/design">
        <div className={styles.node} style={{ top: "0" }}>
          Design
          <div className={styles.nodeContent}>
            <p>
              1. Concepts: Ideate product features.<br></br>
              2. Prototyping: Create mockups.<br></br>
              3. Feedback: Gather user input<br></br>
              4. Iteration: Refine design based on feedback.
            </p>
          </div>
        </div>
      </Link>

      <Link href="/manufacture">
        <div className={styles.node} style={{ top: "0" }}>
          Manufacture
          <div className={styles.nodeContent}>
            <p>
              1. Production: Build product.<br></br>
              2. Quality Control: Ensure standards.<br></br>
              3. Logistics: Manage supply chain.<br></br>
              4. Efficiency: Streamline processes.
            </p>
          </div>
        </div>
      </Link>

      <Link href="/sales">
        <div className={styles.node} style={{ top: "0" }}>
          Sales
          <div className={styles.nodeContent}>
            <p>
              1. Marketing: Promote product.<br></br>
              2. Distribution: Reach customers.<br></br>
              3. Sales Strategy: Pricing, discounts.<br></br>
              4. Customer Service: Support post-sale
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
