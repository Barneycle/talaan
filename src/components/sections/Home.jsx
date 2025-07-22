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
 
  imageUrl: techcon
};

export const Home = () => {
  return (
    <section className="min-h-screen bg-white/95 p-0 flex flex-col items-center">
      <div className="w-full max-w-full rounded-lg overflow-hidden" style={{ height: '35vh' }}>
        <img
          src={latestEvent.imageUrl}
          alt={latestEvent.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-8xl font-bold text-blue-900">{latestEvent.title}</h3>
      <div className="w-full max-w-6xl px-8 py-6 space-y-6">
        <div className="flex space-x-24">
          <div>
            <h4 className="text-2xl font-semibold text-blue-900 mb-2">Date:</h4>
            <p className="text-gray-700 text-xl">{latestEvent.date}</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-blue-900 mb-2">Time:</h4>
            <p className="text-gray-700 text-xl">{latestEvent.time}</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-blue-900 mb-2">Venue:</h4>
            <p className="text-gray-700 text-xl">{latestEvent.venue}</p>
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-blue-900 mb-2">Rationale:</h4>
          <p className="text-gray-700 text-lg">{latestEvent.rationale}</p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-blue-900 mb-2">Guest Speaker/s:</h4>
          <ul className="list-disc list-inside text-gray-800">
            {latestEvent.guestSpeakers.map((speaker, index) => (
              <li key={index}>{speaker}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-blue-900 mb-2">Sponsor/s:</h4>
          <ul className="list-disc list-inside text-gray-800">
            {latestEvent.sponsors.map((sponsor, index) => (
              <li key={index}>{sponsor}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
