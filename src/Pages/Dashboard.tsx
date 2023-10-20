import React from 'react';

const Dashboard = () => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Welcome Beekeeper</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="p-4 bg-white rounded shadow-lg">
            <h2 className="text-lg font-bold mb-2">Hive Population</h2>
            <p>300 Bees</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Explore</button>
          </div>
          <div className="p-4 bg-white rounded shadow-lg">
            <h2 className="text-lg font-bold mb-2">Apiary Location</h2>
            <p>Gauteng Province</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Explore</button>
          </div>
          {/* Additional card can be added here */}
        </div>
        <div className="text-gray-700">
          {new Date().toLocaleDateString()}
        </div>
      </div>
    );
  };
  
  export default Dashboard;