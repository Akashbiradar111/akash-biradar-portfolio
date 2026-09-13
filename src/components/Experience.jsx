function Experience() {
  const experiences = [
    {
      number: "01",
      role: "MERN Stack Developer",
      company: "TheStackly",
      period: "JUN 2026 — PRESENT",
      description:
        "Working as a frontend developer on an AI-powered healthcare and telemedicine ecosystem, building web applications with React.js. Also contributing to the mobile application using React Native and TypeScript.",
      technologies:
        "React.js · React Native · TypeScript · MERN · Healthcare AI",
    },
    {
      number: "02",
      role: "Software Engineer",
      company: "Mindsnxt",
      period: "FEB 2025 — MAR 2026",
      description:
        "Worked across three U.S.-based client projects involving data scraping, machine learning, deep learning and backend development. During my internship, I worked on drug information web scraping using Python and Selenium and contributed to breast cancer ML/DL model training using Python and TensorFlow. Later worked as a Node.js backend developer on Sigmatic.ai and ShopLC, including third-party integrations and tools such as Klaviyo and GA4.",
      technologies:
        "Python · Selenium · TensorFlow · ML · DL · Node.js · Klaviyo · GA4",
    },
    {
      number: "03",
      role: "Founder & Full-Stack Developer",
      company: "Serviqe",
      period: "2026",
      description:
        "Built and launched Serviqe, an independent product connecting people with trusted local professionals such as electricians, labourers, beauticians and other service providers. Designed and developed the product from the ground up, including architecture, UI/UX, development and deployment.",
      technologies:
        "MERN · Supabase · React · Node.js · UI/UX · Product Architecture · Deployment",
    },
  ];

  return (
    <section className="experience" id="experience">

      <div className="experience-header">
        <span className="section-number">03</span>
        <span className="section-label">EXPERIENCE</span>
      </div>

      <div className="experience-intro">
        <h2>
          WHERE I'VE
          <br />
          WORKED.
        </h2>

        <p>
          My experience across software development,
          data science and artificial intelligence,
          building products and solutions for real-world
          problems.
        </p>
      </div>

      <div className="experience-list">

        {experiences.map((experience) => (
          <article
            className="experience-item"
            key={experience.number}
          >

            <span className="experience-number">
              {experience.number}
            </span>

            <div className="experience-main">

              <div className="experience-top">
                <div>
                  <h3>{experience.role}</h3>

                  <span className="experience-company">
                    {experience.company}
                  </span>
                </div>

                <span className="experience-period">
                  {experience.period}
                </span>
              </div>

              <p>{experience.description}</p>

              <span className="experience-technologies">
                {experience.technologies}
              </span>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Experience;