import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hobbies from "../data/hobbies"; // Import hobby data
import "../styles/FindNewHobby.css";

function FindNewHobby() {
  const [selectedHobby, setSelectedHobby] = useState(null);
  const navigate = useNavigate();

  const handleRandomizeHobby = () => {
    const randomIndex = Math.floor(Math.random() * hobbies.length);
    setSelectedHobby(hobbies[randomIndex]);
  };

  return (
    <div className="find-new-hobby">
      <h1>Znajdź nowe hobby</h1>
      <div className="hobby-container">
        {selectedHobby ? (
          <>
            <img
              src={selectedHobby.image}
              alt={selectedHobby.name}
              className="hobby-image"
            />
            <h2>{selectedHobby.name}</h2>
            <p>{selectedHobby.description}</p>
            <button
              className="learn-button"
              onClick={() => navigate(selectedHobby.tutorialPath)}
            >
              Zacznij się uczyć
            </button>
          </>
        ) : (
          <div className="hidden-hobby">
            <p>Losuj hobby, aby odkryć coś nowego!</p>
          </div>
        )}
      </div>
      <button className="randomize-button" onClick={handleRandomizeHobby}>
        Losuj hobby
      </button>
    </div>
  );
}

export default FindNewHobby;
