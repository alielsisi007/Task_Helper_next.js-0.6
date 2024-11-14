"use client";
import React, { useState, createContext, useEffect } from "react";
import "./workSpas.css";
import "./CreatEle.css";
import StopWatch from "../Components/stopWatch/stopWatch";
import Note from "../Components/Note/Note";
import ToDoList from "../Components/To-Do-List/ToDoList";
import DraggableContainer from "../helper/DragDrop";
import Timer from "../Components/Timer/Timer";
import { motion } from "framer-motion";

export const ElementContext = createContext({ ele: <></>, num: 0 });

const WorkSpase: React.FC = () => {
  const [open, setOpen] = useState("none");
  const [components, setComponents] = useState<JSX.Element[]>([]);

  // تخزين إحداثيات الموقع
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  // عند التحميل الأول، جلب القيم المخزنة من `localStorage`
  useEffect(() => {
    const storedX = localStorage.getItem("dragX");
    const storedY = localStorage.getItem("dragY");
    if (storedX && storedY) {
      setX(parseFloat(storedX));
      setY(parseFloat(storedY));
    }
  }, []);

  const handleOpen = () => {
    setOpen((prevOpen) => (prevOpen === "none" ? "flex" : "none"));
  };

  const handleOpt = (e: { currentTarget: { innerHTML: any } }) => {
    const option = e.currentTarget.innerHTML;

    let component = null;
    switch (option) {
      case "Stopwatch":
        component = <StopWatch />;
        break;
      case "Quick note":
        component = <Note />;
        break;
      case "To Do List":
        component = <ToDoList />;
        break;
      case "Timer":
        component = <Timer />;
        break;
      default:
        break;
    }

    if (component) {
      setComponents((prevComponents) => [
        ...prevComponents,
        <ElementContext.Provider
          value={{ ele: component, num: prevComponents.length }}
          key={prevComponents.length}
        >
          <DraggableContainer />
        </ElementContext.Provider>,
      ]);
    }
  };

  // حفظ إحداثيات السحب في `localStorage` بعد الإفلات
  const handleDragEnd = (
    event: any,
    info: {
      point: {
        x: React.SetStateAction<number>;
        y: React.SetStateAction<number>;
      };
    }
  ) => {
    setX(info.point.x);
    setY(info.point.y);
    localStorage.setItem("dragX", info.point.x.toString());
    localStorage.setItem("dragY", info.point.y.toString());
  };

  return (
    <div className="work">
      <div className="new-Component">{components}</div>
      <motion.div
        drag
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        initial={{ x: x, y: y }}
        className="contOpt"
        style={{
          margin: "10px",
          border: "solid 1px",
          minWidth: "10%",
          bottom: "25vh",
          right: "20px",
          textAlign: "center",
          zIndex: 2,
          backgroundColor: "hsla(0, 0%, 0%, 0.8)",
          color: "hsl(223, 47%, 47%)",
          borderRadius: "10px",
          position: "fixed",
          cursor: "grab",
        }}
      >
        <ul
          style={{
            margin: "5px",
            display: open,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <li onClick={handleOpt}>Stopwatch</li>
          <li onClick={handleOpt}>Quick note</li>
          <li onClick={handleOpt}>To Do List</li>
          <li onClick={handleOpt}>Timer</li>
        </ul>
        <button
          onClick={handleOpen}
          style={{ border: "solid 1px", width: "20px", height: "20px" }}
        >
          ^
        </button>
      </motion.div>
    </div>
  );
};

export default WorkSpase;
