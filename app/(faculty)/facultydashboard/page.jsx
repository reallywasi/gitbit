

import React from 'react';
import { FiLogOut, FiHome, FiFileText, FiPlusCircle, FiDatabase, FiSettings } from 'react-icons/fi';

const FacultyDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-red-700">Faculty Dashboard</div>
        <button className="flex items-center text-gray-600 hover:text-red-600">
          <FiLogOut className="mr-2" /> Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="bg-white w-64 p-6 shadow-md">
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-600">
                <FiHome className="mr-2" /> Dashboard Home
              </a>
            </li>
            <li>
              <a href="/viewstatus" className="flex items-center text-gray-700 hover:text-red-600">
                <FiFileText className="mr-2" /> View Status
              </a>
            </li>
            <li>
              <a href="/ObservationDetails" className="flex items-center text-gray-700 hover:text-red-600">
                <FiPlusCircle className="mr-2" /> Create Observation
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-600">
                <FiDatabase className="mr-2" /> Questions Bank
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-red-600">
                <FiSettings className="mr-2" /> Settings
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Quick Stats Cards */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
              <div className="text-xl font-semibold text-gray-700">Total Students</div>
              <div className="ml-auto text-3xl font-bold text-blue-600">120</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
              <div className="text-xl font-semibold text-gray-700">Observations Created</div>
              <div className="ml-auto text-3xl font-bold text-green-600">8</div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
              <div className="text-xl font-semibold text-gray-700">Average Marks</div>
              <div className="ml-auto text-3xl font-bold text-red-600">78%</div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-gray-700">
                <div>AIML B3 DAA Linkedlist </div>
                <div className="text-sm text-gray-500">8 hours ago</div>
              </li>
              <li className="flex items-center justify-between text-gray-700">
                <div>DAA Quick Sort Codes </div>
                <div className="text-sm text-gray-500">1 day ago</div>
              </li>
              <li className="flex items-center justify-between text-gray-700">
                <div> DAA test </div>
                <div className="text-sm text-gray-500">3 days ago</div>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
            <div className="flex space-x-4">
              <button className="bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                Create New Test
              </button>
              <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Add Question
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                View Results
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 shadow-md text-center text-gray-500">
        © 2024 Faculty Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default FacultyDashboard;










