import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

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

export const SurveyAnalytics = () => {
  return (
    <section className="min-h-screen bg-white/95 p-8 flex pt-20 justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-semibold mb-6 text-black">Data Analytics Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">User Registrations</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <a href="/download/survey-data" className="text-blue-600 hover:underline text-base sm:text-lg font-semibold block mt-4">
              Download Data
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Evaluation Answers</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
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
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Event Feedback</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Satisfied', value: 92 },
                    { name: 'Neutral', value: 5 },
                    { name: 'Dissatisfied', value: 3 }
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
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
