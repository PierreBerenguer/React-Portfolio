import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "../assets/img/React.png";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import javascript from "../assets/img/javascript.png";
import mysql from "../assets/img/mysql.png";
import php from "../assets/img/php.png";
import dotNet from "../assets/img/dotNet.png";
import "animate.css";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div ref={ref}>
              <div
                className={
                  inView ? "animate__animated animate__slideInLeft" : ""
                }
              >
                <div className="skill-bx">
                  <h2>Skills</h2>
                  <p>
                    Grace à mes expériences passées j'ai pu acquérir différentes
                    compétences sur différents langages et je suis, par
                    conséquent, apte à développer vos applications web via
                    plusieurs technologies selon vos préférences et les besoins
                    de votre application.{" "}
                  </p>
                  <p>
                    {" "}
                    N'hésitez pas à me contacter pour plus de renseignements.
                  </p>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="skill-slider"
                  >
                    <div className="item">
                      <img src={html} alt="HTML5" />
                      <h5>HTML5</h5>
                    </div>

                    <div className="item">
                      <img src={css} alt="CSS3" />
                      <h5>CSS3</h5>
                    </div>

                    <div className="item">
                      <img src={javascript} alt="Javascript" />
                      <h5>Javascript</h5>
                    </div>

                    <div className="item">
                      <img src={php} alt="PHP" />
                      <h5>PHP</h5>
                    </div>

                    <div className="item">
                      <img src={mysql} alt="MySQL" />
                      <h5>MySQL</h5>
                    </div>

                    <div className="item">
                      <img src={dotNet} alt="Dot Net" />
                      <h5>.Net</h5>
                    </div>

                    <div className="item">
                      <img src={React} alt="React JS" />
                      <h5>React JS</h5>
                    </div>

                    <div className="item">
                      <img src={React} alt="React Native" />
                      <h5>React Native</h5>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
