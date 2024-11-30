import "../styles/LandingPage.css";
function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <div className="content-container">
          <h1 className="title">Witaj w Hobby Finder!</h1>
          <p className="description">
            Odkryj swoje nowe hobby! Nasza aplikacja pomoże Ci znaleźć zajęcia,
            które pasują do Twoich możliwości i zainteresowań. Zdobywaj punkty,
            rywalizuj ze znajomymi i baw się świetnie!
          </p>
          <button
            className="start-quiz-btn"
            onClick={() => alert("Zaczynamy Quiz!")}
          >
            Wylosuj hobby
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
