import React from "react";
import { FaPlay, FaCode } from "react-icons/fa";
import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  return (
    <div
      key={id}
      className="singleProject"
      style={{ backgroundColor: theme.primary400 }}
    >
      <div className="projectContent">
        <h2
          id={name.replace(" ", "-").toLowerCase()}
          style={{ color: theme.secondary }}
        >
          {name}
        </h2>
        <img src={image ? image : placeholder} alt={name} />
        <div className="project--showcaseBtn">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="iconBtn"
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
              .replace(" ", "-")
              .toLowerCase()}-demo`}
          >
            <FaPlay
              id={`${name.replace(" ", "-").toLowerCase()}-demo`}
              style={{ color: `${theme.secondary}` }}
              className="icon"
              aria-label="Demo"
            />
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="iconBtn"
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
              .replace(" ", "-")
              .toLowerCase()}-code`}
          >
            <FaCode
              id={`${name.replace(" ", "-").toLowerCase()}-code`}
              style={{ color: `${theme.secondary}` }}
              className="icon"
              aria-label="Code"
            />
          </a>
        </div>
      </div>
      <p
        className="project--desc"
        style={{
          background: theme.secondary,
          color: theme.tertiary,
        }}
      >
        {desc}
      </p>
      <div
        className="project--lang"
        style={{
          background: theme.secondary,
          color: theme.tertiary80,
        }}
      >
        {tags.map((tag, id) => (
          <span key={id}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default SingleProject;
