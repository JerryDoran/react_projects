import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const openSubmenu = (text, coords) => {
    const page = sublinks.find((item) => item.page === text);
    setPage(page);
    setLocation(coords);
    setSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        submenuOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Global context hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
