import ProjectCard from "./components/ProjectCard.jsx";

// import "./landingPage.css";
import "./landingPage.css";

export default function LandingPage() {
  const projects = [
    {
      name: "Tenzies",
      description:
        "A fun dice matching game made with React and smooth CSS animations.",
    },
  ];

  return (
    <main id="main-container">
      <section id="greetings">
        <h1>
          Hi there!
          <br /> <span id="my-name">I'm Pavan Mahesh.</span>
        </h1>
        <p>
          Here are some cool React projects I've built.
          <br /> Hope you enjoy exploring them!
        </p>
      </section>

      <section id="projects">
        <ProjectCard
          name={projects[0].name}
          description={projects[0].description}
        />
      </section>
    </main>
  );
}
