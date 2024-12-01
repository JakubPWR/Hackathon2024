import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "../data/hobbies";

function Yoga() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się jogi!");
  };

  const yogaHobby = hobbies.find((hobby) => hobby.id === 12);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Joga - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/VaoV1PrYft4"
            title="Yoga Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Joga to sposób na relaks, rozwijanie siły i zwiększanie elastyczności.
        </p>
        <ul className="steps">
          <li>Znajdź ciche miejsce do ćwiczeń.</li>
          <li>Przygotuj matę do jogi.</li>
          <li>Zacznij od podstawowych pozycji i oddychania.</li>
          <li>Regularnie praktykuj, aby widzieć postępy.</li>
        </ul>
        {yogaHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {yogaHobby.ratings.cost}/3, ⏱️: {yogaHobby.ratings.time}/3,
              😎: {yogaHobby.ratings.fun}/3
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

export default Yoga;
