// import React, { useState } from "react";
// import "./Admin.css";
// import Navbar from "./Navbar"; // Import Navbar


// function Admin() {
//   const [formData, setFormData] = useState({
//     itemName: "",
//     participantName: "",
//     teamName: "",
//     grade: "",
//     points: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data: ", formData);
//   };

//   return (
//     <div>
//       <Navbar /> <br></br>
//       {/* Navbar */}
//       <div className="admin-container">
//         <div className="form-container">
//           <h1 className="Heading-admin">Mark Entry</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="row-inputs">
//               <div className="input-container">
//                 <label htmlFor="itemName">Select Item Name:</label>
//                 <select
//                   id="itemName"
//                   required="true"
//                   name="itemName"
//                   value={formData.itemName}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Item</option>
//                   <option value="item1">Item 1</option>
//                   <option value="item2">Item 2</option>
//                   <option value="item3">Item 3</option>
//                 </select>
//               </div>

//               <div className="input-container">
//                 <label htmlFor="teamName">Select Team Name:</label>
//                 <select
//                   required="true"
//                   id="teamName"
//                   name="teamName"
//                   value={formData.teamName}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Team</option>
//                   <option value="SOCIALISM">SOCIALISM</option>
//                   <option value="SECULARISM">SECULARISM</option>
//                   <option value="DEMOCARCY">DEMOCARCY</option>
//                   <option value="JUSTICE">JUSTICE</option>
//                   <option value="LIBERTY">LIBERTY</option>
//                   <option value="EQUALITY">EQUALITY</option>
//                 </select>
//               </div>
//             </div>

//             <div className="input-container">
//               <label htmlFor="participantName">Participant Full Name:</label>
//               <input
//                 type="text"
                
//                 id="participantName"
//                 name="participantName"
//                 value={formData.participantName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-container">
//               <label htmlFor="grade">Enter Grade:</label>
//               <input
//                 type="text"
//                 id="grade"
//                 name="grade"
//                 value={formData.grade}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-container">
//               <label htmlFor="points">Enter Points:</label>
//               <input
//                 type="number"
//                 id="points"
//                 name="points"
//                 value={formData.points}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="submit-container">
//               <button type="submit">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default Admin;
import React, { useState } from "react";
import "./Admin.css";
import Navbar from "./Navbar"; // Import Navbar

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      points: name === "grade" ? gradePointsMap[value] || "" : prev.points, // Auto-set points
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <div>
      <Navbar /> <br />
      <div className="admin-container">
        <div className="form-container">
          <h1 className="Heading-admin">Mark Entry</h1>
          <form onSubmit={handleSubmit}>
            <div className="row-inputs">
              <div className="input-container">
                <label htmlFor="itemName">Select Item Name:</label>
                <select
                  id="itemName"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Item</option>
                  <option value="item1">Item 1</option>
                  <option value="item2">Item 2</option>
                  <option value="item3">Item 3</option>
                </select>
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
