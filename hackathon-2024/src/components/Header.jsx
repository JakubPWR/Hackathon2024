import "../styles/Header.css"

function Header() {


  
    return (
      <>
      <header className="header">
      <div className="header-container">
        <img src="logo.png" alt="Logo" className="header-logo" />
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#about">Ustawienia</a></li>
            <li className="nav-item"><a href="#services">Ranking</a></li>
            <li className="nav-item"><a href="#contact">Profil</a></li>
          </ul>
        </nav>
      </div>
    </header>
      </>
    );
  }
  
  export default Header;
  