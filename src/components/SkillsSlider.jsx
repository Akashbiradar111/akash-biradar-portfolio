const skills = [
  "PYTHON",
  "REACT.JS",
  "NODE.JS",
  "TYPESCRIPT",
  "AI / ML",
  "TENSORFLOW",
  "SELENIUM",
  "SUPABASE",
];

function SkillsSlider() {
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className="skills-slider">
      <div className="skills-track">
        {repeatedSkills.map((skill, index) => (
          <span className="skill-item" key={`${skill}-${index}`}>
            {skill}
          </span>
        ))}
      </div>

      <div className="skills-blur skills-blur-top"></div>
      <div className="skills-blur skills-blur-bottom"></div>
    </div>
  );
}

export default SkillsSlider;