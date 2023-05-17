import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="header__container">
      <h1 className="header__title">To-Do</h1>
      <section className="header__nav">
        <FontAwesomeIcon
          onClick={handleButtonClick}
          className="header__menu"
          icon={faBars}
        />
        {isOpen && (
          <div className="dropdown-menu">
            <ul className="dropdown-menu-list">
              <li className="dropdown-menu-item">LIST 1</li>
              <li className="dropdown-menu-item">LIST 2</li>
              <li className="dropdown-menu-item">LIST 3</li>
            </ul>
          </div>
        )}
      </section>
    </section>
  );
}
