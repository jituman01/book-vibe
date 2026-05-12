import React, { useEffect, useState } from 'react'; 
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ReadPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/booksData.json')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Data load failed", err));
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center my-16">
      <h1 className="font-bold text-2xl text-center">Page Count</h1>
      {/* Recharts responsive korar jonno ResponsiveContainer use kora bhalo */}
      <div style={{ width: '80%', height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="bookName" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="totalPages" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReadPage;