import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/simrandeep-kaur-55a9b81b6" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/simran-18" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
