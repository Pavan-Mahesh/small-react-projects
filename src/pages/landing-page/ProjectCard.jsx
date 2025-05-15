import { Link } from "react-router-dom";

import LandingPageCss from "./landingPage.module.css";

export default function ProjectInfo(props) {
  return (
    <Link to={props.url}>
      <article className={LandingPageCss["project-card"]}>
        <h3 className={LandingPageCss["name"]} title={props.name}>
          {props.name}
        </h3>
        <div
          className={LandingPageCss["description"]}
          title={props.description}
        >
          {props.description}
        </div>
      </article>
    </Link>
  );
}
