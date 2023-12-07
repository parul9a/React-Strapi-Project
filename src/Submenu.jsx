import React from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

export default function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const currentPageId = sublinks.find((item) => item.pageId === pageId);
  const handleMouseLeave = (e) => {
    setPageId(null);
  };
  return (
    <div
      className={currentPageId ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{currentPageId?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPageId?.links.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPageId?.links.map((item) => {
          const { id, icon, label, url } = item;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
