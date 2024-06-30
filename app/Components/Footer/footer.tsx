import Link from "next/link";
import React from "react";
import "./footer.mdule.css";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="footer" style={{ backgroundPosition: "top left" }}>
      <div className="list">
        <ul>
          <li>
            <Link href={"FeedBack/"}>Feedback</Link>
          </li>
          <li>
            <Link href={"AboutUs/"}>About Us</Link>
          </li>
          <li>
            <a href={"https://wa.link/1pdxkz"}>Contact</a>
          </li>
          <li>
            <Link href={"Terms/"}>Terms</Link>
          </li>
        </ul>
      </div>

      <div className="copy">
        <p>
          ©{year} <span>AlyPapaTask</span> All Rights Reseved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
