import React from 'react';
import techcon from '../../assets/techcon.png';

const latestEvent = {
  title: "Annual Tech Conference 2024",
  date: "June 15, 2024",
  time: "9:00 AM - 5:00 PM",
  venue: "Grand Convention Center, Cityville",
  sponsors: [
    "TechCorp",
    "InnovateX",
    "Future Solutions"
  ],
  guestSpeakers: [
    "Dr. Jane Smith",
    "Mr. John Doe",
    "Prof. Emily Johnson"
  ],
  rationale: "The Annual Tech Conference 2024 aims to foster collaboration and innovation among technology professionals by providing a platform for sharing knowledge, networking, and showcasing the latest advancements in the industry.",
  programmeLink: "/path/to/programme.pdf",
  materialsLink: "/path/to/materials.pdf",
  imageUrl: techcon
};

export const Organizer = () => {
  return (
    <section className="min-h-screen bg-white/95 p-0 flex flex-col items-center">
      <div className="w-full max-w-full overflow-hidden h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh]">
        <img
          src={latestEvent.imageUrl}
          alt={latestEvent.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-900 text-center">{latestEvent.title}</h3>
      <div className="mt-6 space-y-6 max-w-6xl px-4 sm:px-8 w-full">
        <div className="border rounded-lg shadow-md p-6 bg-white">
            <a href={latestEvent.programmeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base sm:text-lg font-semibold block">
              View Event Programme
            </a>
        </div>
        <div className="border rounded-lg shadow-md p-6 bg-white">
            <a href={latestEvent.materialsLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base sm:text-lg font-semibold block">
              View Event Kits
            </a>
        </div>
        <div className="border rounded-lg shadow-md p-6 bg-white flex space-x-24">
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">Date:</h4>
            <p className="text-gray-700 text-base sm:text-xl">{latestEvent.date}</p>
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">Time:</h4>
            <p className="text-gray-700 text-base sm:text-xl">{latestEvent.time}</p>
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">Venue:</h4>
            <p className="text-gray-700 text-base sm:text-xl">{latestEvent.venue}</p>
          </div>
        </div>
        <div className="border rounded-lg shadow-md p-6 bg-white">
          <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">Rationale:</h4>
          <p className="text-gray-700 text-base sm:text-lg">{latestEvent.rationale}</p>
        </div>
        <div className="border rounded-lg shadow-md p-6 bg-white">
          <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">Guest Speaker/s:</h4>
          <ul className="list-disc list-inside text-gray-800">
            {latestEvent.guestSpeakers.map((speaker, index) => (
              <li key={index}>{speaker}</li>
            ))}
          </ul>
        </div>
        <div className="border rounded-lg shadow-md p-6 bg-white">
          <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">Sponsor/s:</h4>
          <ul className="list-disc list-inside text-gray-800">
            {latestEvent.sponsors.map((sponsor, index) => (
              <li key={index}>{sponsor}</li>
            ))}
          </ul>
        </div>
        <div className="border rounded-lg shadow-md p-6 bg-white flex flex-col items-center">
          <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">QR Code:</h4>
          <div className="bg-white border-2 border-gray-300 rounded p-4 mb-4">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/survey" 
              alt="Event QR Code" 
              className="w-48 h-48 mx-auto"
            />
          </div>
          <a 
            href="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://example.com/survey" 
            download="event-qr-code.png"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Download QR Code
          </a>
        </div>
        <div className="border rounded-lg shadow-md p-6 bg-white">
          <a href="/path/to/answer-survey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base sm:text-lg font-semibold block">
            View Survey
          </a>
        </div>
        
      </div>
    </section>
  );
};
