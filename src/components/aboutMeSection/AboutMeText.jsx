import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m a passionate Front-End Developer with over 3 years of experience building dynamic, high-performance web applications using React.js, Redux, and modern JavaScript (ES6+). I specialize in crafting clean, responsive UIs and intuitive user experiences, ensuring pixel-perfect implementation of designs. I have a strong foundation in HTML, CSS, and performance optimization, and I’m always exploring new tools and technologies to stay ahead in the fast-evolving frontend ecosystem.
      Driven by a problem-solving mindset and a keen eye for detail, I enjoy turning complex requirements into scalable, maintainable code. I’ve worked closely with cross-functional teams.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
