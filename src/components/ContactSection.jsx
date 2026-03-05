import { useState } from "react";

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: (formData.get("name") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      message: (formData.get("text") || "").toString().trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ type: "error", message: "Vypln prosim vsetky polia." });
      return;
    }

    try {
      setIsSending(true);
      const endpoint = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.error || "Spravu sa nepodarilo odoslat.");
      }

      form.reset();
      setStatus({ type: "success", message: "Sprava bola odoslana." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Doslo k chybe." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section-contact">
      <div id="contact" className="contact">
        <div className="contact__heading-box reveal-box reveal">
          <h1 className="heading-primary contact__heading">Kontakt</h1>
          <p className="contact__subheading">Napis mi</p>
        </div>

        <div className="contact__adress reveal-box reveal">
          <h3 className="heading-tertiary contact__heading-tertiary--1">Moja adresa</h3>

          <div className="contact__contact-box contact__contact-box--1">
            <div className="contact__icon-box">
              <i className="ph-map-pin-line contact__icon-adress"></i>
            </div>

            <div className="contact__adress-box">
              <p className="contact__text">Slovakia</p>
              <p className="contact__text">Dlhe Hony 3251/66</p>
              <p className="contact__text">058 01 Poprad</p>
            </div>
          </div>

          <div className="contact__contact-box contact__contact-box--2">
            <div className="contact__icon-box">
              <i className="ph-device-mobile contact__icon-adress"></i>
            </div>

            <div className="contact__adress-box">
              <p className="contact__text">+421 123 456 789</p>
            </div>
          </div>

          <div className="contact__contact-box contact__contact-box--3">
            <div className="contact__icon-box">
              <i className="ph-envelope contact__icon-adress"></i>
            </div>

            <div className="contact__adress-box">
              <p className="contact__text">Bryan.Richard.Portfolio@gmail.com</p>
            </div>
          </div>

          <h3 className="heading-tertiary contact__heading-tertiary--2">Sleduj ma</h3>
          <div className="contact__contact-box">
            <a href="#" className="contact__icon-follow contact__icon-follow--facebook">
              <i className="ph-facebook-logo"></i>
            </a>
            <a href="#" className="contact__icon-follow contact__icon-follow--twitter">
              <i className="ph-twitter-logo"></i>
            </a>
            <a href="#" className="contact__icon-follow contact__icon-follow--instagram">
              <i className="ph-instagram-logo"></i>
            </a>
            <a href="#" className="contact__icon-follow contact__icon-follow--linkedin">
              <i className="ph-linkedin-logo"></i>
            </a>
            <a href="#" className="contact__icon-follow contact__icon-follow--pinterest">
              <i className="ph-pinterest-logo"></i>
            </a>
          </div>
        </div>

        <div className="contact__location reveal-box reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.975276126868!2d20.289041715681154!3d49.04909367930662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3a97eee80cfd%3A0xd35e4c8654fd027f!2sDlh%C3%A9%20Hony%2C%20058%2001%20Poprad!5e0!3m2!1scs!2ssk!4v1647682078373!5m2!1scs!2ssk"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="contact__map"
          ></iframe>
        </div>

        <div className="contact__form reveal-box reveal">
          <div className="contact__form-box">
            <h2 className="heading-secondary">Napis mi</h2>
            <form className="form" onSubmit={handleContactSubmit}>
              <div className="form__group form__group--1">
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder="Cele meno"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Cele meno
                </label>
              </div>

              <div className="form__group form__group--2">
                <input
                  type="email"
                  name="email"
                  className="form__input"
                  placeholder="Emailova adresa"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Emailova adresa
                </label>
              </div>

              <div className="form__group form__group--3">
                <textarea
                  name="text"
                  className="form__textarea"
                  placeholder="Tvoja sprava..."
                  id="textarea"
                  rows="10"
                  required
                ></textarea>
              </div>

              {status.message ? (
                <p className={`form__status form__status--${status.type}`}>{status.message}</p>
              ) : null}

              <div className="form__group form__group--4">
                <button type="submit" className="btn btn--white btn__mail" disabled={isSending}>
                  {isSending ? "Odosielam..." : "Napis mi ->"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
