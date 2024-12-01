import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "/src/data/hobbies";
function Cycling() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się kolarstwa!");
  };

  const cyclingHobby = hobbies.find((hobby) => hobby.id === 11);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Kolarstwo - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/sbnwhUYKf34"
            title="Cycling Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Kolarstwo to hobby, które pozwala odkrywać nowe trasy i poprawiać
          kondycję fizyczną.
        </p>
        <ul className="steps">
          <li>Znajdź odpowiedni rower do swoich potrzeb.</li>
          <li>Zaplanuj trasę w pobliżu swojego domu.</li>
          <li>Załóż kask i odpowiedni strój sportowy.</li>
          <li>Regularnie ćwicz, aby poprawiać swoje osiągi.</li>
        </ul>
        {cyclingHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {cyclingHobby.ratings.cost}/3, ⏱️: {cyclingHobby.ratings.time}
              /3, 😎: {cyclingHobby.ratings.fun}/3
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

export default Cycling;
