import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./Admin.css";
import { db } from "../../firebaseConfig"; // Import Firebase config
import { get, push, ref, update } from "firebase/database";
import Navbar from './Navbar'

const gradePointsMap = {
  "I with A": 8,
  "I with B": 7,
  "I with C": 6,
  "II with A": 6,
  "II with B": 5,
  "II with C": 4,
  "III with A": 4,
  "III with B": 3,
  "III with C": 2,
  A: 3,
  B: 2,
  C: 1,
};

function Admin() {
  const [formData, setFormData] = useState({
    itemName: "",
    participantName: "",
    teamName: "",
    grade: "",
    points: "",
  });

  const [options, setOptions] = useState([]); // Store items from DB
  const [loading, setLoading] = useState(true); // Loading state

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove auth state
    navigate("/admin-login"); // Redirect to Login Page
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const dbRef = ref(db, "items/");
        const snapshot = await get(dbRef);
  
        if (snapshot.exists()) {
          const data = snapshot.val();
          const itemsList = Object.keys(data).map((key) => ({
            value: data[key].name, // Store item name as key
            label: data[key].name, // Display item name
          }));
  
          setOptions(itemsList);
        } else {
          setOptions([]); // If no data, set empty array
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      points: name === "grade" ? gradePointsMap[value] || "" : prev.points,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const dbRef = ref(db, "results/"); // Reference to the "results" collection
      const newResultRef = push(dbRef); // Generate a new unique key
  
      // Prepare the data to store
      const resultData = {
        itemName: formData.itemName,
        participantName: formData.participantName,
        teamName: formData.teamName,
        grade: formData.grade,
        points: formData.points,
      };
  
      // Store the data in the database
      await update(newResultRef, resultData);
  
      alert("Result saved successfully!");
      
      // Reset form
      setFormData({
        itemName: "",
        participantName: "",
        teamName: "",
        grade: "",
        points: "",
      });
  
    } catch (error) {
      console.error("Error saving result:", error);
    }
  };
  

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-auto">
      {/* Logout Button */}
      <div className="flex justify-end p-4 mt-6"> {/* Increased margin-top */}
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
        >
          Logout
        </button>
      </div>
      
      <div className="admin-container">
        <div className="form-container">
          <h1 className="Heading-admin">Mark Entry</h1>
          <form onSubmit={handleSubmit}>
            <div className="row-inputs">
              <div className="input-container">
                <label htmlFor="itemName">Select Item Name:</label>
                {loading ? (
                  <p>Loading items...</p>
                ) : (
                  <Select
                    className="select"
                    options={options}
                    value={options.find(option => option.value === formData.itemName)}
                    onChange={(selectedOption) =>
                      setFormData((prev) => ({
                        ...prev,
                        itemName: selectedOption.value,
                      }))
                    }
                    isSearchable
                    placeholder="Select Item Name"
                    required
                  />
                )}
              </div>
  
              <div className="input-container">
                <label htmlFor="teamName">Select Team Name:</label>
                <select
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Team</option>
                  <option value="SOCIALISM">SOCIALISM</option>
                  <option value="SECULARISM">SECULARISM</option>
                  <option value="DEMOCRACY">DEMOCRACY</option>
                  <option value="JUSTICE">JUSTICE</option>
                  <option value="LIBERTY">LIBERTY</option>
                  <option value="EQUALITY">EQUALITY</option>
                </select>
              </div>
            </div>
  
            <div className="input-container">
              <label htmlFor="participantName">Participant Full Name:</label>
              <input
                type="text"
                id="participantName"
                name="participantName"
                value={formData.participantName}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="row-inputs">
              <div className="input-container">
                <label htmlFor="grade">Enter Grade:</label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Grade</option>
                  {Object.keys(gradePointsMap).map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </div>
  
              <div className="input-container">
                <label htmlFor="points">Points:</label>
                <input
                  type="number"
                  id="points"
                  name="points"
                  value={formData.points}
                  disabled
                />
              </div>
            </div>
  
            <div className="submit-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
}

export default Admin;
