import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  mediaType,
  mediaUrl,
  mediaClass,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        {mediaType === "video" ? (
          <div
            className={`project-container ${
              mediaClass === "mobile" ? "mobile" : ""
            }`}
          >
            <video
              src={mediaUrl}
              alt="Project video"
              controls
              autoPlay
              loop
              muted
            />
          </div>
        ) : (
          <div className="project-container">
            <img
              src={mediaUrl}
              alt="Project image"
              className="project-images"
            />
          </div>
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
