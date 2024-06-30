import React from "react";
import Link from "next/link";
import "./globals.css";
import "./index.css";

function Page() {
  return (
    <div className="container">
      <Link href="/Work_Spase" passHref legacyBehavior>
        <a
          className="start"
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Let's Start ⭐
        </a>
      </Link>
    </div>
  );
}

export default Page;
