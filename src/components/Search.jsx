import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./Card.css";
import { ref, get } from "firebase/database";
import { db } from "../firebaseConfig"; // Import Firebase config

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [selectedItem, setSelectedItem] = useState(null); // Selected item from dropdown
  const [results, setResults] = useState([]); // All results from Firebase
  const [filteredResults, setFilteredResults] = useState([]); // Filtered results
  const [options, setOptions] = useState([]); // Dropdown options
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch items for dropdown
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const dbRef = ref(db, "items/");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const itemsList = Object.keys(data).map((key) => ({
            value: data[key].name, // Store item name
            label: data[key].name, // Display item name
          }));

          setOptions(itemsList);
        } else {
          setOptions([]);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Fetch all results from Firebase
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const resultsRef = ref(db, "results/");
        const snapshot = await get(resultsRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const resultsArray = Object.keys(data).map((key) => data[key]);
          setResults(resultsArray);
          setFilteredResults(resultsArray); // Default view
        }
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, []);

  // Filtering logic
  useEffect(() => {
    let filtered = results;

    // Filter by search input
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((result) =>
        result.itemName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected dropdown item
    if (selectedItem) {
      filtered = filtered.filter((result) => result.itemName === selectedItem.value);
    }

    setFilteredResults(filtered);
  }, [searchQuery, selectedItem, results]);

  return (
    <div className="home-container flex flex-col h-screen bg-cover bg-center">
      {/* Search Input */}
      {/* <div className="fixed top-[110px] left-0 right-0 z-50 p-4 bg-transparent">
        <div className="flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Search results by item name...(in Malayalam)"
            className="search-input px-4 py-2 rounded-lg border border-gray-300 w-1/2 
                bg-transparent bg-opacity-50 backdrop-blur-md text-black placeholder-black-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div> */}

      {/* Dropdown for Item Selection */}
      <div className="input-container mt-16 flex justify-center">
        <label htmlFor="itemName" className="mr-2">Select Item(in Malayalam):</label>
        {loading ? (
          <p>Loading items...</p>
        ) : (
          <Select
            className="p-3 text-base border-2 border-gray-300 rounded-md bg-white outline-none w-full transition-colors duration-300 focus:border-gray-500"
            options={options}
            value={selectedItem}
            onChange={setSelectedItem}
            isSearchable
            placeholder="Select Item Name"
          />
        )}
      </div>

      {/* Scrollable Card Section */}
      <div className="flex-grow overflow-y-auto mt-[50px] px-4">
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
  );
}

export default Search;
