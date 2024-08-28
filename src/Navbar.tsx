import { FaBars } from "react-icons/fa";
import logo from "../src/assets/images/logo.svg";
import { useAppContext } from "./appContext";

export const Navbar = () => {
  //

  const context = useAppContext();
  const { openSideBar, openSubMenu, closeSubMenu } = context || {};

  const displaySubMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const btns = e.target as HTMLButtonElement;
    const btn = btns.getBoundingClientRect();
    const text = btns.textContent;
    const center = (btn.left + btn.right) / 2;
    const bottom = btn.bottom;
    if (openSubMenu && text)
      openSubMenu(text, { bottom: bottom, center: center });
  };

  const showNavLinks = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (!target.classList.contains("btn-link")) {
      closeSubMenu && closeSubMenu();
    }
  };
  //
  return (
    <nav className="nav" onMouseOver={showNavLinks}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button>
            <FaBars className="fabar" onMouseOver={openSideBar} />
          </button>
        </div>
        <ul className="nav-links">
          <button className="btn-link" onMouseOver={displaySubMenu}>
            developers
          </button>
          <button className="btn-link" onMouseOver={displaySubMenu}>
            products
          </button>
          <button className="btn-link" onMouseOver={displaySubMenu}>
            company
          </button>
        </ul>
        <button className="signin-btn">sign in</button>
      </div>
    </nav>
  );
};
