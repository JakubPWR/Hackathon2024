import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "/src/data/hobbies";
function Writing() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się pisać!");
  };

  const writingHobby = hobbies.find((hobby) => hobby.id === 8);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Pisanie - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/j7rKKpwdXNE"
            title="Writing Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Pisanie rozwija kreatywność, pozwala wyrazić siebie i tworzyć
          wspaniałe historie.
        </p>
        <ul className="steps">
          <li>Wybierz temat, który Cię inspiruje.</li>
          <li>Napisz wstępny szkic swojego tekstu.</li>
          <li>Pracuj nad szczegółami i rozwijaj fabułę.</li>
          <li>Edytuj i poprawiaj tekst, aby osiągnąć najlepszy efekt.</li>
        </ul>
        {writingHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {writingHobby.ratings.cost}/3, ⏱️: {writingHobby.ratings.time}
              /3, 😎: {writingHobby.ratings.fun}/3
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

export default Writing;
