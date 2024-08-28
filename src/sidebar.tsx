import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useAppContext } from "./appContext";

export const Sidebar = () => {
  //
  const context = useAppContext();
  const { closeSibeBar, isSideBarOPen } = context || {};

  //
  return (
    <aside
      className={`sidebar-wrapper ${
        isSideBarOPen ? "show-sidebar" : "hide-sidebar"
      }`}
    >
      <div className="sidebar-div">
        <FaTimes className="close-sidebar-btn" onClick={closeSibeBar} />
        <div className=" sidebar-sublinks">
          {sublinks.map(({ page, links }) => (
            <article>
              <h4>{page}</h4>
              <div className="sidebar-links">
                {links.map(({ icon, url, label }) => (
                  <a href={url}>
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};
