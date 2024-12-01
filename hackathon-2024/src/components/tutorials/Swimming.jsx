import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "/src/data/hobbies";
function Swimming() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się pływać!");
  };

  const swimmingHobby = hobbies.find((hobby) => hobby.id === 5);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Pływanie - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/AQy_c30lNjI"
            title="Swimming Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Pływanie to doskonały sposób na poprawę zdrowia, kondycji i relaks.
        </p>
        <ul className="steps">
          <li>Zacznij od nauki podstawowych ruchów w wodzie.</li>
          <li>Ćwicz w bezpiecznych warunkach.</li>
          <li>Naucz się utrzymywać równowagę w wodzie.</li>
          <li>Doskonal techniki pływania różnymi stylami.</li>
        </ul>
        {swimmingHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {swimmingHobby.ratings.cost}/3, ⏱️:{" "}
              {swimmingHobby.ratings.time}/3, 😎: {swimmingHobby.ratings.fun}/3
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

export default Swimming;
