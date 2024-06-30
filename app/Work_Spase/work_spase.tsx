"use client";
import React, { useState, createContext } from "react";
import "./workSpas.css";
import "./CreatEle.css";
import StopWatch from "../Components/stopWatch/stopWatch";
import Note from "../Components/Note/Note";
import ToDoList from "../Components/To-Do-List/ToDoList";
import DraggableContainer from "../helper/DragDrop";
import Timer from "../Components/Timer/Timer";
export const ElementContext = createContext({ ele: <></>, num: 0 });
const WorkSpase: React.FC = () => {
  const [open, setOpen] = useState("none");
  const [components, setComponents] = useState<JSX.Element[]>([]);

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

  return (
    <div className="work">
      <div className="new-Component">{components}</div>
      <div
        className="contOpt"
        style={{
          margin: "10px",
          border: "solid 1px",
          minWidth: "10%",
          position: "fixed",
          bottom: "25vh",
          right: "20px",
          textAlign: "center",
          zIndex: 2,
          backgroundColor: "hsla(0, 0%, 0%, 0.8)",
          color: "hsl(223, 47%, 47%)",
          borderRadius: "10px",
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
      </div>
    </div>
  );
};

export default WorkSpase;
