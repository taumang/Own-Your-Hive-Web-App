import React from 'react';

interface SidebarProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
  isOpen: boolean;
}

const SideBar = ({ activeTab, onTabClick, isOpen }: SidebarProps) => {
  return (
    <div className={`transform transition-transform duration-200 ease-in-out 
                    ${isOpen ? 'translate-x-0' : '-translate-x-full' } lg:translate-x-0 
                    lg:w-1/4 md:w-1/2 sm:w-full p-4 bg-gray-800 text-white h-screen`}>
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        {['Dashboard', 'Hives', 'Apiaries', 'Logout'].map((tab) => (
          <li
            key={tab}
            className={`mb-2 p-2 ${activeTab === tab ? 'bg-gray-700' : ''}`}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;