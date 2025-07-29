import React, { useState } from 'react';
import techcon from '../../assets/techcon.png';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const latestEvent = {
  title: "Annual Tech Conference 2024",
  date: "June 15, 2024",
  description: "Join industry leaders and tech enthusiasts for a day of insightful talks, networking, and innovation showcases.",
  imageUrl: techcon
};

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
  return (
    <section className="min-h-screen bg-white/95 p-8 flex pt-20 justify-center">
      <div className="w-full max-w-4xl">
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

        <h2 className="text-3xl font-semibold mb-6 mt-12 text-black">Data Analytics Dashboard</h2>
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
    </section>
  );
};
