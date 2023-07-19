import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar({
    query,
    setQuery
}: {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div className="relative mb-10 max-w-fit">
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                className="w-full py-2 pr-4 border-gray-300 rounded-lg pl-14 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Search..."
            />
            <div className="absolute text-gray-500 top-1/2 left-3 transform -translate-y-1/2">
                <AiOutlineSearch
                    style={{ width: '2rem', height: '2rem', color: '#99999b' }}
                />
            </div>
        </div>
    )
};
