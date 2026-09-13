function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI & Data Engineering",
      description:
        "Worked on web scraping and data engineering for U.S. government drug information using Python and Selenium. Also worked on machine learning and deep learning model training for breast cancer analysis using Python and TensorFlow.",
      technologies:
        "Python · Selenium · Web Scraping · TensorFlow · Machine Learning · Deep Learning",
    },
{
  number: "02",
  title: "Serviqe.com",
  description:
    "A platform that connects people with trusted local professionals such as electricians, labourers, beauticians and other service providers through a subscription-based model. Built from the ground up, including product architecture, UI/UX, development and deployment.",
  technologies:
    "MERN · Supabase · UI/UX · Product Architecture · Deployment",
  link: "https://serviqe.com/",
},
    {
      number: "03",
      title: "Healthcare AI Platform",
      description:
        "An AI-based healthcare platform currently being researched and developed to help doctors bring previous and current patient health data together, compare health parameters such as blood pressure and SpO₂ over time, and support better decision-making.",
      technologies:
        "AI · Machine Learning · Healthcare Data · Python · Data Analytics",
    },
  ];

  return (
    <section className="projects" id="projects">

      {/* Section Header */}
      <div className="projects-header">
        <span className="section-number">02</span>
        <span className="section-label">PROJECTS</span>
      </div>

      {/* Section Introduction */}
      <div className="projects-intro">
        <h2>
          SELECTED
          <br />
          WORK.
        </h2>

        <p>
          A selection of work spanning data engineering,
          artificial intelligence and products I've designed
          and built from the ground up.
        </p>
      </div>

      {/* Projects List */}
      <div className="projects-list">

        {projects.map((project) => (
          <article
            className="project-item"
            key={project.number}
          >

            <span className="project-number">
              {project.number}
            </span>

<div className="project-main">
  <h3>
    {project.link ? (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        {project.title}
        <span>↗</span>
      </a>
    ) : (
      project.title
    )}
  </h3>

  <p>{project.description}</p>

  <span className="project-technologies">
    {project.technologies}
  </span>
</div>

            <span className="project-arrow">
              ↗
            </span>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;