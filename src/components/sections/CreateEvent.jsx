import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';

const FileDropzone = ({ label, name, multiple = false, accept, onFileChange }) => {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileNames, setFileNames] = useState([]);

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    setFileNames(fileArray.map(f => f.name));
    onFileChange({ target: { name, files } });
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold text-black mb-2">{label}</label>
      <div
        className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer p-6 transition-colors duration-300 ${
          dragActive ? 'border-blue-600 bg-blue-50' : 'border-blue-400 bg-white'
        }`}
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          name={name}
          multiple={multiple}
          accept={accept}
          ref={fileInputRef}
          className="hidden"
          onChange={onFileChange}
        />
        <svg
          className="w-12 h-12 mb-3 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
        </svg>
        <p className="text-blue-600 font-medium">
          Drag & drop files here or click to select
        </p>
        {fileNames.length > 0 && (
          <ul className="mt-2 text-sm text-blue-700">
            {fileNames.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bannerFile: null,
    title: '',
    rationale: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    sponsors: [],
    guestSpeakers: [],
    eventKitsFile: null,
    eventProgrammeFile: null,
    sponsorImages: [],
    speakerImages: []
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
    const { name, files } = e.target;
    if (files && files.length > 0) {
      if (name === 'sponsorImages' || name === 'speakerImages') {
        setFormData(prev => ({
          ...prev,
          [name]: Array.from(files)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: files[0]
        }));
      }
    }
  };

  const handleArrayChange = (e, arrayName) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      [arrayName]: value.split(',').map(item => item.trim()).filter(item => item)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log('Event creation form submitted:', formData);
      navigate('/organizer');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-white/95 p-0 flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 sm:px-8">
          <div className="mt-12 space-y-6 w-full">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6 relative">
              {/* Arrow icon in top left corner */}
              <div className="absolute top-4 left-4">
                <svg 
                  className="w-10 h-10 text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  onClick={() => navigate('/organizer')}
                  aria-label="Back to organizer"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            
            {/* Banner Upload */}
            <div className="mt-8">
              <FileDropzone
                label="Event Banner"
                name="bannerFile"
                accept="image/*"
                onFileChange={handleFileChange}
              />
            </div>

            {/* Event Title */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-black">Event Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
                placeholder="Enter event title"
                required
              />
            </div>

            {/* Rationale */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-black">Rationale *</label>
              <textarea
                name="rationale"
                value={formData.rationale}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
                placeholder="Describe your event"
                required
              />
            </div>

          {/* Date and Time Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-black">Start Date *</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-black">End Date *</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-black">Start Time *</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-black">End Time *</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
                required
              />
            </div>
          </div>

          {/* Sponsors */}
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-black">Sponsors</label>
            <input
              type="text"
              name="sponsors"
              value={formData.sponsors.join(', ')}
              onChange={(e) => handleArrayChange(e, 'sponsors')}
              placeholder="Sponsor1, Sponsor2, Sponsor3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
            />
          </div>

          {/* Sponsor Images Upload */}
          <FileDropzone
            label="Sponsor Images"
            name="sponsorImages"
            multiple
            accept="image/*"
            onFileChange={handleFileChange}
          />

          {/* Guest Speakers */}
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-black">Guest Speakers</label>
            <input
              type="text"
              name="guestSpeakers"
              value={formData.guestSpeakers.join(', ')}
              onChange={(e) => handleArrayChange(e, 'guestSpeakers')}
              placeholder="Speaker1, Speaker2, Speaker3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
            />
          </div>

          {/* Guest Speaker Images Upload */}
          <FileDropzone
            label="Guest Speaker Images"
            name="speakerImages"
            multiple
            accept="image/*"
            onFileChange={handleFileChange}
          />

          {/* Event Kits Upload */}
          <FileDropzone
            label="Event Kits"
            name="eventKitsFile"
            accept="*/*"
            onFileChange={handleFileChange}
          />

          {/* Event Programme Upload */}
          <FileDropzone
            label="Event Programme"
            name="eventProgrammeFile"
            accept=".pdf,.doc,.docx"
            onFileChange={handleFileChange}
          />

          {error && <div className="text-red-500 mt-4">{error}</div>}
          
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 font-semibold"
              onClick={() => navigate('/organizer/create-survey')}
            >
              {loading ? 'Next...' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</>
  );
};
