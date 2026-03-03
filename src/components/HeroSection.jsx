export default function HeroSection() {
  return (
    <section id="home" className="section-hero">
      <div className="hero">
        <div className="hero__text-box">
          <p className="hero__text--welcome hero__text-showing-up">
            Vítam Vás na mojom portfóliu
          </p>
          <h2 className="heading-secondary pr hero__text-showing-up hero__text-showing-up--1">
            Som <span className="hero__text-changing"></span>
          </h2>
          <p className="hero__text--location hero__text-showing-up">
            Pochádzam zo Slovenska, Poprad
          </p>
          <a
            className="btn btn--blue btn--animated hero__text-showing-up scroll-to"
            data-about="about"
          >
            Niečo viac o mne
          </a>
        </div>
      </div>
    </section>
  );
}
