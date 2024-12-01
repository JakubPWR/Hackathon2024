import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "/src/data/hobbies";
function Gardening() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się ogrodnictwa!");
  };

  const gardeningHobby = hobbies.find((hobby) => hobby.id === 6);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Ogrodnictwo - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/BO8yuSTc3fo"
            title="Gardening Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Ogrodnictwo to relaksujące hobby, które pozwala tworzyć piękne
          przestrzenie.
        </p>
        <ul className="steps">
          <li>Wybierz miejsce na swój ogród.</li>
          <li>Przygotuj glebę i wybierz rośliny.</li>
          <li>Posadź rośliny zgodnie z ich wymaganiami.</li>
          <li>Pielęgnuj ogród regularnie i ciesz się efektami.</li>
        </ul>
        {gardeningHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {gardeningHobby.ratings.cost}/3, ⏱️:{" "}
              {gardeningHobby.ratings.time}/3, 😎: {gardeningHobby.ratings.fun}
              /3
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

export default Gardening;
