import { Link } from "react-router";

export default function ProjectInfo(props) {
  return (
    <Link to={"/" + props.name.toLowerCase()}>
      <article className="project-card">
        <h3 className="name">{props.name}</h3>
        <span className="description">{props.description}</span>
      </article>
    </Link>
  );
}
