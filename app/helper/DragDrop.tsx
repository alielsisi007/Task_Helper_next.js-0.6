"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./Dreg.css";
import { ElementContext } from "../Work_Spase/work_spase";

export default function DraggableContainer() {
  let ele = useContext(ElementContext);

  const handleClose = (event) => {
    const container = event.target.closest(".conteiner");
    if (container) {
      container.remove();
    }
  };

  return (
    <>
      <motion.div
        key={ele.num}
        className="conteiner"
        drag
        dragMomentum={false}
        style={{
          position: "relative",
          cursor: "grab",
        }}
      >
        <button className="close-note" onClick={handleClose}>
          X
        </button>
        {ele.ele}
      </motion.div>
    </>
  );
}
