import React, { useState } from 'react';
import techcon from '../../assets/techcon.png';
import QRCode from 'react-qr-code';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const latestEvent = {
  title: "Annual Tech Conference 2024",
  date: "June 15, 2024",
  description: "Join industry leaders and tech enthusiasts for a day of insightful talks, networking, and innovation showcases.",
  imageUrl: techcon
};

const initialUpcomingEvents = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "July 10, 2024",
    description: "Experience live performances from top artists in an outdoor festival setting."
  },
  {
    id: 2,
    title: "Art & Design Expo",
    date: "August 5, 2024",
    description: "Explore the latest trends in art and design with exhibitions and workshops."
  },
  {
    id: 3,
    title: "Startup Pitch Night",
    date: "September 12, 2024",
    description: "Watch emerging startups pitch their ideas to investors and industry experts."
  }
];

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

export const Organizer = () => {
  const [showEventsList, setShowEventsList] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState(initialUpcomingEvents);
  const [cameFromEventsList, setCameFromEventsList] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  const openEventsList = () => {
    setShowEventsList(true);
    setSelectedEvent(null);
  };

  const closeEventsList = () => {
    setShowEventsList(false);
    setSelectedEvent(null);
  };

  const openEventDetails = (event, fromEventsList = false) => {
    setSelectedEvent(event);
    setCameFromEventsList(fromEventsList);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
    if (cameFromEventsList) {
      setShowEventsList(true);
    }
  };

  const [showCreateEventForm, setShowCreateEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    time: '',
    date: '',
    location: '',
    department: ''
  });

  const handleCreateEvent = () => {
    setShowCreateEventForm(true);
  };

  const handleCreateEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({ ...prev, [name]: value }));
  };


  const handleCreateEventSubmit = (e) => {
    e.preventDefault();
    const eventToAdd = {
      id: upcomingEvents.length + 1,
      title: newEvent.title,
      description: newEvent.description,
      date: newEvent.date + ' ' + newEvent.time,
      location: newEvent.location,
      department: newEvent.department
    };
    setUpcomingEvents(prev => [...prev, eventToAdd]);
    setShowCreateEventForm(false);
    setNewEvent({
      title: '',
      description: '',
      time: '',
      date: '',
      location: '',
      department: ''
    });
  };

  const handleCreateEventCancel = () => {
    setShowCreateEventForm(false);
    setNewEvent({
      title: '',
      description: '',
      time: '',
      date: '',
      location: '',
      department: ''
    });
  };

  const handleUpdateEvent = () => {
    alert('Update Event functionality to be implemented.');
  };

  const handleRequestCancelEvent = () => {
    alert('Request to Cancel Event functionality to be implemented.');
  };

  return (
    <section className="min-h-screen bg-white/95 p-8 flex pt-20">
      <aside className="w-64 bg-gray-100 rounded-lg shadow-md p-6 mr-8 flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Organizer Menu</h2>
        <button
          className="text-left px-4 py-2 rounded hover:bg-gray-300 transition text-gray-900"
          onClick={openEventsList}
        >
          View Events
        </button>
        <button className="text-left px-4 py-2 rounded hover:bg-gray-300 transition text-gray-900">View Attendance</button>
        <button className="text-left px-4 py-2 rounded hover:bg-gray-300 transition text-gray-900">Export Data</button>
      </aside>
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-black">Latest Event</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <img
              src={latestEvent.imageUrl}
              alt={latestEvent.title}
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-blue-900">{latestEvent.title}</h3>
              <p className="text-gray-700 mb-2">{latestEvent.date}</p>
              <p className="text-gray-800">{latestEvent.description}</p>
              <button
                onClick={() => setShowQrCode(prev => !prev)}
                className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition w-max"
              >
                {showQrCode ? 'Hide QR Code' : 'Generate QR Code'}
              </button>
              {showQrCode && (
                <div className="mt-6 flex justify-center">
                  <QRCode value={JSON.stringify(latestEvent)} size={128} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-black">Upcoming Events</h2>
          <ul className="space-y-6">
            {upcomingEvents.map(event => (
              <li
                key={event.id}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  if (!showEventsList) {
                    openEventDetails(event);
                  }
                }}
              >
                <h3 className="text-xl font-bold mb-1 text-blue-900">{event.title}</h3>
                <p className="text-gray-700 mb-2">{event.date}</p>
                <p className="text-gray-800">{event.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6 text-black">Data Analytics Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
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
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
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
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
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
            </div>
          </div>
        </div>
      </main>

      {/* Events List Modal */}
      {showEventsList && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg w-3/4 max-w-3xl p-6 relative">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Events List</h2>
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={closeEventsList}
              aria-label="Close events list"
            >
              &times;
            </button>
            <button
              className="mb-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
              onClick={handleCreateEvent}
            >
              Create Event
            </button>
            {showCreateEventForm && (
              <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-60">
                <div className="bg-white bg-opacity-90 rounded-lg shadow-lg w-3/4 max-w-3xl p-6 relative text-gray-900">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Create Event</h2>
                  <form onSubmit={handleCreateEventSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1" htmlFor="title">Event Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={newEvent.title}
                        onChange={handleCreateEventChange}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1" htmlFor="description">Description</label>
                      <textarea
                        id="description"
                        name="description"
                        value={newEvent.description}
                        onChange={handleCreateEventChange}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1" htmlFor="date">Date</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={newEvent.date}
                          onChange={handleCreateEventChange}
                          required
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1" htmlFor="time">Time</label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={newEvent.time}
                          onChange={handleCreateEventChange}
                          required
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1" htmlFor="location">Location</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={newEvent.location}
                        onChange={handleCreateEventChange}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1" htmlFor="department">Department</label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={newEvent.department}
                        onChange={handleCreateEventChange}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div className="flex justify-end space-x-4">
                      <button
                        type="button"
                        onClick={handleCreateEventCancel}
                        className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded bg-blue-900 text-white hover:bg-blue-800"
                      >
                        Create
                      </button>
                    </div>
              </form>
            </div>
          </div>
          )}
            <ul className="max-h-96 overflow-y-auto space-y-2">
              {upcomingEvents.map(event => (
                <li
                  key={event.id}
                  className="p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    closeEventsList();
                    openEventDetails(event, true);
                  }}
                >
                  <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-gray-700">{event.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg w-3/4 max-w-3xl p-6 relative">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">{selectedEvent.title}</h2>
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={closeEventDetails}
              aria-label="Close event details"
            >
              &times;
            </button>
            <p className="mb-2 text-gray-900"><strong>Date:</strong> {selectedEvent.date}</p>
            <p className="mb-4 text-gray-900">{selectedEvent.description}</p>
            <div className="flex space-x-4">
              <button
                className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                onClick={handleUpdateEvent}
              >
                Update Event
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                onClick={handleRequestCancelEvent}
              >
                Request to Cancel Event
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
