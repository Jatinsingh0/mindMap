import React from 'react'
import Image from 'next/image'
import styles from "./research.module.css"

export const metadata = {
  title: 'Research',
  description: 'This is a Research',
}

const Research = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <p className={styles.title}>Market Analysis:</p>
          <p className={styles.desc}>
          Conducting comprehensive market research to identify consumer preferences, emerging trends, and competitive landscapes. This involves analyzing demographic data, consumer surveys, and market reports to gain insights into target markets and customer needs.
            <br />
            Conducting comprehensive market research to identify consumer preferences, emerging trends, and competitive landscapes. This involves analyzing demographic data, consumer surveys, and market reports to gain insights into target markets and customer needs.
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Technology Evaluation:</p>
          <p className={styles.desc}>
          Assessing cutting-edge technologies, materials, and manufacturing processes relevant to the automotive industry. This includes evaluating advancements in electric vehicle technology, autonomous driving systems, and sustainable materials to inform design decisions and stay ahead of industry innovations.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Research