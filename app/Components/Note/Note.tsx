"use client";
import React, { useState } from "react";
import "./Note.css";
function Note() {
  return (
    <div className="note">
      <textarea
        style={{ resize: "none" }}
        placeholder="For don't forget....."
      />
    </div>
  );
}

export default Note;
