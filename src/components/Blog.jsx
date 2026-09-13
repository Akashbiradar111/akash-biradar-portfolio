function Blog() {
const topics = [
  {
    number: "01",
    title: "AI & Machine Learning",
    description:
      "Exploring practical applications of artificial intelligence and machine learning, with a focus on building solutions that solve real-world problems.",
    status: "CURRENT",
  },
  {
    number: "02",
    title: "Healthcare Technology",
    description:
      "Researching how AI and structured health data can help doctors understand patient history, compare health trends and make better-informed decisions.",
    status: "CURRENT",
  },
  {
    number: "03",
    title: "WhatsApp Automation",
    description:
      "Exploring WhatsApp automation using the Meta Developer platform, webhooks and backend integrations to build automated communication workflows.",
    status: "CURRENT",
  },
  {
    number: "04",
    title: "Building Products",
    description:
      "Learning through the process of taking ideas from concept to real products — from architecture and UI/UX to development, deployment and iteration.",
    status: "CURRENT",
  },
];

  return (
    <section className="blog" id="blog">

      {/* Section Header */}
      <div className="blog-header">
        <span className="section-number">04</span>
        <span className="section-label">EXPLORING</span>
      </div>

      {/* Introduction */}
      <div className="blog-intro">
        <h2>
          CURRENTLY
          <br />
          EXPLORING.
        </h2>

        <p>
          Things I'm currently learning,
          building and researching across
          technology, artificial intelligence
          and product development.
        </p>
      </div>

      {/* Topics List */}
      <div className="blog-list">

        {topics.map((topic) => (
          <article
            className="blog-item"
            key={topic.number}
          >

            <span className="blog-number">
              {topic.number}
            </span>

            <div className="blog-main">
              <h3>{topic.title}</h3>

              <p>{topic.description}</p>
            </div>

            <span className="blog-year">
              {topic.status}
            </span>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Blog;