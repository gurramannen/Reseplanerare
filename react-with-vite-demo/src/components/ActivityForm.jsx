import React, { useState } from "react";
import PropTypes from "prop-types"; // Rätt import
import "../styles/ActivityForm.css";

const ActivityForm = ({ onAddActivity }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !location) {
      setError("Alla fält måste fyllas i.");
      return;
    }
    setError("");
    onAddActivity({ name, date, location });
    setName("");
    setDate("");
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="activity-form">
        <h1>Reseplaneraren</h1>
      <h2>Lägg till Aktivitet</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Namn:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Aktivitetens namn"
        />
      </div>
      <div>
        <label>Datum:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Plats:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Aktivitetens plats"
        />
      </div>
      <button type="submit">Lägg till</button>
    </form>
  );
};

// Lägg till PropTypes här
ActivityForm.propTypes = {
  onAddActivity: PropTypes.func.isRequired, // Kontrollera att det är rätt validering
};

export default ActivityForm;