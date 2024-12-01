import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "/src/data/hobbies";

function Photography() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się podstaw fotografii!");
  };

  const photographyHobby = hobbies.find((hobby) => hobby.id === 1);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Fotografia - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/V7z7BAZdt2M"
            title="Photography Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Poznaj podstawy fotografii, od ustawień aparatu po kompozycję i
          światło!
        </p>
        <ul className="steps">
          <li>Poznaj ustawienia aparatu: ISO, przysłona, czas naświetlania.</li>
          <li>Zwróć uwagę na światło i cień.</li>
          <li>Eksperymentuj z różnymi kompozycjami.</li>
          <li>Praktykuj w różnych warunkach oświetleniowych.</li>
        </ul>
        {photographyHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {photographyHobby.ratings.cost}/3, ⏱️:{" "}
              {photographyHobby.ratings.time}/3, 😎:{" "}
              {photographyHobby.ratings.fun}/3
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

export default Photography;
