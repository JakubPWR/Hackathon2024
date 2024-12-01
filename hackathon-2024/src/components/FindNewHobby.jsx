import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hobbies from "../data/hobbies";
import "../styles/FindNewHobby.css";

function FindNewHobby() {
  const [remainingHobbies, setRemainingHobbies] = useState([...hobbies]);
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const navigate = useNavigate();

  const handleRandomizeHobby = () => {
    if (remainingHobbies.length === 0) return;

    setIsRevealing(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * remainingHobbies.length);
      const newHobby = remainingHobbies[randomIndex];
      setSelectedHobby(newHobby);

      const updatedHobbies = [...remainingHobbies];
      updatedHobbies.splice(randomIndex, 1);
      setRemainingHobbies(updatedHobbies);

      setIsRevealing(false);
    }, 1000);
  };

  return (
    <div className="find-new-hobby">
      <div className="content-box">
        <h1>Znajdź nowe hobby</h1>
        <div className="hobby-container">
          {remainingHobbies.length > 0 ? (
            <div
              className={`image-wrapper ${isRevealing ? "fade-out" : "fade-in"}`}
              style={{
                backgroundImage: `url(${
                  selectedHobby
                    ? selectedHobby.image
                    : "/src/images/questionmarks.jpg"
                })`,
              }}
            />
          ) : (
            <div
              className="image-wrapper"
              style={{
                backgroundImage: `url("/src/images/tokoniec.jpg")`,
              }}
            >
              <p className="end-message">
                Wylosowałeś wszystkie dostępne hobby!
              </p>
            </div>
          )}
          {selectedHobby && remainingHobbies.length > 0 && (
            <>
              <h2>{selectedHobby.name}</h2>
              <div className="rating">
                <h3>Nasza ocena:</h3>
                <p className="rating-text">
                  💸: {selectedHobby.ratings.cost}/3, ⏱️:{" "}
                  {selectedHobby.ratings.time}/3, 😎:{" "}
                  {selectedHobby.ratings.fun}/3
                </p>
              </div>

              <p>{selectedHobby.description}</p>
              <button
                className="randomize-button"
                onClick={() => navigate(selectedHobby.tutorialPath)}
              >
                Zacznij się uczyć
              </button>
            </>
          )}
        </div>
        {remainingHobbies.length > 0 && (
          <button className="randomize-button" onClick={handleRandomizeHobby}>
            Losuj hobby
          </button>
        )}
      </div>
    </div>
  );
}

export default FindNewHobby;
