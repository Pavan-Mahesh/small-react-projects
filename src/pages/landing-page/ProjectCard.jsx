import { Link } from "react-router";

import LandingPageCss from "./landingPage.module.css";

export default function ProjectInfo(props) {
  return (
    <Link to={"/" + props.name.toLowerCase()}>
      <article className={LandingPageCss["project-card"]}>
        <h3 className={LandingPageCss["name"]}>{props.name}</h3>
        <span className={LandingPageCss["description"]}>
          {props.description}
        </span>
      </article>
    </Link>
  );
}
