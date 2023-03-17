import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Snow } from "./Snow";
import "animate.css";
import headerImg from "../assets/img/Lapin2.gif";
import bottomImg from "../assets/img/trees.png";
// import { useInView } from "react-intersection-observer";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;

  const toRotate = useMemo(
    () => [
      "Web Developer",
      "Développeur Fullstack",
      "Développeur Front-End",
      "Développeur Back-End",
    ],
    []
  );

  /* A useEffect hook that is used to create a typing effect. */
  useEffect(() => {
    function tick() {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200);
      }
    }

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [
    text,
    delta,
    loopNum,
    toRotate,
    isDeleting,
    setText,
    setDelta,
    setIsDeleting,
    setLoopNum,
  ]);

  // const [ref, inView] = useInView({
  //   threshold: 0,
  // });

  const moveImage = () => {
    const headerImg = document.getElementById("header-img");
    if (headerImg.classList.contains("moveRight")) {
      headerImg.classList.remove("moveRight");
      headerImg.classList.add("moveLeft");
    } else {
      headerImg.classList.remove("moveLeft");
      headerImg.classList.add("moveRight");
    }
  };

  const moon = document.querySelector(".moon");

  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX - window.innerWidth / 2) / 20;
    const y = (event.clientY - window.innerHeight / 2) / 20;

    if (moon) {
      moon.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  return (
    <section className="banner" id="home">
      <Snow />
      <Container className="container-banner">
        <Row>
          <Col>
            <div /*</Col>ref={ref}*/>
              <div
              // className={
              //   inView ? "animate__animated animate__slideInDown" : ""
              // }
              >
                <span className="tagline"> Bienvenue sur mon Portfolio</span>

                <h1>
                  {`Bonjour ! Je suis `}

                  <br />
                  <div className="wrapContainer" style={{ minHeight: "2em" }}>
                    <span className="wrap">{text}</span>
                  </div>
                </h1>

                <p>
                  Je m'appelle Pierre Berenguer, je suis Développeur Web
                  fullstack.
                </p>
                <p>
                  {" "}
                  Passionné par mon métier et attentif aux besoins de mes
                  clients et collaborateurs j'ai à cœur d'apporter la solution
                  la plus adaptée à leurs besoins et à leurs envies.
                </p>
                <button
                  onClick={() => {
                    const contact = document.querySelector("#connect");
                    contact.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {" "}
                  Echangeons ensemble ! <ArrowRightCircle size={25} />{" "}
                </button>
              </div>
            </div>

            <div className="moon" />
          </Col>
        </Row>
      </Container>
      <img
        src={headerImg}
        alt="Header Img"
        className="new-header-img"
        id="header-img"
        onClick={moveImage}
      />
      <img src={bottomImg} alt="Bottom Img" className="bottom-img" />
    </section>
  );
};
