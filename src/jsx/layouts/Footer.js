import React from "react";

const Footer = () => {
  let dat = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <a href="http://dexignzone.com/" target="_blank"  rel="noreferrer">
            DexignZone
          </a>{" "}
          {dat.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
