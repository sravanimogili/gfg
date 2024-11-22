import React, { useEffect, useState } from "react";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);

  // Fetch patients from the backend
  const fetchPatients = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/get"); // Adjust the URL if necessary
      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }
      const data = await response.json(); // Parse JSON data
      setPatients(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPatients(); // Call fetch function on component mount
  }, []);

  return (
    <div>
      <h1>Patient List</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : patients.length > 0 ? (
        patients.map((patient) => (
          <div key={patient._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h2>{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
          </div>
        ))
      ) : (
        <p>Loading patients...</p>
      )}
    </div>
  );
};

export default PatientList;