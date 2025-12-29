import { FC } from "react";

import { ReactComponent as GitHubIcon } from "../../assets/img/GitHubIcon.svg";
import "./style.css";

const NavBar: FC = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav__content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/devsuperior"
            target="_blank"
            rel="noreferrer"
          >
            <div className="nav__contact-container">
              <GitHubIcon />
              <p className="nav__contact-link">/devsuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
