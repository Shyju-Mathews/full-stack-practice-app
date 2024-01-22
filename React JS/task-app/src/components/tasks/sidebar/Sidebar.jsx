import React from "react";
import { useRef } from "react";
import { useState } from "react";
import './sidebar.css'

const navItems = ["Home", "Settings", "Backup", "Mail", "Cloud"];

const Sidebar = () => {
  const [width, setWidth] = useState(60);
  const sidebarRef = useRef(null);
  const sidebar = sidebarRef.current;

  const resize = (e) => {
    let newWidth = e.clientX - sidebar?.offsetLeft;
    if (newWidth < 61) newWidth = 60;
    if (newWidth > 259) newWidth = 260;
    setWidth(newWidth);
  };

  const stopResize = () => {
    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stopResize);
  };

  const initResize = () => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  };
  return (
    <aside ref={sidebarRef} style={{ width: `${width}px` }} className="sidebar">
      <div className="handle" onMouseDown={initResize}></div>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button type="button" className="sidebar-burger">
            <span className="material-symbols-outlined">Menu</span>
          </button>
          <img src="" alt="logo" className="sidebar-logo"/>
        </header>
        <nav className="sidebar-menu">
          {
            navItems.map((item) => (
              <button key={item} type="button" className="sidebar-button">
                <span className="material-symbols-outlined">{item}</span>
                <p>{item}</p>
              </button>
            ))
          }
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
