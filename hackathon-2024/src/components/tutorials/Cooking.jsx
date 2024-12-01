import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "/src/data/hobbies";

function Cooking() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się gotować!");
  };

  const cookingHobby = hobbies.find((hobby) => hobby.id === 3);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Gotowanie - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/HRZfSwuS_GQ"
            title="Cooking Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Gotowanie to sztuka, która pozwala tworzyć pyszne posiłki i wyrażać
          kreatywność w kuchni.
        </p>
        <ul className="steps">
          <li>Wybierz przepis, który Cię interesuje.</li>
          <li>Przygotuj wszystkie składniki i narzędzia kuchenne.</li>
          <li>Postępuj krok po kroku zgodnie z instrukcjami przepisu.</li>
          <li>Spróbuj końcowego dania i ocen swoje umiejętności.</li>
        </ul>
        {cookingHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {cookingHobby.ratings.cost}/3, ⏱️: {cookingHobby.ratings.time}
              /3, 😎: {cookingHobby.ratings.fun}/3
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

export default Cooking;
