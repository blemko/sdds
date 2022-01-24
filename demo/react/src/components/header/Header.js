import './Header.css';
import { useState } from 'react';

function Header() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const mobileMenuHandler = () => setIsOpenMobileMenu(!isOpenMobileMenu);

  return (
    <nav
      className={`sdds-nav sdds-u-fixed sdds-u-top0 ${
        isOpenMobileMenu && 'sdds-nav__mob-menu--opened'
      }`}
    >
      <div className="sdds-nav__left">
        <div className="sdds-nav__overlay" />
        <button
          className="sdds-nav__mob-menu-btn"
          onClick={() => mobileMenuHandler()}
        >
          <div id="sdds-nav__mob-menu-icon">
            <span
              className="sdds-nav__mob-menu-icon-line"
              id="sdds-nav__mob-menu-icon-line-1"
            />
            <span
              className="sdds-nav__mob-menu-icon-line"
              id="sdds-nav__mob-menu-icon-line-2"
            />
            <span
              className="sdds-nav__mob-menu-icon-line"
              id="sdds-nav__mob-menu-icon-line-3"
            />
          </div>
        </button>
        <div className="sdds-nav__app-name">SDDS REACT DEMO</div>
      </div>

      <div className="sdds-nav__center">
        <ul className="sdds-nav__inline-menu">
          <li className="sdds-nav__item">
            <a className="sdds-nav__item-core" href="#">
              <p className="sdds-nav__item-core-text">Item 1</p>
            </a>
          </li>

          <li className="sdds-nav__item sdds-nav__item--active">
            <a className="sdds-nav__item-core " href="#">
              <p className="sdds-nav__item-core-text">Item 2</p>
            </a>
          </li>

          <li className="sdds-nav__item sdds-nav__dropdown">
            <button
              className="sdds-nav__item-core"
              onClick="toggleInlineDropdown(event)"
            >
              <p className="sdds-nav__item-core-text">Item 3</p>
              <span className="sdds-nav__dropdown-icon">
                <svg
                  className="sdds-nav__dropdown-icon-svg"
                  viewBox="0 0 14 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                    d="M1.13668 0.891564C1.33194 0.696302 1.64853 0.696302 1.84379 0.891564L6.78786 5.83563C6.90501 5.95278 7.09496 5.95278 7.21212 5.83563L12.1562 0.891564C12.3515 0.696302 12.668 0.696303 12.8633 0.891565C13.0586 1.08683 13.0586 1.40341 12.8633 1.59867L7.91923 6.54273C7.41155 7.05041 6.58843 7.05041 6.08075 6.54273L1.13668 1.59867C0.941419 1.40341 0.941419 1.08683 1.13668 0.891564Z"
                  />
                </svg>
              </span>
            </button>
            <ul className="sdds-nav__dropdown-menu">
              <li className="sdds-nav__dropdown-item">
                <a className="sdds-nav__dropdown-item-core" href="#">
                  Sub item 3 long label...
                </a>
              </li>
              <li className="sdds-nav__dropdown-item">
                <button className="sdds-nav__dropdown-item-core">
                  Sub item 3
                </button>
              </li>
              <li className="sdds-nav__dropdown-item sdds-nav__dropdown-item--active">
                <a className="sdds-nav__dropdown-item-core" href="#">
                  Sub item 3 long label...
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="sdds-nav__toolbar-menu">
          <li className="sdds-nav__item">
            <a className="sdds-nav__item-core" href="#">
              <p className="sdds-nav__item-core-text">Item 4</p>
            </a>
          </li>

          <li className="sdds-nav__item sdds-nav__avatar">
            <button
              className="sdds-nav__avatar-btn"
              onClick="toggleAvatarMenu(event)"
            >
              <img
                className="sdds-nav__avatar-img"
                src="https://www.svgrepo.com/show/170303/avatar.svg"
                alt="profile photo"
              />
              <div className="sdds-nav__avatar-info sdds-nav__avatar-info--mobile">
                <p className="sdds-nav__avatar-title">Employee Name</p>
                <p className="sdds-nav__avatar-subtitle">Company Name</p>
              </div>
            </button>

            <ul className="sdds-nav__avatar-menu">
              <li className="sdds-nav__avatar-item sdds-nav__avatar-item--large">
                <div className="sdds-nav__avatar-info">
                  <p className="sdds-nav__avatar-title">Employee Name</p>
                  <p className="sdds-nav__avatar-subtitle">Company Name</p>
                </div>
              </li>
              <li className="sdds-nav__avatar-item">
                <a href="" className="sdds-nav__avatar-item-core">
                  Link 1
                </a>
              </li>
              <li className="sdds-nav__avatar-item sdds-nav__avatar-item--active">
                <button className="sdds-nav__avatar-item-core">Logout</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="sdds-nav__right">
        <div className="sdds-nav__item sdds-nav__app-launcher">
          <button
            className="sdds-nav__app-launcher-btn"
            onClick="toggleAppLauncher(event)"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.33333 2.66667C2.06971 2.66667 2.66667 2.06971 2.66667 1.33333C2.66667 0.596954 2.06971 0 1.33333 0C0.596954 0 0 0.596954 0 1.33333C0 2.06971 0.596954 2.66667 1.33333 2.66667ZM9.33307 1.33333C9.33307 2.06971 8.73612 2.66667 7.99974 2.66667C7.26336 2.66667 6.66641 2.06971 6.66641 1.33333C6.66641 0.596954 7.26336 0 7.99974 0C8.73612 0 9.33307 0.596954 9.33307 1.33333ZM16.0003 1.33333C16.0003 2.06971 15.4033 2.66667 14.6669 2.66667C13.9305 2.66667 13.3336 2.06971 13.3336 1.33333C13.3336 0.596954 13.9305 0 14.6669 0C15.4033 0 16.0003 0.596954 16.0003 1.33333ZM16.0003 8C16.0003 8.73638 15.4033 9.33333 14.6669 9.33333C13.9305 9.33333 13.3336 8.73638 13.3336 8C13.3336 7.26362 13.9305 6.66667 14.6669 6.66667C15.4033 6.66667 16.0003 7.26362 16.0003 8ZM14.6669 16C15.4033 16 16.0003 15.403 16.0003 14.6667C16.0003 13.9303 15.4033 13.3333 14.6669 13.3333C13.9305 13.3333 13.3336 13.9303 13.3336 14.6667C13.3336 15.403 13.9305 16 14.6669 16ZM7.99974 9.33333C8.73612 9.33333 9.33307 8.73638 9.33307 8C9.33307 7.26362 8.73612 6.66667 7.99974 6.66667C7.26336 6.66667 6.66641 7.26362 6.66641 8C6.66641 8.73638 7.26336 9.33333 7.99974 9.33333ZM9.33307 14.6667C9.33307 15.403 8.73612 16 7.99974 16C7.26336 16 6.66641 15.403 6.66641 14.6667C6.66641 13.9303 7.26336 13.3333 7.99974 13.3333C8.73612 13.3333 9.33307 13.9303 9.33307 14.6667ZM2.66667 8C2.66667 8.73638 2.06971 9.33333 1.33333 9.33333C0.596954 9.33333 0 8.73638 0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667C2.06971 6.66667 2.66667 7.26362 2.66667 8ZM1.33333 16C2.06971 16 2.66667 15.403 2.66667 14.6667C2.66667 13.9303 2.06971 13.3333 1.33333 13.3333C0.596954 13.3333 0 13.9303 0 14.6667C0 15.403 0.596954 16 1.33333 16Z"
                fill="currentColor"
                fillOpacity="1"
              />
            </svg>
          </button>
          <ul className="sdds-nav__app-launcher-menu">
            <li className="sdds-nav__app-launcher-item sdds-nav__app-launcher-item--category">
              <p className="sdds-nav__app-launcher-category-title">
                Category 1
              </p>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 1
              </a>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 2
              </a>
            </li>
            <li className="sdds-nav__app-launcher-item sdds-nav__app-launcher-item--active">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 3
              </a>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 4
              </a>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 5
              </a>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 6
              </a>
            </li>
            <li className="sdds-nav__app-launcher-item sdds-nav__app-launcher-item--category">
              <p className="sdds-nav__app-launcher-category-title">
                Category 2
              </p>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 1
              </a>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 2
              </a>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 3
              </a>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 4
              </a>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <button className="sdds-nav__app-launcher-item-core">
                Application 5 BTN
              </button>
            </li>
            <li className="sdds-nav__app-launcher-item">
              <a href="" className="sdds-nav__app-launcher-item-core">
                Application 6
              </a>
            </li>
          </ul>
        </div>
        <a className="sdds-nav__item sdds-nav__app-logo" href="#" />
      </div>
    </nav>
  );
}

export default Header;
