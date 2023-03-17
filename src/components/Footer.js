import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon2.svg";
import "animate.css";
import { useInView } from "react-intersection-observer";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 * The useInView hook returns a reference to the element and a boolean value that indicates whether the
 * element is in view.
 */
export const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Page bientôt disponible !
    </Tooltip>
  );

  return (
    <footer className="footer">
      <Container>
        <div ref={ref}>
          <div className={inView ? "animate__animated animate__slideInUp" : ""}>
            <Row className="align-items-center">
              <Col sm={6}></Col>
              <Col sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/pierre-berenguer-6448001b7">
                    <img src={navIcon1} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/PierreBerenguer">
                    <img src={navIcon2} alt="Github" />
                  </a>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <a href="#">
                      <img src={navIcon3} alt="FaceBook" />
                    </a>
                  </OverlayTrigger>
                </div>
                <p>CopyRight 2023. All Right Reserved Berenguer Pierre</p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </footer>
  );
};
