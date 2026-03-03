export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a>
          <img className="header__logo" src="/img/Logo+name.png" alt="Logo" />
        </a>

        <nav className="navigation hide">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link scroll-to" data-home="home">
                Domov
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link scroll-to" data-about="about">
                O mne
              </a>
            </li>
            <li className="navigation__item">
              <a
                className="navigation__link scroll-to"
                data-portfolio="portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link scroll-to" data-contact="contact">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
        <a className="navigation__button-mobile">
          <i className="ph-list navigation__icon navigation__icon--open"></i>
          <i className="ph-x navigation__icon navigation__icon--close hide"></i>
        </a>
      </div>
    </header>
  );
}
