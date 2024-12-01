import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "../data/hobbies";

function Drawing() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się rysować!");
  };

  const drawingHobby = hobbies.find((hobby) => hobby.id === 2);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Rysowanie - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/1jjmOF1hQqI"
            title="Drawing Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Naucz się podstaw rysowania. Rozpocznij swoją przygodę z ołówkiem i
          papierem!
        </p>
        <ul className="steps">
          <li>Przygotuj papier i ołówek.</li>
          <li>Rysuj proste kształty, aby poprawić kontrolę nad ręką.</li>
          <li>Ćwicz cieniowanie i tekstury.</li>
          <li>Znajdź swój styl poprzez codzienną praktykę.</li>
        </ul>
        {drawingHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {drawingHobby.ratings.cost}/3, ⏱️: {drawingHobby.ratings.time}
              /3, 😎: {drawingHobby.ratings.fun}/3
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

export default Drawing;
