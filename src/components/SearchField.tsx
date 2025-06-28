"use client";

import { useState } from 'react';

import SearchBox from './SearchBox';
import SearchPageList from './SearchPageList';

interface SearchFieldProps {
  category?: string;
}

export default function SearchField(props: SearchFieldProps) {
  const { category = '' } = props;
  const [query, setQuery] = useState('');

  return (
    <div className="flex items-center justify-center w-full p-4">
      <SearchBox setQuery={setQuery} />
      <SearchPageList query={query} category={category} />
    </div>
  );
}