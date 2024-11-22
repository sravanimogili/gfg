const PatientCard = ({ patient, onEdit, onDelete }) => {
    return (
      <div className="patient-card">
        <h4>{patient.name}</h4>
        <p>Age: {patient.age}</p>
        <p>Gender: {patient.gender}</p>
        <div className="button">
        <button  style={{backgroundColor:"blue", color:'white', }} onClick={() => onEdit(patient)}>Edit</button>
        <button style={{backgroundColor:"blue", color:'white', }} onClick={() => onDelete(patient._id)}>Delete</button>
        </div>
      </div>
    );
  };
  
  export default PatientCard;
  