import React from 'react';
import techcon from '../../assets/techcon.png';

const latestEvent = {
  title: "Annual Tech Conference 2024",
  date: "June 15, 2024",
  description: "Join industry leaders and tech enthusiasts for a day of insightful talks, networking, and innovation showcases.",
  imageUrl: techcon
};

const upcomingEvents = [
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

export const Home = () => {
  return (
    <section className="min-h-screen bg-white/95 p-8 flex flex-col items-center pt-20">
      <h1 className="text-5xl font-bold mb-8 text-gray-900">
        Welcome to Talaan<span className="text-blue-900">+</span>
      </h1>

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
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-black">Upcoming Events</h2>
        <ul className="space-y-6">
          {upcomingEvents.map(event => (
            <li key={event.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-1 text-blue-900">{event.title}</h3>
              <p className="text-gray-700 mb-2">{event.date}</p>
              <p className="text-gray-800">{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
