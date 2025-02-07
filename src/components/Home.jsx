
import React from 'react';
import './Home.css'; // Import the CSS file
import './Card.css'
function Home() {
  return (
    <div className="home-container">
      {/* Fixed section for scrollable content */}
      <div className="content-container">
        <div className="content-scrollable">
          <div className="container px-4">
            {/* Cards Section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


              {/* Rohith edit card here */}


              
              <div className="card">
                <h2>SOCIALISM</h2>
                <p>Grade: A</p>
                <p>Score: 100</p>
              </div>

              {/* Additional cards */}
              <div className="card">
                <h2>SECULARISM</h2>
                <p>Position : First</p>
                <p>Score: 90</p>
              </div>
              <div className="card">
                <h2>Team C</h2>
                <p>Position : Second</p>
                <p>Score: 80</p>
              </div>
              <div className="card">
                <h2>DEMOCRACY</h2>
                <p>Position : Third</p>
                <p>Score: 70</p>
              </div>
              <div className="card">
                <h2>JUSTICE</h2>
                <p>Position : Fourth</p>
                <p>Score: 60</p>
              </div>
              <div className="card">
                <h2>LIBERTY</h2>
                <p>Position : Fifth</p>
                <p>Score: 50</p>
              </div>


              



            </div>
          </div>
        </div>
      </div>

      {/* NavBar is fixed at the bottom */}
      <div className="navbar">
        {/* Your NavBar Component */}

      </div>
     
    </div>
  );
}

export default Home;
