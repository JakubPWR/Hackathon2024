import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "/src/data/hobbies";
function Running() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się biegać!");
  };

  const runningHobby = hobbies.find((hobby) => hobby.id === 9);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Bieganie - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/tnw4q_l8Y0Q"
            title="Running Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Bieganie to świetny sposób na poprawę zdrowia i kondycji.
        </p>
        <ul className="steps">
          <li>Znajdź wygodne buty do biegania.</li>
          <li>Wybierz trasę odpowiednią do swoich możliwości.</li>
          <li>Rozgrzej się przed biegiem, aby uniknąć kontuzji.</li>
          <li>Rozpocznij od krótkich dystansów i zwiększaj je stopniowo.</li>
        </ul>
        {runningHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {runningHobby.ratings.cost}/3, ⏱️: {runningHobby.ratings.time}
              /3, 😎: {runningHobby.ratings.fun}/3
            </p>
          </div>
        )}
        <button className="learned-button" onClick={handleLearned}>
          Nauczyłem się!
        </button>
      </div>
    </div>
  );
}

export default Running;
