import React from "react";

import Card from "../Card/Card";

import { FooterStyle } from "./Footer.style";

function Footer() {
  return (
    <FooterStyle>
      <section className="foot-container">
        <article className="subscribe-container">
          <Card
            className="announcment-card"
            cardType="horizontalCard"
            heading="KNOW IT ALL FIRST!"
            description="Never Miss Anything From Multikart By Signing Up To Our Newsletter."
          />
        </article>
      </section>
    </FooterStyle>
  );
}

export default Footer;
