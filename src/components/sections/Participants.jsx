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

export const Participants = () => {
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
      <div className="w-full max-w-6xl px-8 py-6">
        <p className="text-gray-700 mb-2 text-xl">Date: {latestEvent.date}</p>
        <p className="text-gray-700 mb-2 text-xl">Time: {latestEvent.time}</p>
        <p className="text-gray-700 mb-2 text-xl">Venue: {latestEvent.venue}</p>
        <div className="mb-4">
          <h4 className="text-2xl font-semibold text-blue-900 mb-2">Guest Speaker/s:</h4>
          <ul className="list-disc list-inside text-gray-800">
            {latestEvent.guestSpeakers.map((speaker, index) => (
              <li key={index}>{speaker}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-2xl font-semibold text-blue-900 mb-2">Sponsor/s:</h4>
          <ul className="list-disc list-inside text-gray-800">
            {latestEvent.sponsors.map((sponsor, index) => (
              <li key={index}>{sponsor}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-800 text-lg">{latestEvent.rationale}</p>
      </div>
    </section>
  );
};
