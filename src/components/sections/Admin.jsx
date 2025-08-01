import React, { useState } from 'react';
import techcon from '../../assets/techcon.png';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const latestEvent = {
  title: "Annual Tech Conference 2024",
  date: "June 15, 2024",
  description: "Join industry leaders and tech enthusiasts for a day of insightful talks, networking, and innovation showcases.",
  imageUrl: techcon
};

const barData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 200 },
  { name: 'May', users: 278 },
  { name: 'Jun', users: 189 },
];

const pieData = [
  { name: 'Positive', value: 85 },
  { name: 'Neutral', value: 10 },
  { name: 'Negative', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

export const Admin = () => {
  const [showCancelEventsModal, setShowCancelEventsModal] = useState(false);
  const [cancelEvents, setCancelEvents] = useState([
    {
      id: 1,
      title: "Summer Music Festival",
      date: "July 10, 2024",
      description: "Requested cancellation due to weather conditions."
    },
    {
      id: 2,
      title: "Art & Design Expo",
      date: "August 5, 2024",
      description: "Requested cancellation due to venue issues."
    }
  ]);

  const openCancelEventsModal = () => {
    setShowCancelEventsModal(true);
  };

  const closeCancelEventsModal = () => {
    setShowCancelEventsModal(false);
  };

  const handleApprove = (id) => {
    setCancelEvents(prev => prev.filter(event => event.id !== id));
  };

  const handleReject = (id) => {
    setCancelEvents(prev => prev.filter(event => event.id !== id));
  };

  return (
    <section className="min-h-screen bg-white/95 p-8 flex pt-20">
      <aside className="w-64 bg-gray-100 rounded-lg shadow-md p-6 mr-8 flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Admin Menu</h2>
        <button className="text-left px-4 py-2 rounded hover:bg-gray-300 transition text-gray-900">View Accounts</button>
        <button className="text-left px-4 py-2 rounded hover:bg-gray-300 transition text-gray-900">View Attendance</button>
        <button
          className="text-left px-4 py-2 rounded hover:bg-gray-300 transition text-gray-900"
          onClick={openCancelEventsModal}
        >
          Cancel Events
        </button>
      </aside>
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-black">Latest Event</h2>
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden mb-12">
            <tbody>
              <tr>
                <td className="w-1/3 border-r border-gray-300 p-0">
                  <img
                    src={latestEvent.imageUrl}
                    alt={latestEvent.title}
                    className="w-full h-full object-cover"
                    style={{ minHeight: '200px' }}
                  />
                </td>
                <td className="p-6 align-top">
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">{latestEvent.title}</h3>
                  <p className="text-gray-700 mb-2">{latestEvent.date}</p>
                  <p className="text-gray-800">{latestEvent.description}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6 text-black">Data Analytics Dashboard</h2>
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <tbody>
              <tr>
                <td className="p-6 border-r border-gray-300 align-top">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">User Registrations</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={barData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="users" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </td>
                <td className="p-6 border-r border-gray-300 align-top">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Evaluation Answers</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </td>
                <td className="p-6 align-top">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Event Feedback</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Satisfied', value: 92 },
                          { name: 'Neutral', value: 5 },
                          { name: 'Dissatisfied', value: 3 }
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#82ca9d"
                        dataKey="value"
                        label
                      >
                        <Cell fill="#82ca9d" />
                        <Cell fill="#8884d8" />
                        <Cell fill="#ff6666" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {showCancelEventsModal && (
          <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg w-3/4 max-w-3xl p-6 relative text-gray-900">
              <h2 className="text-2xl font-semibold mb-4">Events Requested to be Cancelled</h2>
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                onClick={closeCancelEventsModal}
                aria-label="Close cancel events modal"
              >
                &times;
              </button>
              <ul className="max-h-96 overflow-y-auto space-y-4">
                {cancelEvents.map(event => (
                  <li key={event.id} className="border border-gray-300 rounded p-4">
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{event.title}</h3>
                    <p className="text-gray-700 mb-1">{event.date}</p>
                    <p className="text-gray-800">{event.description}</p>
                    <div className="flex space-x-4 mt-2">
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                        onClick={() => handleApprove(event.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                        onClick={() => handleReject(event.id)}
                      >
                        Reject
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};
