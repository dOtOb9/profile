"use client";

import { useState } from 'react';

import SearchBox from './SearchBox';

export default function SearchField() {
  const [query, setQuery] = useState('');

  return (
    <div className="flex items-center justify-center w-full p-4">
      <SearchBox setQuery={setQuery} />
    </div>
  );
}