import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import rabbit from "../assets/img/LapinRotated.gif";
import witcher from "../assets/img/The Witcher.mp4";
import appMobile from "../assets/img/mobile.mp4";
import BD from "../assets/img/BD.mp4";
import commandes from "../assets/img/Commandes.mp4";
import maquette from "../assets/img/maquette.png";
import "animate.css";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const projects = [
    {
      title: "Fan Site The Witcher",
      description: "Projet perso Font-End",
      mediaType: "video",
      mediaUrl: witcher,
      mediaClass: "",
    },

    {
      title: "Projet JavaScript/Json",
      description:
        "Projet Front-End de vente de BD avec Panier et utilisation d'API ",
      mediaType: "video",
      mediaUrl: BD,
      mediaClass: "",
    },

    {
      title: "Application Mobile",
      description: "Application réalisée en React Native",
      mediaType: "video",
      mediaUrl: appMobile,
      mediaClass: "mobile",
    },
    {
      title: "Application de prise de commandes en ASP.NET",
      description:
        "Plateforme de prise de commandes pour commerciaux lors de salons réalisée dans un environnement MVC .NET",
      mediaType: "video",
      mediaUrl: commandes,
      mediaClass: "",
    },
    {
      title: "Votre projet",
      description: "Votre prochain projet ici",
      mediaType: "image",
      mediaUrl: maquette,
      mediaClass: "",
    },
    {
      title: "Votre projet",
      description: "Votre prochain projet ici",
      mediaType: "image",
      mediaUrl: maquette,
      mediaClass: "",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0,
  });

  const Hide = () => {
    const rabbit = document.getElementById("rabbit");
    if (rabbit.classList.contains("hidden")) {
      rabbit.classList.remove("hidden");
      rabbit.classList.add("shown");
    } else {
      rabbit.classList.remove("shown");
      rabbit.classList.add("hidden");
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <img
              src={rabbit}
              alt="Rabbit"
              className={`rabbit ${inView ? "animate-rabbit" : ""}`}
              id="rabbit"
              onClick={Hide}
            />
            <div ref={ref}>
              <div
                className={
                  inView ? "animate__animated animate__slideInLeft" : ""
                }
              >
                <h2> Projets</h2>
                <p>Quelques exemples de projets publics réalisés</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row className="videos">
                        <Col xs={12} md={6} className="h-100">
                          {
                            projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })[0]
                          }
                        </Col>
                        <Col xs={12} md={6} className="h-100">
                          {
                            projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })[1]
                          }
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="videos">
                        <Col xs={12} md={6} className="h-100">
                          {
                            projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })[2]
                          }
                        </Col>
                        <Col xs={12} md={6} className="h-100">
                          {
                            projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })[3]
                          }
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="videos">
                        <Col xs={12} md={6} className="h-100">
                          {
                            projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })[4]
                          }
                        </Col>
                        <Col xs={12} md={6} className="h-100">
                          {
                            projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })[5]
                          }
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
