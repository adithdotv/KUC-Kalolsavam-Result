import React, { useState, useEffect } from "react";
import "./Card.css";
import { ref, get } from "firebase/database";
import { db } from "../firebaseConfig"; // Import Firebase config

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [results, setResults] = useState([]); // All fetched results
  const [filteredResults, setFilteredResults] = useState([]); // Filtered results

  // Fetch results from Firebase on mount
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const resultsRef = ref(db, "results/");
        const snapshot = await get(resultsRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const resultsArray = Object.keys(data).map((key) => data[key]);
          setResults(resultsArray);
          setFilteredResults(resultsArray);
        }
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, []);

  // Filter results based on item name
  useEffect(() => {
    const filtered = results.filter((result) =>
      result.itemName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResults(filtered);
  }, [searchQuery, results]);

  return (
    <>
      <div className="home-container flex flex-col h-screen bg-cover bg-center">
        {/* Search Input */}
        <div className="fixed top-[110px] left-0 right-0 z-50 p-4 bg-transparent">
          <div className="flex justify-center space-x-4">
            <input
              type="text"
              placeholder="Search results by item name..(in Malayalam)"
              className="search-input px-4 py-2 rounded-lg border border-gray-300 w-1/2 
                  bg-transparant bg-opacity-50 backdrop-blur-md text-black placeholder-black-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Scrollable Card Section */}
        <div className="flex-grow overflow-y-auto mt-[150px] px-4">
          <div className="container">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                  <div key={index} className="card">
                    <h2>{result.itemName}</h2>
                    <p>Participant Name: {result.participantName.toUpperCase()}</p>
                    <p>Team: {result.teamName}</p>
                    <p>Grade: {result.grade}</p>
                    <p>Score: {result.points}</p>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-3">No results found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
