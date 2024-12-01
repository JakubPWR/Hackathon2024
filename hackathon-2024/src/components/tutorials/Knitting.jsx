import React from "react";
import "/src/styles/Tutorial.css";
import hobbies from "/src/data/hobbies";
function Knitting() {
  const handleLearned = () => {
    alert("Gratulacje! Nauczyłeś się robienia na drutach!");
  };

  const knittingHobby = hobbies.find((hobby) => hobby.id === 13);

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <h1 className="title">Robienie na drutach - Nauka od podstaw</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/fndD03SuFe8"
            title="Knitting Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="description">
          Robienie na drutach to doskonałe hobby do tworzenia własnych
          rękodzieł.
        </p>
        <ul className="steps">
          <li>Przygotuj włóczkę i druty odpowiedniego rozmiaru.</li>
          <li>Zapoznaj się z podstawowymi technikami robienia na drutach.</li>
          <li>Rozpocznij od prostych projektów, takich jak szalik.</li>
          <li>Eksperymentuj z różnymi wzorami i kolorami.</li>
        </ul>
        {knittingHobby && (
          <div className="rating">
            <h3>Nasza ocena:</h3>
            <p>
              💸: {knittingHobby.ratings.cost}/3, ⏱️:{" "}
              {knittingHobby.ratings.time}/3, 😎: {knittingHobby.ratings.fun}/3
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

export default Knitting;
