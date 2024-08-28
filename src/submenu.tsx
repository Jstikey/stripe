import { useEffect, useRef } from "react";
import { useAppContext } from "./appContext";

export const Submenu = () => {
  //
  const linkRef = useRef<HTMLDivElement>(null);

  const context = useAppContext();
  const { isSubmenuOPen, pages, location } = context || {};
  const { page, links } = pages || {};
  const { center, bottom } = location || {};

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.style.left = `${center}px`;
      linkRef.current.style.top = `${bottom}px`;
    }
  }, [pages]);
  //
  return (
    <div
      className={`submenu  ${isSubmenuOPen ? "showSubmenu" : "hideSubmenu"}`}
      ref={linkRef}
    >
      <article className="submenu-center">
        <h4>{page}</h4>
        {links?.map(({ url, icon, label }, index) => (
          <a key={index} href={url}>
            {icon}
            {label}
          </a>
        ))}
      </article>
    </div>
  );
};
