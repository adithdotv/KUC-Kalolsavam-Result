import React, { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { db } from "../firebaseConfig";
import "./Home.css";
import "./Card.css";

const TEAMS = ["SOCIALISM", "SECULARISM", "DEMOCRACY", "JUSTICE", "LIBERTY", "EQUALITY"];

function Home() {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const dbRef = ref(db, "results/");
        const snapshot = await get(dbRef);
        const results = snapshot.val() || {};

        // Aggregate points by team
        const teamScores = TEAMS.reduce((acc, team) => {
          acc[team] = 0; // Default points to 0
          return acc;
        }, {});

        Object.values(results).forEach(({ teamName, points }) => {
          if (teamName in teamScores) {
            teamScores[teamName] += points;
          }
        });

        // Convert to sorted array
        const sortedRankings = Object.entries(teamScores)
          .map(([team, score]) => ({ team, score }))
          .sort((a, b) => b.score - a.score);

        setRankings(sortedRankings);
      } catch (error) {
        console.error("Error fetching rankings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="content-scrollable">
          <div className="container px-4">
            <h1 className="Heading">Team Rankings</h1>
            {loading ? (
              <p>Loading rankings...</p>
            ) : (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rankings.map((team, index) => (
                  <div className="card" key={team.team}>
                    <h2>{team.team}</h2>
                    <p>Position: {index + 1}</p>
                    <p>Score: {team.score}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;