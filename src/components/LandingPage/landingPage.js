import React from "react";
import styles from "./landingPage.module.css";

export function Content(props) {
  return (
    <div className={styles.capabilityContainer}>
      <p className={styles.hobbyType}>{props.hobbyType}</p>
      <p className={styles.content}>{props.children}</p>
      <a href={props.to} className={`${styles.button} ${styles.signup}`}>
        {props.cta}
      </a>
    </div>
  );
}

export function LandingPageContent(props) {
  return (
    <>
      <Content to="/signup" hobbyType="BJD OOAK" cta="Signup to get started!">
        Write about your dolls, customising techniques and expieriences <br />{" "}
        Share photos
      </Content>
      <Content to="/signup" hobbyType="OOAK" cta="Signup to get started!">
        View different doll brands, body types, face molds
      </Content>
      <Content to="/signup" hobbyType="BJD" cta="Signup to get started!">
        Create a private directory to track your sales <br /> Submit legitimacy
        requests to artists before buying secondhand <br /> Log secondhand
        purchases with the artist
      </Content>
      <Content to="/signup" hobbyType="BJD OOAK" cta="Signup to get started!">
        Curate your content by your interests
      </Content>
    </>
  );
}
