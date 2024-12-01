import "../styles/LandingPage.css";
import skateboard from "../video/skateboard.mp4"; // Import the video as background

function SimplePage() {
  return (
    <div className="landing-page">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={skateboard} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dimming */}
      <div className="overlay"></div>

      {/* Content Container */}
      <div className="content-container">
        <h1 className="title">Tu miał być chat GPT ale nie poszło</h1>
      </div>
    </div>
  );
}

export default SimplePage;
