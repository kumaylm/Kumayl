import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariant = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
      duration: 0.8,
    },
  },
};

const NavLinks = () => {
  return (
    <nav className="hidden md:block fixed right-8 bottom-10 z-10">
      <motion.div
        className="flex flex-col space-y-1 text-lightGreen text-right"
        variants={containerVariant}
        initial="hide"
        animate="show"
      >
        <a href="#home" className="font-semibold hover:text-whiteK">
          /home
        </a>

        <a href="#about" className="font-semibold hover:text-whiteK">
          /about
        </a>
        <a href="#experience" className="font-semibold hover:text-whiteK">
          /experience
        </a>
        <a href="#softwareCreation" className="font-semibold hover:text-whiteK">
          /software-creations
        </a>
      </motion.div>

      <motion.div
        className="flex items-center justify-end space-x-3 text-lightGreen mt-10"
        variants={containerVariant}
        initial="hide"
        animate="show"
      >
        <a href="mailto:kumaylm@pm.me">
          <FaEnvelope fontSize={20} className="hover:text-whiteK" />
        </a>
        <a href="https://github.com/kumaylm" target="_blank">
          <BsGithub fontSize={20} className="hover:text-whiteK" />
        </a>
        <a
          href="https://www.linkedin.com/in/kumayl-mohamedali/"
          target="_blank"
        >
          <BsLinkedin fontSize={19} className="hover:text-whiteK" />
        </a>
      </motion.div>
    </nav>
  );
};

export default NavLinks;
