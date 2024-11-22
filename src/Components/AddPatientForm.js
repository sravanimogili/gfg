import { useState } from 'react';

const AddPatientForm = ({ onAddPatient }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && gender) {
      onAddPatient({ name, age, gender });
      setName('');
      setAge('');
      setGender('');
    }
  };

  return (
    <div className="form-container">
      <h3>Add New Patient</h3>
      <form onSubmit={handleSubmit} className="patient-form">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Age:</label>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <label>Gender:</label>
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
