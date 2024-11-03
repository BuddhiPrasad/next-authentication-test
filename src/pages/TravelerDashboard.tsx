import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Compass, LogOut } from 'lucide-react';

const TravelerDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Compass className="w-6 h-6 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold">Traveler Dashboard</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4">Welcome, {user?.name}</span>
              <button
                onClick={logout}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <h2 className="text-2xl font-bold mb-4">Your Travel Dashboard</h2>
            <p>Welcome to your traveler dashboard. This is a protected route.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TravelerDashboard;