import "./navbar.scss";

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={darkMode ? "dark" : ""}>
      <img
        src={process.env.PUBLIC_URL + "/images/react-light/favicon-32x32.png"}
        alt="react icon"
      />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
};
