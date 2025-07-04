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

  // Survey creation modal state
  const [showCreateSurveyForm, setShowCreateSurveyForm] = useState(false);
  const [surveyQuestions, setSurveyQuestions] = useState([
    { id: 1, question: '', type: 'text', options: [''] }
  ]);

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
              <li
                key="latest-event"
                className="p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  closeEventsList();
                  openEventDetails(latestEvent, true);
                }}
              >
                <h3 className="font-semibold text-gray-900">{latestEvent.title}</h3>
                <p className="text-gray-700">{latestEvent.date}</p>
              </li>
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
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                onClick={() => setShowCreateSurveyForm(true)}
              >
                Create Survey
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

      {/* Survey Creation Modal */}
      {showCreateSurveyForm && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-60">
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg w-3/4 max-w-4xl p-6 relative text-gray-900 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Create Survey for {selectedEvent?.title}</h2>
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setShowCreateSurveyForm(false)}
              aria-label="Close survey creation"
            >
              &times;
            </button>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Survey submitted: ' + JSON.stringify(surveyQuestions, null, 2));
              setShowCreateSurveyForm(false);
              setSurveyQuestions([{ id: 1, question: '', type: 'text', options: [''] }]);
            }}>
              {surveyQuestions.map((q, idx) => (
                <div key={q.id} className="mb-6 border border-gray-300 rounded p-4">
                  <label className="block font-semibold mb-2">Question {idx + 1}</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                    placeholder="Enter question text"
                    value={q.question}
                    onChange={(e) => {
                      const newQuestions = [...surveyQuestions];
                      newQuestions[idx].question = e.target.value;
                      setSurveyQuestions(newQuestions);
                    }}
                    required
                  />
                  <label className="block font-semibold mb-1">Question Type</label>
                  <select
                    className="mb-2 border border-gray-300 rounded px-3 py-2"
                    value={q.type}
                    onChange={(e) => {
                      const newQuestions = [...surveyQuestions];
                      newQuestions[idx].type = e.target.value;
                      if (e.target.value === 'multiple-choice' || e.target.value === 'checkboxes' || e.target.value === 'dropdown') {
                        if (!newQuestions[idx].options) {
                          newQuestions[idx].options = [''];
                        }
                      } else if (e.target.value === 'multiple-choice-grid' || e.target.value === 'checkbox-grid') {
                        if (!newQuestions[idx].rows) {
                          newQuestions[idx].rows = [''];
                        }
                        if (!newQuestions[idx].columns) {
                          newQuestions[idx].columns = [''];
                        }
                        newQuestions[idx].options = [];
                      } else {
                        newQuestions[idx].options = [];
                      }
                      setSurveyQuestions(newQuestions);
                    }}
                  >
                    <option value="short-answer">Short Answer</option>
                    <option value="paragraph">Paragraph</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="checkboxes">Checkboxes</option>
                    <option value="dropdown">Dropdown</option>
                    <option value="file-upload">File Upload</option>
                    <option value="linear-scale">Linear Scale</option>
                    <option value="star-rating">Star Rating</option>
                    <option value="multiple-choice-grid">Multiple Choice Grid</option>
                    <option value="checkbox-grid">Checkbox Grid</option>
                    <option value="date">Date</option>
                    <option value="time">Time</option>
                  </select>
                  {(q.type === 'multiple-choice' || q.type === 'checkboxes' || q.type === 'dropdown') && (
                    <div>
                      <label className="block font-semibold mb-1">Options</label>
                      {q.options.map((opt, optIdx) => (
                        <div key={optIdx} className="flex items-center mb-1">
                          <input
                            type="text"
                            className="flex-grow border border-gray-300 rounded px-3 py-1"
                            placeholder={`Option ${optIdx + 1}`}
                            value={opt}
                            onChange={(e) => {
                              const newQuestions = [...surveyQuestions];
                              newQuestions[idx].options[optIdx] = e.target.value;
                              setSurveyQuestions(newQuestions);
                            }}
                            required
                          />
                          <button
                            type="button"
                            className="ml-2 text-red-600 hover:text-red-800"
                            onClick={() => {
                              const newQuestions = [...surveyQuestions];
                              newQuestions[idx].options.splice(optIdx, 1);
                              if (newQuestions[idx].options.length === 0) {
                                newQuestions[idx].options.push('');
                              }
                              setSurveyQuestions(newQuestions);
                            }}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="mt-1 text-blue-600 hover:underline"
                        onClick={() => {
                          const newQuestions = [...surveyQuestions];
                          newQuestions[idx].options.push('');
                          setSurveyQuestions(newQuestions);
                        }}
                      >
                        + Add Option
                      </button>
                    </div>
                  )}
                  {q.type === 'short-answer' && (
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="Short answer text"
                      disabled
                    />
                  )}
                  {q.type === 'paragraph' && (
                    <textarea
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="Long answer text"
                      disabled
                    />
                  )}
                  {q.type === 'file-upload' && (
                    <input
                      type="file"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      disabled
                    />
                  )}
                  {q.type === 'linear-scale' && (
                    <div className="flex space-x-2">
                      <select
                        className="border border-gray-300 rounded px-3 py-2"
                        value={q.linearScaleMin || '0'}
                        onChange={(e) => {
                          const newQuestions = [...surveyQuestions];
                          newQuestions[idx].linearScaleMin = e.target.value;
                          setSurveyQuestions(newQuestions);
                        }}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                      </select>
                      <select
                        className="border border-gray-300 rounded px-3 py-2"
                        value={q.linearScaleMax || '5'}
                        onChange={(e) => {
                          const newQuestions = [...surveyQuestions];
                          newQuestions[idx].linearScaleMax = e.target.value;
                          setSurveyQuestions(newQuestions);
                        }}
                      >
                        {[...Array(9)].map((_, i) => {
                          const val = i + 2;
                          return <option key={val} value={val}>{val}</option>;
                        })}
                      </select>
                    </div>
                  )}
                  {q.type === 'star-rating' && (
                    <div>
                      <select
                        className="mb-2 border border-gray-300 rounded px-3 py-2"
                        value={q.starRatingCount || 5}
                        onChange={(e) => {
                          const newQuestions = [...surveyQuestions];
                          newQuestions[idx].starRatingCount = parseInt(e.target.value, 10);
                          setSurveyQuestions(newQuestions);
                        }}
                      >
                        {[...Array(8)].map((_, i) => {
                          const val = i + 3;
                          return <option key={val} value={val}>{val}</option>;
                        })}
                      </select>
                      <div className="flex space-x-1 justify-center">
                        {[...Array(q.starRatingCount || 5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 flex flex-col items-center text-3xl">
                            <span className="text-black text-sm">{i + 1}</span>
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {q.type === 'date' && (
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      disabled
                    />
                  )}
                  {q.type === 'time' && (
                    <input
                      type="time"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      disabled
                    />
                  )}
                  {/* For multiple-choice-grid and checkbox-grid, a simplified placeholder */}
                  {(q.type === 'multiple-choice-grid' || q.type === 'checkbox-grid') && (
                    <div className="mb-4 flex space-x-8">
                      <div className="flex-1">
                        <label className="block font-semibold mb-1">Rows</label>
                        {q.rows && q.rows.map((row, rowIdx) => (
                          <div key={rowIdx} className="flex items-center mb-1">
                            <input
                              type="text"
                              className="flex-grow border border-gray-300 rounded px-3 py-1"
                              placeholder={`Row ${rowIdx + 1}`}
                              value={row}
                              onChange={(e) => {
                                const newQuestions = [...surveyQuestions];
                                newQuestions[idx].rows[rowIdx] = e.target.value;
                                setSurveyQuestions(newQuestions);
                              }}
                              required
                            />
                            <button
                              type="button"
                              className="ml-2 text-red-600 hover:text-red-800"
                              onClick={() => {
                                const newQuestions = [...surveyQuestions];
                                newQuestions[idx].rows.splice(rowIdx, 1);
                                if (newQuestions[idx].rows.length === 0) {
                                  newQuestions[idx].rows.push('');
                                }
                                setSurveyQuestions(newQuestions);
                              }}
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="mt-1 text-blue-600 hover:underline"
                          onClick={() => {
                            const newQuestions = [...surveyQuestions];
                            if (!newQuestions[idx].rows) newQuestions[idx].rows = [''];
                            newQuestions[idx].rows.push('');
                            setSurveyQuestions(newQuestions);
                          }}
                        >
                          + Add Row
                        </button>
                      </div>
                      <div className="flex-1">
                        <label className="block font-semibold mb-1">Columns</label>
                        {q.columns && q.columns.map((col, colIdx) => (
                          <div key={colIdx} className="flex items-center mb-1">
                            <input
                              type="text"
                              className="flex-grow border border-gray-300 rounded px-3 py-1"
                              placeholder={`Column ${colIdx + 1}`}
                              value={col}
                              onChange={(e) => {
                                const newQuestions = [...surveyQuestions];
                                newQuestions[idx].columns[colIdx] = e.target.value;
                                setSurveyQuestions(newQuestions);
                              }}
                              required
                            />
                            <button
                              type="button"
                              className="ml-2 text-red-600 hover:text-red-800"
                              onClick={() => {
                                const newQuestions = [...surveyQuestions];
                                newQuestions[idx].columns.splice(colIdx, 1);
                                if (newQuestions[idx].columns.length === 0) {
                                  newQuestions[idx].columns.push('');
                                }
                                setSurveyQuestions(newQuestions);
                              }}
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="mt-1 text-blue-600 hover:underline"
                          onClick={() => {
                            const newQuestions = [...surveyQuestions];
                            if (!newQuestions[idx].columns) newQuestions[idx].columns = [''];
                            newQuestions[idx].columns.push('');
                            setSurveyQuestions(newQuestions);
                          }}
                        >
                          + Add Column
                        </button>
                      </div>
                    </div>
                  )}
                  <button
                    type="button"
                    className="mt-3 text-red-600 hover:text-red-800"
                    onClick={() => {
                      const newQuestions = surveyQuestions.filter((_, i) => i !== idx);
                      setSurveyQuestions(newQuestions.length > 0 ? newQuestions : [{ id: 1, question: '', type: 'text', options: [''] }]);
                    }}
                  >
                    Remove Question
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="mb-4 text-blue-600 hover:underline"
                onClick={() => {
                  const newId = surveyQuestions.length > 0 ? surveyQuestions[surveyQuestions.length - 1].id + 1 : 1;
                  setSurveyQuestions([...surveyQuestions, { id: newId, question: '', type: 'text', options: [], rows: [''], columns: [''] }]);
                }}
              >
                + Add Question
              </button>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                  onClick={() => setShowCreateSurveyForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                >
                  Submit Survey
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
