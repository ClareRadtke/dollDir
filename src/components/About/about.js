import React from "react";
import styles from "./about.module.css";

export function About(props) {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.header}>
          <h1 className={styles.heading}>About</h1>
        </div>
        <div className={styles.aboutContent}>
          <p className={styles.aboutP}>
            The Doll Directory is a passion project, created to combine as many
            needs and wants within the doll customising community as possible.
          </p>
          <p className={styles.aboutP}>
            The idea was born in 2020 after having to click through the many
            folders within folders containing and organising my bookmarked doll
            related sites. Navigating from Etsy, to Instagram, to an artists
            personal site to check on orders or for preorders, see whats new,
            trying to find that item of clothing that I saw somewhere or those
            eyes I needed a pair of or the sculpt of a particular bjd or that
            OOAK doll that I just had to get. How amazing would it be if all of
            this content was hosted in one place that was easy to navigate and
            provided the creative freedom that artists thrive on?
          </p>

          <p className={styles.aboutP}>
            The ideas started flooding into my brain and caused quite a few
            sleepless nights as I pondered the ideas and how they could be
            executed with my extremely minial software development skills. After
            6 months of self-driven study and a 6 month fullstack software
            development bootcamp, a year later and I now have the bones of this
            website created. There is a long way to go yet and many, many
            capabilities that I want to incorporate.
          </p>

          <p className={styles.aboutP}>
            If you have any ideas that you would like to see please reach out
            through the contact page, I'd love to hear them!
          </p>
        </div>
      </div>
    </>
  );
}
