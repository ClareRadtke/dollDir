import React from "react";
import "./landingPage.css";

export function Content(props) {
  return (
    <div className="capability-container">
      <p className="hobbyType">{props.hobbyType}</p>
      <p>{props.children}</p>
      <a href={props.to} className="button signup">
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
