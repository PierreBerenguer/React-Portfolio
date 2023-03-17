import { useState } from "react";
import { ValidationError } from "@formspree/react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Envoyer");
  var form = document.getElementById("contact-form");
  var statusMessage = document.getElementById("status-message");

  const onSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setButtonText("Envoi en cours...");
        setTimeout(function () {
          setButtonText("Message envoyé !");
        }, 2000);
        statusMessage.classList.remove("error");
      } else {
        setButtonText("Envoi en cours...");
        setTimeout(function () {
          setButtonText("Oups... Quelque chose ne va pas...");
        }, 2000);
        setTimeout(function () {
          statusMessage.innerHTML =
            '<div class="alert alert-danger mt-5" ><i class="fa fa-times "></i> <a>Votre e-mail n\'a pas été envoyé. Si cela persiste contactez moi directement via Linkedin ou par mail.<a></div>';
          statusMessage.classList.add("error");
        }, 2000);
      }
    };
    xhr.send(formData);
  };

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <section className="contact" id="connect">
      <Container>
        <div ref={ref}>
          <div className={inView ? "animate__animated animate__slideInUp" : ""}>
            <Row className="align-items-center">
              <Col md={6}>
                <img src={contactImg} alt="Contact Me" className="contactImg" />
              </Col>
              <Col md={6}>
                <h2>Entrons en Contact</h2>
                <form
                  action="https://formspree.io/f/xlekbedj"
                  onSubmit={onSubmit}
                  method="POST"
                  id="contact-form"
                >
                  <Row>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        placeholder="Prénom"
                        name="firstName"
                        id="firstName"
                        required
                      />
                      <ValidationError prefix="Prenom" field="firstName" />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        placeholder="Nom"
                        name="lastName"
                        id="lastName"
                        required
                      />
                      <ValidationError prefix="Nom" field="lastName" />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        required
                      />
                      <ValidationError prefix="Email" field="email" />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="tel"
                        placeholder="N° Téléphone"
                        name="tel"
                        id="tel"
                      />
                      <ValidationError prefix="Tel" field="tel" />
                    </Col>
                    <Col className="px-1">
                      <textarea
                        rows="6"
                        placeholder="Message"
                        name="message"
                        id="message"
                        required
                      ></textarea>
                      <ValidationError prefix="Message" field="message" />

                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                    <div>
                      <p id="status-message"></p>
                    </div>
                  </Row>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};
