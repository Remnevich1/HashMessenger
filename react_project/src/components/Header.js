import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">SecretMessage</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-xxl-1" id="navbarNav">
          <ul className="navbar-nav">
            <li><NavLink exact className="nav-link" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/note">Note</NavLink></li>
            <li><NavLink className="nav-link" to="/create">Create</NavLink></li>
            <li><NavLink className="nav-link" to="/about">About</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;