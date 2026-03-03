export default function AboutSection() {
  return (
<section id="about" className="section-aboutme">
        <div className="aboutme">
          <div
            className="aboutme__box aboutme__box--primary reveal-box--primary reveal--primary"
          >
            <div className="aboutme__heading-box">
              <h1 className="heading-primary aboutme__heading">Viac o mňe</h1>
              <p className="aboutme__subheading">Zisti kto som</p>
            </div>

            <div className="aboutme__author">
              <img src="/img/Me.jpg" alt="Bryan Richard Vandas" />
            </div>

            <div className="aboutme__text-box">
              <p className="aboutme__text u-text-tac">
                Som Bryan Richard Vandas, samouk čo sa týka programovania
              </p>
              <p className="aboutme__text">
                Vyštudoval som vysokú školu v Žiline, konkrétne strojne
                inžinierstvo, avšak v poslednom roku som si uvedomoval viac a
                viac, že ma tento odbor nenapĺňa a nespĺňa moje predstavy s tým
                prečo som tam šiel a začal som sa pomaly hľadať, čo by ma mohlo
                zaujímať, baviť a ma svetlu budúcnosť.
              </p>
              <p className="aboutme__text">
                Avšak nájsť niečo čo by človeka napĺňalo a malo aj dobru víziu
                do budúcna, takáto myšlienka nepríde zo dna na deň a človek musí
                nad tým dlhšie premýšľať.
              </p>
              <button
                data-portfolio="portfolio"
                className="btn btn--blue btn--cv btn--animated scroll-to"
              >
                Portfólio
              </button>
            </div>
          </div>

          <div
            className="aboutme__box aboutme__box--secondary aboutme__box--secondary-1 reveal-box reveal"
          >
            <div className="aboutme__text-box">
              <h3 className="aboutme__text-subheading heading-tertiary">
                Moja cesta
              </h3>
              <p className="aboutme__text">
                Ako som spomínal vyššie všetko sa to začalo v poslednom ročníku
                Vysokej školy, kde človek už cíti, že skutočný život prichádza a
                premýšľa viac o svojej budúcnosti ako o tom čo ho čaká ďalší
                ročník. Po dlhšom rozmýšľaní a prečítaní niekoľko kníh o osobnom
                rozvoji som si sadol a spísal aktivity, ktoré ma napĺňajú, bavia
                a vyberal z nich čo by reálne malo budúcnosť.
              </p>
              <p className="aboutme__text">
                Nakoniec z toho vzniklo, že programovanie by mohla byt ta
                správna cesta, keďže ma stále udivovalo ako sa tento sektor
                vyvinul, napredoval posledné roky, čo sa v ňom da spraviť s
                myšlienkou, že to ešte nie je koniec a bude to napredovať stále
                ďalej.
              </p>
              <p className="aboutme__text">
                Práca s počítacom ma bavila už od útleho veku, dokázal som pri
                ňom presedieť niekoľko hodín bez toho aby som musel rozmýšľať
                nad inými vecami a mam par kamarátov, ktorí sa tomu venujú či už
                vďaka škole alebo podobnou cestou ako som šiel ja.
              </p>
            </div>
          </div>

          <div
            className="aboutme__box aboutme__box--secondary aboutme__box--secondary-2 reveal-box reveal"
          >
            <div className="composition">
              <div className="composition__photo-box">
                <img
                  src="/img/Hobby-1.jpg"
                  className="composition__photo composition__photo--p1"
                  alt="Working out"
                />
                <img
                  src="/img/Hobby-2.jpg"
                  className="composition__photo composition__photo--p2"
                  alt="Spending time in nature"
                />
                <img
                  src="/img/Hobby-3.jpg"
                  className="composition__photo composition__photo--p3"
                  alt="Playing ice hockey"
                />
              </div>
            </div>
          </div>

          <div
            className="aboutme__box aboutme__box--secondary aboutme__box--secondary-3 reveal-box reveal"
          >
            <div className="composition">
              <div className="composition__photo-box">
                <img
                  src="/img/Hobby-4.jpg"
                  className="composition__photo composition__photo--p4"
                  alt="Programming"
                />
                <img
                  src="/img/Hobby-5.jpg"
                  className="composition__photo composition__photo--p5"
                  alt="Reading books"
                />
                <img
                  src="/img/Hobby-6.jpg"
                  className="composition__photo composition__photo--p6"
                  alt="Programming"
                />
              </div>
            </div>
          </div>

          <div
            className="aboutme__box aboutme__box--secondary aboutme__box--secondary-4 reveal-box reveal"
          >
            <div className="aboutme__text-box">
              <h3 className="aboutme__text-subheading heading-tertiary">
                Pokračovanie
              </h3>
              <p className="aboutme__text">
                Oficiálne sa programovaniu venujem od začiatku piateho ročníka,
                kde sa ta cela cesta vyvíjala s prestávkami keďže som musel
                stíhať jednak jednotlivé predmety a zadania na nich spolu s
                diplomovou prácou.
              </p>
              <p className="aboutme__text">
                Po naštudovaní si materiálov online a prediskutovaní sa
                kamarátmi som sa vydal cestou Front-endu, keďže tá vstupná
                bariéra je ideálnejšia vďaka HTML a CSS. Momentálne sa k tomu
                snažím pridať Javascript, kde pri pochopení tohto
                programovacieho jazyka by som rad vrhol na nejakú knižnicu či už
                React alebo framework Vue.js.
              </p>
              <p className="aboutme__text">
                Táto cela cesta je ešte len na začiatku, kde po zvládnutí
                Front-endu by som sa rad naučil aj Back-end aby sa zo mňa mohol
                stáť Full-stack programátor, avšak cesta programátora je veľmi
                dlhá a nikto nevie kde úplne skonči lebo vzdelávať sa v tomto
                odbore je potrebne celý život.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
