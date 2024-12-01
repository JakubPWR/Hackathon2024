import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "/src/data/hobbies";
function Painting() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się malować!");
  };

  const paintingHobby = hobbies.find((hobby) => hobby.id === 10);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Malowanie - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/lLWEXRAnQd0"
            title="Painting Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Malowanie pozwala na wyrażenie emocji i tworzenie pięknych dzieł.
        </p>
        <ul className="steps">
          <li>Przygotuj farby, pędzle i płótno.</li>
          <li>Wybierz temat lub styl malowania.</li>
          <li>Rozpocznij od prostych szkiców, a następnie dodawaj kolory.</li>
          <li>Eksperymentuj z technikami i baw się procesem twórczym.</li>
        </ul>
        {paintingHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {paintingHobby.ratings.cost}/3, ⏱️:{" "}
              {paintingHobby.ratings.time}/3, 😎: {paintingHobby.ratings.fun}/3
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

export default Painting;
