import { Mail, ExternalLink } from "lucide-react";
import { TextShimmer } from "./core/text-shimmer";

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* Section Header */}
      <div className="contact-header">
        <span className="section-number">05</span>
        <span className="section-label">CONTACT</span>
      </div>

      {/* Main Content */}
      <div className="contact-content">

        <h2>
          LET'S
          <br />
          WORK
          <br />
          TOGETHER.
        </h2>

        <div className="contact-info">

          <p className="contact-intro">
            Have an idea, project or opportunity?
            I'd love to hear about it.
          </p>

<a
  href="mailto:akashbiradar0909@gmail.com"
  className="contact-email"
>
  <Mail size={20} strokeWidth={1.5} />
  <span>akashbiradar0909@gmail.com</span>
  <ExternalLink size={18} strokeWidth={1.5} />
</a>

          <div className="contact-links">

            <a
              href="https://www.linkedin.com/in/akash-biradar-57356b1ba/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span>↗</span>
            </a>

            <a
              href="https://github.com/Akashbiradar111"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>

            <a
              href="https://serviqe.com/"
              target="_blank"
              rel="noreferrer"
            >
              Serviqe
              <span>↗</span>
            </a>

            <a
  href="https://wa.me/919380727701?text=Hello%20Akash%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
  target="_blank"
  rel="noreferrer"
>
  WhatsApp
  <span>↗</span>
</a>

          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="contact-footer">

        <span>AKASH BIRADAR</span>

        <span>
          © 2026
        </span>

        <span>
          BASED IN INDIA
        </span>

      </div>

    </section>
  );
}

export default Contact;