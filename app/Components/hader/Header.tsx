import React from "react";
import Link from "next/link";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <span className="logo">
        <Link href={"/"}>AlyPapaTask</Link>
      </span>
      <ul>
        <li>
          <Link href={"AboutUs/"}>About Us</Link>
        </li>
        <li>
          <Link href={"LogIn/"}>LogIn Google</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
