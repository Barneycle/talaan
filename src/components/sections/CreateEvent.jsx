import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bannerFile: null,
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    capacity: '',
    price: '',
    category: '',
    tags: '',
    bannerUrl: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        bannerFile: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Form submission logic here
      console.log('Form submitted:', formData);
      navigate('/organizer');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-white/95 p-8 flex pt-20 justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4 text-black">Create New Event</h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Venue</label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Banner</label>
              <input
                type="file"
                name="bannerFile"
                onChange={handleFileChange}
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {error && <div className="text-red-500 mt-4">{error}</div>}
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-200 disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Event'}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="min-h-screen bg-white/95 p-0 flex flex-col items-center">
        <div className="w-full max-w-full overflow-hidden h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh]">
          <img
            src="/path/to/qr-code-image.png"
            alt="QR Code"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-6 space-y-6 max-w-6xl px-4 sm:px-8 w-full">
          <div className="border rounded-lg shadow-md p-6 bg-white flex flex-col items-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">Scan QR Code:</h4>
            <button
              type="button"
              className="text-blue-600 hover:underline text-base sm:text-lg font-semibold"
              onClick={() => {
                const input = document.getElementById('cameraInput');
                if (input) {
                  input.click();
                }
              }}
            >
              Open Camera to Scan QR Code
            </button>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              id="cameraInput"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  console.log('Captured image file:', file);
                }
              }}
            />
          </div>
          <div className="border rounded-lg shadow-md p-6 bg-white">
            <a href="/path/to/answer-survey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base sm:text-lg font-semibold block">
              Answer Survey
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
