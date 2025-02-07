import React from "react";
import "./Card.css";

function Search() {
  return (
    <>
      <div className="home-container flex flex-col h-screen bg-cover bg-center">
        {/* Transparent Search Section (Lowered & Glass Effect) */}
        <div className="fixed top-[100px] left-0 right-0 z-50 p-4 bg-transparent">
          <div className="flex justify-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="search-input px-4 py-2 rounded-lg border border-gray-300 w-1/2 
                  bg-transparent bg-opacity-30 backdrop-blur-md text-black placeholder-black"
            />
            <button className="search-button">Search</button>
          </div>
        </div>

        {/* Scrollable Card Section */}
        <div className="flex-grow overflow-y-auto mt-[150px] px-4">
          <div className="container">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="card">
                <h2>Team A</h2>
                <p>Grade: A</p>
                <p>Score: 100</p>
              </div>
              <div className="card">
                <h2>Team A</h2>
                <p>Grade: A</p>
                <p>Score: 100</p>
              </div>
              <div className="card">
                <h2>Team A</h2>
                <p>Grade: A</p>
                <p>Score: 100</p>
              </div>
              <div className="card">
                <h2>Team A</h2>
                <p>Grade: A</p>
                <p>Score: 100</p>
              </div>
              <div className="card">
                <h2>Team A</h2>
                <p>Grade: A</p>
                <p>Score: 100</p>
              </div>
              <div className="card">
                <h2>Team A</h2>
                <p>Grade: A</p>
                <p>Score: 100</p>
              </div>

              {/* Additional cards */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
