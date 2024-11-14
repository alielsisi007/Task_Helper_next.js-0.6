import React from "react";
import "./index.css";
import "./globals.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/hader/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
