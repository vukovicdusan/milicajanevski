import React from "react";
import Wrapper from "./Wrapper";
import * as styles from "../../styles/Footer.module.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <p className={styles.footerCenter}>
          {" "}
          Copyright © {year} Milica Janevski | Website by{" "}
          <a
            className="white-color"
            href="https://www.dusanvukovic.com/"
            rel="noopener"
            target="__blank"
          >
            Dušan Vuković
          </a>{" "}
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
