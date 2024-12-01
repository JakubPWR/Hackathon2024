import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "../data/hobbies";

function Hiking() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się wędrować!");
  };

  const hikingHobby = hobbies.find((hobby) => hobby.id === 4);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Wędrówki - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/aEgP9zxUMpY"
            title="Hiking Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Wędrówki to świetny sposób na relaks, odkrywanie natury i poprawę
          kondycji fizycznej.
        </p>
        <ul className="steps">
          <li>Znajdź szlak odpowiedni do swojego poziomu kondycji.</li>
          <li>Zabierz ze sobą odpowiednie buty i wodę.</li>
          <li>Podążaj za oznaczeniami na szlaku i ciesz się widokami.</li>
          <li>Pamiętaj o bezpieczeństwie na szlaku.</li>
        </ul>
        {hikingHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {hikingHobby.ratings.cost}/3, ⏱️: {hikingHobby.ratings.time}
              /3, 😎: {hikingHobby.ratings.fun}/3
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

export default Hiking;
