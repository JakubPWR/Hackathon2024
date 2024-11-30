import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hobbies from "../data/hobbies";
import "../styles/FindNewHobby.css";

function FindNewHobby() {
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [isRevealing, setIsRevealing] = useState(false); // State to handle animation
  const navigate = useNavigate();

  const handleRandomizeHobby = () => {
    setIsRevealing(true); // Start the animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * hobbies.length);
      setSelectedHobby(hobbies[randomIndex]);
      setIsRevealing(false); // End the animation after hobby is set
    }, 1000); // Match the animation duration in CSS
  };

  return (
    <div className="find-new-hobby">
      <h1>Znajdź nowe hobby</h1>
      <div className="hobby-container">
        <div
          className={`image-wrapper ${isRevealing ? "fade-out" : "fade-in"}`}
          style={{
            backgroundImage: `url(${
              selectedHobby
                ? selectedHobby.image
                : "https://images.unsplash.com/photo-1519682337058-a94d519337bc?fit=crop&w=600&q=80" // Prezent image
            })`,
          }}
        />
        {selectedHobby && (
          <>
            <h2>{selectedHobby.name}</h2>
            <p>{selectedHobby.description}</p>
            <button
              className="learn-button"
              onClick={() => navigate(selectedHobby.tutorialPath)}
            >
              Zacznij się uczyć
            </button>
          </>
        )}
      </div>
      <button className="randomize-button" onClick={handleRandomizeHobby}>
        Losuj hobby
      </button>
    </div>
  );
}

export default FindNewHobby;
