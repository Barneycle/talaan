import React, { useState } from 'react';
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

export const Participants = () => {
  const [acceptedEvents, setAcceptedEvents] = useState([]);
  const [declinedEvents, setDeclinedEvents] = useState([]);

  const handleAcceptEvent = (event) => {
    if (!acceptedEvents.find(e => e.title === event.title)) {
      setAcceptedEvents(prev => [...prev, event]);
      setDeclinedEvents(prev => prev.filter(e => e.title !== event.title));
      alert(`You have accepted the event "${event.title}".`);
    }
  };

  const handleDeclineEvent = (event) => {
    if (!declinedEvents.find(e => e.title === event.title)) {
      setDeclinedEvents(prev => [...prev, event]);
      setAcceptedEvents(prev => prev.filter(e => e.title !== event.title));
      alert(`You have declined the event "${event.title}".`);
    }
  };

  const isAccepted = (event) => acceptedEvents.some(e => e.title === event.title);
  const isDeclined = (event) => declinedEvents.some(e => e.title === event.title);

  return (
    <section className="min-h-screen bg-white/95 p-8 flex flex-col items-center pt-20">
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
            <div className="flex space-x-4 mt-4">
              {!isAccepted(latestEvent) && !isDeclined(latestEvent) ? (
                <>
                  <button
                    onClick={() => handleAcceptEvent(latestEvent)}
                    disabled={isAccepted(latestEvent)}
                    className={`px-4 py-2 rounded text-white ${isAccepted(latestEvent) ? 'bg-green-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDeclineEvent(latestEvent)}
                    disabled={isDeclined(latestEvent)}
                    className={`px-4 py-2 rounded text-white ${isDeclined(latestEvent) ? 'bg-red-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
                  >
                    Decline
                  </button>
                </>
              ) : isAccepted(latestEvent) ? (
                <>
                  <button
                    onClick={() => alert('Answer Survey clicked')}
                    className="px-4 py-2 rounded bg-blue-900 text-white hover:bg-blue-800"
                  >
                    Answer Survey
                  </button>
                  <button
                    onClick={() => alert('Generate Certificate clicked')}
                    className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700"
                  >
                    Generate Certificate
                  </button>
                </>
              ) : (
                <input
                  type="text"
                  value="Declined"
                  readOnly
                  className="w-28 px-5 py-2 rounded border border-red-600 text-red-600 bg-red-100 cursor-default text-center"
                  tabIndex={-1}
                  onClick={e => e.preventDefault()}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-black">Upcoming Events</h2>
        <ul className="space-y-6">
          {upcomingEvents.map(event => (
            <li key={event.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-bold mb-1 text-blue-900">{event.title}</h3>
                <p className="text-gray-700 mb-2">{event.date}</p>
                <p className="text-gray-800">{event.description}</p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                {!isAccepted(event) && !isDeclined(event) ? (
                  <>
                    <button
                      onClick={() => handleAcceptEvent(event)}
                      disabled={isAccepted(event)}
                      className={`px-4 py-2 rounded text-white ${isAccepted(event) ? 'bg-green-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDeclineEvent(event)}
                      disabled={isDeclined(event)}
                      className={`px-4 py-2 rounded text-white ${isDeclined(event) ? 'bg-red-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
                    >
                      Decline
                    </button>
                  </>
                ) : isAccepted(event) ? (
                  <input
                    type="text"
                    value="Accepted"
                    readOnly
                    className="w-28 px-5 py-2 rounded border border-green-600 text-green-600 bg-green-100 cursor-default text-center"
                    tabIndex={-1}
                    onClick={e => e.preventDefault()}
                  />
              ) : (
                <input
                  type="text"
                  value="Declined"
                  readOnly
                  className="w-28 px-5 py-2 rounded border border-red-600 text-red-600 bg-red-100 cursor-default"
                  tabIndex={-1}
                />
              )}
            </div>
          </li>
          ))}
        </ul>
      </div>

      {acceptedEvents.length > 0 && (
        <div className="w-full max-w-4xl mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-green-900">Accepted Events</h2>
          <ul className="space-y-4">
            {acceptedEvents.map(event => (
              <li key={event.title} className="bg-green-100 rounded-lg shadow-md p-4">
                <h3 className="text-lg font-bold text-green-900">{event.title}</h3>
                <p className="text-green-800">{event.date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {declinedEvents.length > 0 && (
        <div className="w-full max-w-4xl mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-red-900">Declined Events</h2>
          <ul className="space-y-4">
            {declinedEvents.map(event => (
              <li key={event.title} className="bg-red-100 rounded-lg shadow-md p-4">
                <h3 className="text-lg font-bold text-red-900">{event.title}</h3>
                <p className="text-red-800">{event.date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
