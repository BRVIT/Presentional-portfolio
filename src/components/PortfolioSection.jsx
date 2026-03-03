export default function PortfolioSection() {
  return (
    <section className="section-portfolio">
      <div id="portfolio" className="portfolio">
        <div className="portfolio__heading-box reveal-box reveal">
          <h1 className="heading-primary portfolio__heading reveal">
            Portfólio
          </h1>
          <p className="portfolio__subheading">Aplikácie</p>
        </div>
        <div className="card card--1 reveal-box reveal">
          <div className="card__content">
            <div className="card__front card__front--1 card__block">
              <i className="ph-game-controller card__icon"></i>
              <h3 className="card__title">Api-NHL</h3>
              <p className="card__text">
                Tato aplikácia sa sústredí na prácu s api, teda na získavanie
                jednotlivých informácii za pomoci Axiosu, kde následne
                jednotlivé informácie sú vyrenderované na stránke. Môžete si
                vyhľadať všetky tímy NHL, kde všetky tímy sú vypísane celkovo a
                rozdelene do konferencii, taktiež sa môžete o nich dozvedieť
                základne informácie a ich postavenie v tabuľke.
              </p>
            </div>
            <div className="card__back card__block">
              <ul className="card__list">
                <li>
                  <h4 className="card__tools-heading">Použité technológie</h4>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/html5.svg"
                    alt="html icon"
                    className="card__icon--back"
                  />
                  <p>HTML</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/css3.svg"
                    alt="css icon"
                    className="card__icon--back"
                  />
                  <p>CSS</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/javascript.svg"
                    alt="javascript icon"
                    className="card__icon--back"
                  />
                  <p>Javascript</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/axios.svg"
                    alt="axios icon"
                    className="card__icon--back"
                  />
                  <p>Axios</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/vite.svg"
                    alt="vite icon"
                    className="card__icon--back"
                  />
                  <p>Vite</p>
                </li>
              </ul>
              <a
                href="https://nhl-api-portfolio.netlify.app"
                className="btn btn--card btn--animated"
              >
                Vyskúšaj to
              </a>
            </div>
          </div>
        </div>
        <div className="card card--2 reveal-box reveal">
          <div className="card__content">
            <div className="card__front card__front--2">
              <i className="ph-shopping-cart card__icon"></i>
              <h3 className="card__title">Shopping cart</h3>
              <p className="card__text">
                Aplikacia Shopping cart ako už z názvu nahovára sa sústredí na
                renderovanie jednotlivých produktov z json filu a následne
                pridávanie týchto produktov do košíka, kde ukazuje typ produktu,
                cenu, počet a celkovú sumu všetkých produktov. Následne sú
                všetky produkty uložene v session storage v Prípade, že by sa
                chcel užívateľ prekliknúť na inú časť stránky.
              </p>
            </div>
            <div className="card__back">
              <ul className="card__list">
                <li>
                  <h4 className="card__tools-heading">Použité technológie</h4>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/html5.svg"
                    alt="html icon"
                    className="card__icon--back"
                  />
                  <p>HTML</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/css3.svg"
                    alt="css icon"
                    className="card__icon--back"
                  />
                  <p>CSS</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/javascript.svg"
                    alt="javascript icon"
                    className="card__icon--back"
                  />
                  <p>Javascript</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/tailwindcss.svg"
                    alt="axios icon"
                    className="card__icon--back"
                  />
                  <p>Tailwind</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/vite.svg"
                    alt="vite icon"
                    className="card__icon--back"
                  />
                  <p>Vite</p>
                </li>
              </ul>
              <a
                href="https://shopping-cart-portfolio.netlify.app"
                className="btn btn--card btn--animated"
              >
                Vyskúšaj to
              </a>
            </div>
          </div>
        </div>
        <div className="card card--3 reveal-box reveal">
          <div className="card__content">
            <div className="card__front card__front--3">
              <i className="ph-chat-text card__icon"></i>
              <h3 className="card__title">Chat room</h3>
              <p className="card__text">
                Táto chatovacia aplikácia je mojím prvým projektom vytvoreným za
                použitia React frameworku a Firebase databázy. Cieľom projektu
                je demonštrovať vedomosti a schopnosti v základných konceptoch
                Reactu a jeho integrácii s cloudovou databázou Firebase.
              </p>
            </div>
            <div className="card__back">
              <ul className="card__list">
                <li>
                  <h4 className="card__tools-heading">Použité technológie</h4>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/html5.svg"
                    alt="html icon"
                    className="card__icon--back"
                  />
                  <p>HTML</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/css3.svg"
                    alt="css icon"
                    className="card__icon--back"
                  />
                  <p>CSS</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/react.svg"
                    alt="react icon"
                    className="card__icon--back"
                  />
                  <p>React</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/firebase.svg"
                    alt="firebase icon"
                    className="card__icon--back"
                  />
                  <p>Firebase</p>
                </li>
                <li className="card__list-item">
                  <img
                    src="icons/vite.svg"
                    alt="vite icon"
                    className="card__icon--back"
                  />
                  <p>Vite</p>
                </li>
              </ul>
              <a
                href="https://chat-app-portfolio.netlify.app/"
                className="btn btn--card btn--animated"
              >
                Vyskúšaj to
              </a>
            </div>
          </div>
        </div>
        <div className="card card--4 reveal-box reveal">
          <div className="card__content">
            <div className="card__front card__front--4">
              <i className="ph-question card__icon"></i>
              <h3 className="card__title">Quiz</h3>
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                excepturi.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolor, excepturi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolor, excepturi.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolor, excepturi.
              </p>
            </div>
            <div className="card__back">
              <p className="card__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                officia inventore ab.
              </p>
              <a href="#" className="btn btn--card btn--animated">
                Vo vyvoji
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
