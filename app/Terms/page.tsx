import React from "react";

function Terms() {
  return (
    <div>
      {Array.from({ length: 10 }).map((term) => (
        <div
          style={{
            margin: "10px",
            padding: "5px",
            border: "solid 1px",
            borderRadius: "10px",
            lineHeight: "30px",
            backgroundColor: "#ddd",
            fontWeight: "bold",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              margin: "5px",
              textDecoration: "underline",
              color: "hsl(223, 51%, 52%)",
            }}
          >
            The Use
          </h1>
          <p>| Use it on the computer</p>
          <p style={{ textAlign: "center", marginTop: "5px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            ipsa, voluptatibus dolores fugit cupiditate pariatur rerum
            temporibus voluptas natus laudantium.
          </p>
        </div>
      ))}
    </div>
  );
}

export default Terms;
