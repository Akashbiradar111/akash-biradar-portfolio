import { useRef, useState } from "react";
import { createPortal } from "react-dom";

function SecretAbout() {
  const [showPage, setShowPage] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const secretPageRef = useRef(null);

  /* ========================================
     SECRET PAGE SCROLL
  ======================================== */

  const handleSecretScroll = () => {
    if (!secretPageRef.current) return;

    setShowBackToTop(secretPageRef.current.scrollTop > 500);
  };

  /* ========================================
     SECRET PAGE → TOP
  ======================================== */

  const scrollSecretToTop = () => {
    if (!secretPageRef.current) return;

    secretPageRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ========================================
     CLOSE SECRET PAGE
  ======================================== */

  const closeSecretPage = () => {
    setShowPage(false);
    setShowBackToTop(false);
  };

  return (
    <>
      {/* ========================================
          SECRET TRIGGER
      ======================================== */}

      <div className="secret-about">
        <button
          type="button"
          className="secret-trigger"
          onClick={() => setShowPage(true)}
        >
          <span>There’s more to me</span>
          <span>↗</span>
        </button>
      </div>


      {/* ========================================
          FULL SCREEN SECRET PAGE
      ======================================== */}

      {showPage &&
        createPortal(
          <div
            ref={secretPageRef}
            className="secret-page"
            onScroll={handleSecretScroll}
          >

            {/* ========================================
                CLOSE
            ======================================== */}

            <button
              type="button"
              className="secret-close"
              onClick={closeSecretPage}
            >
              CLOSE ×
            </button>


            {/* ========================================
                SECRET PAGE CONTENT
            ======================================== */}

            <div className="secret-page-content">


              {/* ========================================
                  INTRO
              ======================================== */}

              <div className="secret-page-label">
                BEYOND THE RESUME
              </div>

              <h2>
                THERE'S MORE
                <br />
                TO ME.
              </h2>

              <div className="secret-page-text">

                <p>
                  A resume usually tells you what someone has done.
                  This is the part that tells you a little about
                  how I think, what I build, and what I care about.
                </p>

                <p>
                  I enjoy building things from scratch, experimenting
                  with ideas and understanding how technology can
                  solve real problems.
                </p>

              </div>


              {/* ========================================
                  HOW I BUILD
              ======================================== */}

              <section className="secret-section">

                <div className="secret-section-label">
                  01 / HOW I BUILD
                </div>

                <h3>
                  I LEARN.
                  <br />
                  I BUILD.
                  <br />
                  I FIGURE IT OUT.
                </h3>

                <div className="secret-section-text">

                  <p>
                    My professional experience has never been limited
                    to one technology. I've worked across React,
                    React Native, Node.js, Python, databases, AI/ML,
                    APIs and cloud technologies.
                  </p>

                  <p>
                    Many times, I didn't start a project already
                    knowing everything I needed. I was given a problem,
                    a deadline and a new technology to figure out.
                  </p>

                  <p>
                    That's actually something I enjoy.
                  </p>

                  <p>
                    I learn quickly, understand the existing system,
                    experiment, make mistakes, debug them and keep
                    going until I understand what I'm building.
                  </p>

                </div>

                <div className="secret-tech-list">
                  <span>REACT</span>
                  <span>REACT NATIVE</span>
                  <span>NODE.JS</span>
                  <span>PYTHON</span>
                  <span>AI / ML</span>
                  <span>DATABASES</span>
                  <span>APIs</span>
                  <span>GOOGLE CLOUD</span>
                </div>

              </section>


              {/* ========================================
                  FAST LEARNER
              ======================================== */}

              <section className="secret-section">

                <div className="secret-section-label">
                  02 / ADAPTABILITY
                </div>

                <h3>
                  I MAY NOT KNOW
                  <br />
                  IT WHEN I START.
                  <br />
                  BUT I KNOW
                  <br />
                  HOW TO LEARN IT.
                </h3>

                <div className="secret-section-text">

                  <p>
                    My first company taught me this very early.
                  </p>

                  <p>
                    I was placed into a major project and given a
                    website with a simple requirement: extract the
                    required data. I had around two days to understand
                    the problem, learn what I needed and get ready
                    to build the scraper.
                  </p>

                  <p>
                    A few months later, I was moved into Node.js
                    backend development — something I had never
                    worked with before. I was given about a week
                    to learn it and start contributing to the project.
                  </p>

                  <p>
                    That project was for a U.S.-based client, and I
                    eventually worked directly with the client while
                    contributing to the backend.
                  </p>

                  <p>
                    Later, I worked with Klaviyo, which was completely
                    new to me as well. I learned it while working on
                    the actual project and understood how it fit into
                    the system.
                  </p>

                  <p>
                    The same pattern continued when I moved to my
                    next company. I joined the frontend team, learned
                    React in a limited amount of time and started
                    working on the product.
                  </p>

                  <p>
                    Then came React Native.
                  </p>

                  <p>
                    Another new technology.
                    <br />
                    Another learning curve.
                    <br />
                    Another opportunity to figure it out.
                  </p>

                </div>

              </section>


              {/* ========================================
                  AI ASSISTED DEVELOPMENT
              ======================================== */}

              <section className="secret-section">

                <div className="secret-section-label">
                  03 / HOW I CODE
                </div>

                <h3>
                  I USE AI.
                  <br />
                  I DON'T LET AI
                  <br />
                  THINK FOR ME.
                </h3>

                <div className="secret-section-text">

                  <p>
                    I use AI-assisted development and what people
                    commonly call "vibe coding".
                  </p>

                  <p>
                    But for me, that doesn't mean blindly copying
                    and pasting whatever an AI gives me.
                  </p>

                  <p>
                    I want to understand the flow, the architecture,
                    why something works, where it can fail and how
                    everything connects.
                  </p>

                  <p>
                    AI helps me move faster.
                    Understanding what I'm building helps me move
                    in the right direction.
                  </p>

                  <p className="secret-highlight">
                    The goal isn't just to make the code run.
                    <br />
                    The goal is to understand what I'm building.
                  </p>

                </div>

              </section>


              {/* ========================================
                  FRONTEND
              ======================================== */}

              <section className="secret-section">

                <div className="secret-section-label">
                  04 / WHAT I ENJOY
                </div>

                <h3>
                  I ENJOY
                  <br />
                  THE FRONTEND.
                </h3>

                <div className="secret-section-text">

                  <p>
                    Out of everything I work with, frontend
                    development is probably where I have the most fun.
                  </p>

                  <p>
                    Anyone can implement a design from Figma.
                    What interests me more is asking:
                  </p>

                  <p className="secret-quote">
                    "How can this feel better than the design?"
                  </p>

                  <p>
                    I enjoy thinking about layouts, interactions,
                    animations, visual hierarchy and the small details
                    that make a product feel different.
                  </p>

                  <p>
                    I naturally think creatively when I'm building
                    interfaces, and I like experimenting instead of
                    always following the obvious solution.
                  </p>

                  <p>
                    For me, frontend isn't just about making something
                    look correct.
                  </p>

                  <p className="secret-highlight">
                    It's about making someone want to use it.
                  </p>

                </div>

              </section>


              {/* ========================================
                  VYBECODERS
              ======================================== */}

              <section className="secret-section">

                <div className="secret-section-label">
                  05 / FIRST VENTURE
                </div>

                <h3>
                  I LEARNED
                  <br />
                  TO LEAD.
                </h3>

                <div className="secret-section-text">

                  <p>
                    Early in my career, I started a small venture
                    called VybeCoders.
                  </p>

                  <p>
                    It eventually shut down, but the experience
                    taught me things that no technology stack could.
                  </p>

                  <p>
                    With around nine months of professional
                    experience, I found a client, built a team of
                    6–7 people and successfully completed and
                    handed over the project to the client.
                  </p>

                  <p>
                    I handled client communication, team coordination,
                    task allocation, project delivery, UI/design work,
                    employee management and salary payments.
                  </p>

                  <p>
                    I also learned how to deal with unexpected
                    situations when people leave, responsibilities
                    change and things don't go according to plan.
                  </p>

                  <p className="secret-highlight">
                    Building software isn't only about writing code.
                    <br />
                    It's also about people, communication and
                    responsibility.
                  </p>

                </div>

              </section>


              {/* ========================================
                  SERVIQE
              ======================================== */}

              <section className="secret-section">

                <div className="secret-section-label">
                  06 / BUILDING ALONE
                </div>

                <h3>
                  THEN I BUILT
                  <br />
                  SERVIQE.
                </h3>

                <div className="secret-section-text">

                  <p>
                    After that experience, I decided to build
                    something completely on my own.
                  </p>

                  <p>
                    I started Serviqe from scratch.
                  </p>

                  <p>
                    There was no separate designer, backend developer
                    or DevOps person behind me. I had to figure out
                    the product myself.
                  </p>

                  <p>
                    I worked through the frontend, backend, database,
                    application flow, architecture, UI/UX and
                    deployment while learning technologies along
                    the way.
                  </p>

                  <p>
                    I used AI-assisted development heavily, but I
                    made a conscious effort to understand every part
                    of the system rather than becoming dependent on it.
                  </p>

                  <p>
                    Serviqe taught me how the different pieces of a
                    product connect:
                  </p>

                  <p className="secret-flow">
                    FRONTEND → BACKEND → DATABASE → APIs
                    <br />
                    AUTHENTICATION → CLOUD → DEPLOYMENT → PRODUCT
                  </p>

                  <p>
                    Serviqe didn't become the success I hoped it
                    would be.
                  </p>

                  <p>
                    But I'm still glad I built it.
                  </p>

                  <p className="secret-highlight">
                    Sometimes a project gives you something more
                    valuable than success.
                    <br />
                    Experience.
                  </p>

                </div>

              </section>


              {/* ========================================
                  EXECUTION
              ======================================== */}

              <section className="secret-section secret-final-section">

                <div className="secret-section-label">
                  07 / ONE THING ABOUT ME
                </div>

                <h3>
                  I LIKE
                  <br />
                  TO EXECUTE.
                </h3>

                <div className="secret-section-text">

                  <p>
                    One thing I've learned about myself is that when
                    I get an idea, I want to build it.
                  </p>

                  <p>
                    It doesn't always work.
                    It doesn't always become a business.
                    Sometimes it fails.
                  </p>

                  <p>
                    But I'd rather build something and learn from it
                    than spend months only thinking about it.
                  </p>

                  <p>
                    That's probably why I've experimented with
                    startups, AI projects, healthcare technology,
                    automation, websites, applications and other
                    ideas.
                  </p>

                  <p className="secret-highlight">
                    Success is great.
                    <br />
                    Failure is useful.
                    <br />
                    But execution is non-negotiable.
                  </p>

                </div>

              </section>


              {/* ========================================
                  OUTSIDE THE SCREEN
              ======================================== */}

              <section className="secret-section">

                <div className="secret-section-label">
                  08 / OUTSIDE THE SCREEN
                </div>

                <h3>
                  THERE'S MORE
                  <br />
                  THAN CODE.
                </h3>

                <div className="secret-section-text">

                  <p>
                    I'm not only interested in technology.
                  </p>

                  <p>
                    I like cars and modifying them.
                    I go to the gym, swim and run.
                  </p>

                  <p>
                    I'm also interested in videography and editing,
                    and I've always wanted to make a short film of
                    my own.
                  </p>

                  <p>
                    I don't have the cast yet.
                  </p>

                  <p className="secret-highlight">
                    The idea is still there, though.
                  </p>

                </div>

              </section>


              {/* ========================================
                  ENDING
              ======================================== */}

              <section className="secret-ending">

                <div className="secret-ending-label">
                  STILL CURIOUS?
                </div>

                <h4>
                  WANT TO BE
                  <br />
                  FRIENDS?
                </h4>

                <p>
                  If you want to know the person behind the developer,
                  you can find me on Instagram.
                  I post a little about cars, life and whatever I'm
                  currently building.
                </p>

                <a
                  href="https://www.instagram.com/realsgarage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secret-social-link"
                >
                  @realsgarage
                  <span>↗</span>
                </a>


                {/* ========================================
                    SERVIQE LINK
                ======================================== */}

                <div className="secret-startup">

                  <span className="secret-startup-label">
                    SOMETHING I BUILT
                  </span>

                  <a
                    href="https://serviqe.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secret-startup-link"
                  >
                    SERVIQE
                    <span>↗</span>
                  </a>

                  <p>
                    A product I built from scratch — from the idea and
                    interface to the backend, database, cloud and deployment.
                  </p>

                </div>

              </section>

            </div>


            {/* ========================================
                SECRET PAGE BACK TO TOP
            ======================================== */}

<button
  type="button"
  className={`secret-back-to-top ${
    showBackToTop ? "secret-back-to-top-visible" : ""
  }`}
  onClick={scrollSecretToTop}
  aria-label="Back to top"
>
  ↑
</button>

</div>,
document.body
        )}

    </>
  );
}

export default SecretAbout;