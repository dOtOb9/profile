"use client";

import { useState } from 'react';

export default function SearchBox() {
  const [query, setQuery] = useState('');

  return (
    <div className="flex items-center justify-center w-full p-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}