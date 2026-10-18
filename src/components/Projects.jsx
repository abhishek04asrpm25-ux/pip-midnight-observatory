import { useState } from "react";
import { Music, Moon, Cloud } from "lucide-react";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      number: "01",
      icon: Music,
      title: "Lullaby Lab",
      description:
        "Pip designs tiny lullabies that help sleepy creatures drift into their dreams.",
      extra:
        "Every lullaby starts with three ingredients: a gentle melody, a sleepy rhythm, and a little midnight magic.",
    },
    {
      number: "02",
      icon: Moon,
      title: "Nightlight Collection",
      description:
        "Warm bedside lights designed to make every midnight feel a little safer.",
      extra:
        "Each nightlight is designed to glow softly without disturbing the dreams already in progress.",
    },
    {
      number: "03",
      icon: Cloud,
      title: "Dream Delivery Routes",
      description:
        "Pip plans magical rooftop routes to deliver carefully crafted dreams.",
      extra:
        "Pip studies the moon, clouds, rooftops, and wind patterns before choosing the perfect delivery route.",
    },
  ];

  const handleProjectClick = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <p className="section-eyebrow">PIP'S WORKSHOP</p>

        <h2>Things I make after bedtime.</h2>

        <p>
          A few of Pip's favorite creations from the Midnight Nursery.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const isActive = activeProject === index;

          return (
            <article
              className={`project-card ${isActive ? "project-active" : ""}`}
              key={project.number}
            >
              <Icon size={40} strokeWidth={1.5} />

              <p className="project-number">{project.number}</p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              {isActive && (
                <p className="project-extra">
                  ✦ {project.extra}
                </p>
              )}

              <button
                type="button"
                onClick={() => handleProjectClick(index)}
                aria-expanded={isActive}
              >
                {isActive ? "Close ✦" : "Explore ✦"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;