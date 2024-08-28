import { createContext, FC, ReactNode, useContext, useState } from "react";
import sublinks from "./data";

interface AppProvdierProps {
  children: ReactNode;
}

interface locationProps {
  bottom: number;
  center: number;
}

interface pageProps {
  page: string;
  links: {
    label: string;
    icon: JSX.Element;
    url: string;
  }[];
}

interface contextProps {
  isSubmenuOPen: boolean;
  isSideBarOPen: boolean;
  openSideBar: () => void;
  closeSibeBar: () => void;
  openSubMenu: (
    page: string,
    coordinate: {
      bottom: number;
      center: number;
    }
  ) => void;
  closeSubMenu: () => void;
  location?: { bottom: number; center: number };
  pages?: pageProps;
}

const AppContext = createContext<contextProps | null>(null);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: FC<AppProvdierProps> = ({ children }) => {
  const [isSideBarOPen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOPen, setIsSubMenuOPen] = useState(false);
  const [location, setLocation] = useState<locationProps | undefined>();
  const [pages, setPage] = useState<pageProps>();

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  const closeSibeBar = () => {
    setIsSideBarOpen(false);
  };

  const openSubMenu = (
    page: string,
    coordinate: { bottom: number; center: number }
  ) => {
    const text = sublinks.find((links) => links.page === page);
    setPage(text);
    setIsSubMenuOPen(true);
    setLocation(coordinate);
  };

  const closeSubMenu = () => {
    setIsSubMenuOPen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOPen,
        openSideBar,
        closeSibeBar,
        isSubmenuOPen,
        openSubMenu,
        closeSubMenu,
        location,
        pages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
