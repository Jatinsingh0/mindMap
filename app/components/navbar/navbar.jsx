import React from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link';
import Hamburger from '../hamburger/Hamburger';

const navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
          <div>
            <Link href="/" className={styles.brand}>Lizmotors </Link>
          </div>
          <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
            <Link href="/research" className={styles.link}>Research</Link>
            <Link href="/planning" className={styles.link}>Planning</Link>
            <Link href="/design" className={styles.link}>Design</Link>
            <Link href="/manufacture" className={styles.link}>Manufacture</Link>
            <Link href="/sales" className={styles.link}>Sales</Link>
            <Hamburger />
          </div>
        </div>
    </>
  )
}

export default navbar