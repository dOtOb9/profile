"use client";

import { useState } from 'react';

import SearchBox from './SearchBox';
import SearchPageList from './SearchPageList';

export default function SearchField(  category: string = '') {
  const [query, setQuery] = useState('');

  return (
    <div className="flex items-center justify-center w-full p-4">
      <SearchBox setQuery={setQuery} />
      <SearchPageList query={query} category={category} />
    </div>
  );
}