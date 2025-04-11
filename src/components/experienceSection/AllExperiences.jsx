import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Engineer Trainee",
    company: "BNG Advanced Mobile Solutions Pvt Ltd",
    date: "January 2022 - July 2022",
    responsibilities: [
      "Spearheaded the integration of a cutting-edge voice morphing platform with Google OAuth, in collaboration with the IVR team, enhancing secure Gmail contact authentication and empowering 100K+ monthly users.",
      "Engineered a robust Elastic Reporting Dashboard to track user interactivity in real-time, boosting data accuracy by 30% and slashing analysis time by 40%.",
      "Turbocharged application performance by implementing Code Splitting, Lazy Loading, and Advanced Caching, resulting in 50% faster load times and significantly improved user satisfaction.",
      "Elevated security posture from C+ to A by configuring AWS build headers, cutting incident response time by 50% and fortifying the app against critical vulnerabilities.",
      "Designed and launched a feature-rich Admin Dashboard using Material UI, powering 100+ multi- and single-player games for 40+ operators, serving 10,000+ users monthly with capabilities like leaderboard tracking, real-time analytics, access controls, and complaint resolution backed by Elastic Reporting."
    ],
  },
  {
    job: "Software Engineer",
    company: "BNG Advanced Mobile Solutions Pvt Ltd",
    date: "July 2022 - Present",
    responsibilities: [
      "Partnered with the UI/UX team to build a scalable reusable component library of 30+ UI elements, accelerating development cycles and ensuring brand-consistent user interfaces.",
      "Automated testing pipelines with React Testing Library and Jest, achieving 85%+ test coverage across multiple projects and elevating code reliability.",
      "Diagnosed and resolved 50+ high-priority bugs, enhancing system stability and overall product reliability across large-scale applications.",
      "Engineered and deployed multilingual, AI-powered chatbot platforms using OpenAI API and Socket.io, enabling seamless, real-time communication across user bases.",
      "Architected a centralized file management system for multimedia content, and built an intuitive interactive dashboard to manage S3-hosted assets, drastically improving user experience and data accessibility.",
    ],
  }
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
