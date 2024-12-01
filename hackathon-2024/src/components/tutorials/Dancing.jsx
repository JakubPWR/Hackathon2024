import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "../data/hobbies";

function Dancing() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się tańca!");
  };

  const dancingHobby = hobbies.find((hobby) => hobby.id === 7);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Taniec - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/TetkzxCszaQ"
            title="Dancing Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Taniec to hobby, które rozwija koordynację, kondycję i daje mnóstwo
          radości.
        </p>
        <ul className="steps">
          <li>Wybierz styl tańca, który Cię interesuje.</li>
          <li>Znajdź podstawowe kroki online lub zapisz się na zajęcia.</li>
          <li>Ćwicz regularnie w domu lub w grupie.</li>
          <li>Baw się tańcem i rozwijaj swoje umiejętności.</li>
        </ul>
        {dancingHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {dancingHobby.ratings.cost}/3, ⏱️: {dancingHobby.ratings.time}
              /3, 😎: {dancingHobby.ratings.fun}/3
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

export default Dancing;
