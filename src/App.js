import { useState } from 'react';
import Navbar from './Components/Navbar';
import AddPatientForm from './Components/AddPatientForm';
import PatientList from './Components/PatientList';

const App = () => {
  const [patients, setPatients] = useState([]);

  const addPatient = (newPatient) => {
    const id = Date.now(); // Mock ID
    setPatients([...patients, { ...newPatient, id }]);
  };

  const deletePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  const editPatient = (updatedPatient) => {
    setPatients(
      patients.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <AddPatientForm onAddPatient={addPatient} />
        <PatientList
          patients={patients}
          onEdit={editPatient}
          onDelete={deletePatient}
        />
      </div>
    </div>
  );
};

export default App;
