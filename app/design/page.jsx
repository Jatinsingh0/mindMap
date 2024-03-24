import React from "react";
import styles from "./Design.module.css";
import Image from "next/image";

export const metadata = {
  title: 'Design',
  description: 'This is a Design',
}
const Design = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.Title}>Design Phase:</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <p className={styles.desc}>
            The Design phase in the car manufacturing process is a pivotal stage
            where the conceptualization and visualization of the vehicle take
            place. It serves as the blueprint for the entire manufacturing
            process &apos; laying the foundation for the car&apos;s aesthetics,
            functionality, and performance.
          </p>

          <p className={styles.desc}>
            During this phase, automotive engineers and designers collaborate
            closely to translate the initial concept into tangible designs. This
            involves extensive research, analysis, and iteration to ensure that
            the final product meets the company&apos;s standards and customer
            expectations.
          </p>
          <p className={styles.activites}>Key activities in the Design phase include:</p>
          <p>1. Conceptualizing vehicle aesthetics and functionality.</p>
          <p>2. Visualizing design elements through sketches and renderings.</p>
          <p>3. Engineering precise 3D models and prototypes.</p>
          <p>4. Selecting materials for durability and performance.</p>
          <p>5. Integrating advanced technologies seamlessly into the design.</p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/design.jpeg"
            alt="design image"
            fill={true}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Design;
