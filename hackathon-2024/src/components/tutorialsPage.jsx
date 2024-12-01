import hobbies from "/src/data/hobbies";
import "../styles/TutorialsPage.css"; // Stwórz osobny plik CSS dla stylów

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const TutorialsPage = () => {
  const { userData, setUserData } = useContext(AppContext);
  const [completedTutorials, setCompletedTutorials] = useState(
    userData?.activities || []
  );
  const navigate = useNavigate();

  const toggleCompletion = (id) => {
    const updatedActivities = completedTutorials.includes(id)
      ? completedTutorials.filter((tutorialId) => tutorialId !== id)
      : [...completedTutorials, id];

    setCompletedTutorials(updatedActivities);
    setUserData({ ...userData, activities: updatedActivities });
  };

  const handleCardClick = (tutorialPath) => {
    navigate(tutorialPath); // Przekierowuje na stronę tutorialu
  };

  return (
    <div className="tutorials-page">
      <h1>Tutoriale</h1>
      <div className="tutorials-grid">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="tutorial-card">
            <div
              className="clickable-area"
              onClick={() => handleCardClick(hobby.tutorialPath)}
            >
              <img
                src={hobby.image}
                alt={hobby.name}
                className="tutorial-image"
              />
              <h2>{hobby.name}</h2>
              <p>{hobby.description}</p>
              <div className="ratings">
                <p>💸 Koszt: {hobby.ratings.cost}</p>
                <p>⏱️ Czas: {hobby.ratings.time}</p>
                <p>😎 Fajność: {hobby.ratings.fun}</p>
              </div>
            </div>
            <button
              className={`completion-button ${
                completedTutorials.includes(hobby.id) ? "completed" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation(); // Zapobiega przekierowaniu podczas kliknięcia w przycisk
                toggleCompletion(hobby.id);
              }}
            >
              {completedTutorials.includes(hobby.id)
                ? "Ukończono"
                : "Oznacz jako ukończone"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialsPage;
