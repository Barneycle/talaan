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

export const Participants = () => {
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
              // Handle the captured image file if needed
              const file = e.target.files[0];
              if (file) {
                // Process the file or trigger further actions
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
  );
};
