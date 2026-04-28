"use client"
import { useState } from 'react';

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "tealtrails2026") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-charcoal-900 absolute inset-0 z-50">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-teal-800">Admin Login</h1>
            <p className="text-gray-500 text-sm mt-2">Restricted Access</p>
          </div>
          <div>
             <input 
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Enter admin password"
               className="w-full px-4 py-3 border rounded-md focus:ring-teal-500 focus:border-teal-500"
             />
          </div>
          <button type="submit" className="w-full bg-teal-600 text-white font-bold py-3 rounded-md hover:bg-teal-700">
            Login
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8 absolute inset-0 z-50">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0">
          <h1 className="text-2xl font-bold text-charcoal-900">Teal Trails Admin Dashboard</h1>
          <button onClick={() => setIsAuthenticated(false)} className="text-rose-600 hover:text-rose-700 font-medium">Logout</button>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
           <div className="space-y-2 border-r border-gray-200 pr-4">
             {["Homepage", "About", "Campaigns", "MythvsFact", "Gallery", "Settings"].map((page) => (
                <button key={page} className="w-full text-left px-4 py-2 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-md font-medium">
                  {page}
                </button>
             ))}
           </div>
           <div className="md:col-span-3 space-y-6">
             <div className="bg-blue-50 p-4 border border-blue-100 rounded-md text-blue-800">
               <p>Select a page from the sidebar to edit its content.</p>
               <p className="text-sm mt-2 font-medium">Coming soon: Supabase connection for persistent dynamic content.</p>
             </div>
             
             <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800">Homepage Hero</h2>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600">Headline</label>
                  <input type="text" defaultValue="Healing through awareness, empowering through action." className="w-full border p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600">Subheadline Text</label>
                  <textarea rows={3} defaultValue="Teal Trails is dedicated to enhancing access, awareness, and understanding of healthcare in India, with a strong emphasis on women's health and stigmatized diseases like cervical cancer." className="w-full border p-2 rounded" />
                </div>
                <button className="bg-charcoal-800 text-white px-6 py-2 rounded font-medium hover:bg-charcoal-900 shadow">Save Changes</button>
             </div>
           </div>
        </div>
      </div>
    </main>
  );
}
