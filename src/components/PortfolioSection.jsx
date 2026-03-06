export default function PortfolioSection() {
  return (
    <section className="section-portfolio">
      <div id="portfolio" className="portfolio">
        <div className="portfolio__heading-box reveal-box reveal">
          <h1 className="heading-primary portfolio__heading reveal">
            PortfĂłlio
          </h1>
          <p className="portfolio__subheading">AplikĂˇcie</p>
        </div>
        <div className="card card--1 reveal-box reveal">
          <div className="card__content">
            <div className="card__front card__front--1 card__block">
              <i className="ph-chart-line-up card__icon"></i>
              <h3 className="card__title">Fundway</h3>
              <p className="card__text card__text--fundway">
                Fundway je full-stack SaaS app pre fund manazerov a investorov.
                Kalkulacka vypocita realne naklady fondu podla jurisdikcie,
                velkosti, poctu investorov a strategie. Platforma odporuci
                providerov v 80+ jurisdikciach a po platbe cez Stripe
                automaticky pripravi personalizovany PDF report.
              </p>
            </div>
            <div className="card__back card__block">
              <ul className="card__list card__list--compact">
                <li>
                  <h4 className="card__tools-heading">Core stack + highlights</h4>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Next.js 16, React 19, TypeScript 5</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Tailwind, Radix UI, Framer Motion, GSAP</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Stripe PaymentIntents + webhook flow</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Serverless API Routes, Prisma, PostgreSQL</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>PDFKit, Resend, WordPress REST + GraphQL</p>
                </li>
              </ul>
              <a
                href="https://goFundway.com"
                className="btn btn--card btn--animated"
              >
                Pozri projekt
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
                Aplikacia Shopping cart ako uĹľ z nĂˇzvu nahovĂˇra sa sĂşstredĂ­ na
                renderovanie jednotlivĂ˝ch produktov z json filu a nĂˇsledne
                pridĂˇvanie tĂ˝chto produktov do koĹˇĂ­ka, kde ukazuje typ produktu,
                cenu, poÄŤet a celkovĂş sumu vĹˇetkĂ˝ch produktov. NĂˇsledne sĂş
                vĹˇetky produkty uloĹľene v session storage v PrĂ­pade, Ĺľe by sa
                chcel uĹľĂ­vateÄľ prekliknĂşĹĄ na inĂş ÄŤasĹĄ strĂˇnky.
              </p>
            </div>
            <div className="card__back">
              <ul className="card__list">
                <li>
                  <h4 className="card__tools-heading">PouĹľitĂ© technolĂłgie</h4>
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
                VyskĂşĹˇaj to
              </a>
            </div>
          </div>
        </div>
        <div className="card card--3 reveal-box reveal">
          <div className="card__content">
            <div className="card__front card__front--3">
              <i className="ph-shield-check card__icon"></i>
              <h3 className="card__title">Cyberix</h3>
              <p className="card__text">
                Corporate landing page for a Dubai-based cybersecurity
                consultancy. Built with Nuxt 3, TypeScript and Tailwind CSS,
                with i18n readiness and CRM-integrated lead capture.
              </p>
            </div>
            <div className="card__back">
              <ul className="card__list card__list--compact">
                <li>
                  <h4 className="card__tools-heading">Stack + features</h4>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Nuxt 3, Vue 3, TypeScript</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Tailwind CSS, dark responsive UI</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>@nuxtjs/i18n localization-ready</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Nodemailer + Google reCAPTCHA v3</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Pipedrive Web Forms CRM integration</p>
                </li>
              </ul>
              <a
                href="https://cyberix.solutions"
                className="btn btn--card btn--animated"
              >
                Live website
              </a>
            </div>
          </div>
        </div>
        <div className="card card--4 reveal-box reveal">
          <div className="card__content">
            <div className="card__front card__front--4">
              <i className="ph-map-pin-area card__icon"></i>
              <h3 className="card__title">Walkis</h3>
              <p className="card__text">
                Produkcna Flutter appka pre Android/iOS. Hands-free turisticky
                sprievodca, ktory podla geolokacie automaticky spusta lokalne
                video tour content pri vstupe do radiusu bodov zaujmu.
              </p>
            </div>
            <div className="card__back">
              <ul className="card__list card__list--compact">
                <li>
                  <h4 className="card__tools-heading">Stack + architecture</h4>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Flutter / Dart (Android + iOS)</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Firebase Firestore (split data model)</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>Geolocator + GeoFlutterFire Plus (real-time geofencing)</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>video_player + Chewie</p>
                </li>
                <li className="card__list-item card__list-item--text">
                  <i className="ph-check-circle card__list-icon"></i>
                  <p>
                    Google Maps, 4-language localization, flavor builds,
                    Analytics + Crashlytics
                  </p>
                </li>
              </ul>
              <a
                href="https://play.google.com/store/apps/details?id=eu.denevy.walkis&hl=sk"
                className="btn btn--card btn--animated"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
