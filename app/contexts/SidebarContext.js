'use client';

import { SideBar } from '../components';

// import { useState, createContext } from 'react';

const { useState } = require('react');
const { createContext } = require('react');

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);
  return (
    <SidebarContext.Provider
      value={{
        openSidebar,
        closeSidebar,
      }}
    >
      {sidebar && <SideBar />}
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, SidebarContext };
