import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './NavBar';
import SideBar from './SideBar';
import Dashboard from '../Pages/Dashboard';
import Hive from '../Pages/Hives';
import Box from './Box';


// import HomePage from './components/HomePage';  // Import the Dashboard component

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('');

  return (
    <div className="flex flex-col h-screen bg-gray-100">
    <Navbar onButtonClick={() => setIsSidebarOpen(!isSidebarOpen)} />
    <div className="flex flex-1">
      {
        isSidebarOpen && 
        <SideBar activeTab={activeTab} 
                onTabClick={(tab) => 
                setActiveTab(tab)} 
                isOpen={false} />
              }

      <div className="flex-1 p-4">
        {activeTab === 'Dashboard' && <Dashboard />}  
        
        {activeTab === 'Hives' && 
        <DndProvider backend={HTML5Backend}>
          <Box type="BOX"/>
        <Hive />
        </DndProvider>
        } 
        
        {activeTab === 'Apiaries' && <></>}
        {activeTab === 'Logout' && <></>}  
      </div>
    </div>
  </div>
  );
};

export default Layout;
