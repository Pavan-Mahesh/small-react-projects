import ProjectCard from "./ProjectCard.jsx";

import LandingPageCss from "./landingPage.module.css";

export default function LandingPage() {
  const projects = [
    {
      name: "Tenzies",
      url: "/tenzies",
      description:
        "A fun dice matching game made with React and smooth CSS animations.",
    },
    {
      name: "Assembly: Endgame",
      url: "/endgame",
      description:
        "A hangman-inspired game where each wrong guess erases a language — lose, and you're coding in Assembly!",
    },
  ];

  return (
    <div className={LandingPageCss["landing-page-body"]}>
      <main className={LandingPageCss["container"]}>
        <section className={LandingPageCss["greetings"]}>
          <h1>
            Hi there!
            <br /> <span id="my-name">I'm Pavan Mahesh.</span>
          </h1>
          <p>
            Here are some cool React projects I've built.
            <br /> Hope you enjoy exploring them!
          </p>
        </section>

        <section className={LandingPageCss["projects"]}>
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              url={project.url}
              name={project.name}
              description={project.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
