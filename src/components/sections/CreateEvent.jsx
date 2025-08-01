import React, { useState, useEffect } from 'react';

export const CreateEvent = () => {
  const [formData, setFormData] = useState({
    bannerFile: null,
    title: '',
    rationale: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    venue: '',
    sponsors: '',
    guestSpeakers: '',
    programmeFile: null,
    materialsFile: null,
  });

  const [bannerPreview, setBannerPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!formData.bannerFile) {
      setBannerPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(formData.bannerFile);
    setBannerPreview(objectUrl);

    // Free memory when component unmounts or bannerFile changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [formData.bannerFile]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  /*
  const handleSaveDraft = (e) => {
    e.preventDefault();
    // Implement draft saving logic here
    setIsDraftSaved(true);
  };

  const handlePublish = (e) => {
    e.preventDefault();
    // Implement publish logic here
    setSubmitted(true);
  };
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10 text-black">
        <h2 className="text-2xl font-bold mb-4">Event Created Successfully!</h2>
        <p>Your event has been created and saved.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex justify-center items-start py-10 text-black">
      <div className="max-w-4xl w-full p-6 bg-white rounded shadow text-black border border-gray-300">
        <form onSubmit={handleSubmit} className="space-y-6">
        {bannerPreview && (
          <div className="mb-4">
            <img src={bannerPreview} alt="Banner Preview" className="max-h-48 w-full object-contain rounded" />
          </div>
        )}
        <div>
          <label htmlFor="bannerFile" className="block font-semibold mb-1">Event Banner (Image)</label>
          <input
            type="file"
            id="bannerFile"
            name="bannerFile"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-black"
          />
        </div>
        <div>
          <label htmlFor="title" className="block font-semibold mb-1">Event Title <span className="text-red-600">*</span></label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        <div>
          <label htmlFor="rationale" className="block font-semibold mb-1">Rationale</label>
          <textarea
            id="rationale"
            name="rationale"
            rows="3"
            value={formData.rationale}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>


        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="startDate" className="block font-semibold mb-1">Start Date <span className="text-red-600">*</span></label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              required
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="endDate" className="block font-semibold mb-1">End Date <span className="text-red-600">*</span></label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              required
              value={formData.endDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="startTime" className="block font-semibold mb-1">Start Time <span className="text-red-600">*</span></label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              required
              value={formData.startTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="endTime" className="block font-semibold mb-1">End Time <span className="text-red-600">*</span></label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              required
              value={formData.endTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
        </div>

        <div>
          <label htmlFor="venue" className="block font-semibold mb-1">Venue <span className="text-red-600">*</span></label>
          <input
            type="text"
            id="venue"
            name="venue"
            required
            value={formData.venue}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        <div>
          <label htmlFor="guestSpeakers" className="block font-semibold mb-1">Guest Speakers (comma separated)</label>
          <input
            type="text"
            id="guestSpeakers"
            name="guestSpeakers"
            value={formData.guestSpeakers}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        <div>
          <label htmlFor="sponsors" className="block font-semibold mb-1">Sponsors (comma separated)</label>
          <input
            type="text"
            id="sponsors"
            name="sponsors"
            value={formData.sponsors}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>


        <div>
          <label htmlFor="programmeFile" className="block font-semibold mb-1">Event Programme (PDF)</label>
          <input
            type="file"
            id="programmeFile"
            name="programmeFile"
            accept="application/pdf"
            onChange={handleChange}
            className="w-full text-black"
          />
        </div>

        <div>
          <label htmlFor="materialsFile" className="block font-semibold mb-1">Event Materials (PDF)</label>
          <input
            type="file"
            id="materialsFile"
            name="materialsFile"
            accept="application/pdf"
            onChange={handleChange}
            className="w-full text-black"
          />
        </div>

        <button
          type="button"
          className="w-full mt-2 bg-blue-900 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
          onClick={() => alert('Create Survey clicked')}
        >
          Create Survey
        </button>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Publish Event
          </button>
          {/*
          {isDraftSaved ? (
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
              onClick={handlePublish}
            >
              Publish Event
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
              onClick={handleSaveDraft}
            >
              Create Event
            </button>
          )}
          */}
        <button
          type="button"
          className="w-full mt-2 bg-blue-900 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
          onClick={() => alert('Generate QR Code clicked')}
        >
          Generate QR Code
        </button>
      </form>
      </div>
    </div>
  );
};
