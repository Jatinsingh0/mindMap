"use client";

import Link from "next/link";
import styles from "./hamburger.module.css";
import React, { useState } from "react";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        {open && (
          <div className={styles.responsiveMenu}>
            <Link
              href="/"
              className={styles.link}
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
            <Link
              href="/research"
              className={styles.link}
              onClick={() => setOpen(!open)}
            >
              Research
            </Link>
            <Link
              href="/planning"
              className={styles.link}
              onClick={() => setOpen(!open)}
            >
              Planning
            </Link>
            <Link
              href="/design"
              className={styles.link}
              onClick={() => setOpen(!open)}
            >
              Design
            </Link>
            <Link
              href="/manufacture"
              className={styles.link}
              onClick={() => setOpen(!open)}
            >
              Manufacture
            </Link>
            <Link
              href="/sales"
              className={styles.link}
              onClick={() => setOpen(!open)}
            >
              Sales
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
