import React from "react";
import './Card.css'
import Logobar from "./Logobar";

function Search() {
  return (
    <>
      <div className="home-container">
        {/* Logobar (Fixed at the top) */}
        <div className="fixed top-0 left-0 right-0 z-50">
          {/* <Logobar /> */}
        </div>

        {/* Search bar section */}

        <div className="search-section mt-[94px] px-4">
          <div className="flex justify-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="search-input px-4 py-2 rounded-lg border border-gray-300 w-1/2"
            />
            <button className="search-button">Search</button>
          </div>
        </div>

        {/* Fixed section for scrollable content */}
        <div className="content-container mt-5">
          <div className="content-scrollable">
            <div className="container px-4">
              {/* Cards Section */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                

                {/* Rohith edit card here */}


                {/* Card 1 */}
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

        {/* NavBar (Fixed at the bottom) */}
        <div className="fixed bottom-0 left-0 right-0 z-50">
          {/* <NavBar /> */}
        </div>
      </div>
    </>
  );
}

export default Search;
