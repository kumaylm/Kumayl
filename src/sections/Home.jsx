import { FaEnvelope } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import MyPDF from "../download/KumaylMohamedali.pdf";
import { motion } from "framer-motion";
import TypeWriter from "react-typewriter";

const containerVariant = {
  hide: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.8,
    },
  },
};

const Home = () => {
  return (
    <section id="home" className="pt-24 sm:pt-44">
      <motion.div variants={containerVariant} initial="hide" animate="show">
        <TypeWriter typing={1} maxDelay={280}>
          <h1 className="text-[46px] sm:text-[86px] text-whiteK">
            hi, <span className="text-lightGreen font-bold">kumayl</span> here.
          </h1>
        </TypeWriter>

        <p className="text-3xl sm:text-5xl">I enjoy building things.</p>
        <p className="sm:text-22px sm:w-[500px] text-justify mt-4">
          I’m a computer scientist and software engineer based in the Greater
          Toronto Area. I have great interest in full-stack development, machine
          learning, data science, artificial intelligence, product management,
          and everything in between.
        </p>

        <button className="sm:text-22px font-bold text-lightGreen border border-lightGreen rounded-md mt-8 hover:bg-white hover:bg-opacity-10 hover:text-whiteK mr-4 sm:mr-6">
          <a
            href="mailto:kumaylm@pm.me"
            className="flex items-center py-3 sm:py-4 px-5 sm:px-8"
          >
            <FaEnvelope fontSize={20} className="mr-2" />
            Say hi!
          </a>
        </button>

        <button className="sm:text-22px font-bold text-lightGreen border border-lightGreen rounded-md mt-8 hover:bg-white hover:bg-opacity-10 hover:text-whiteK">
          <a
            href={MyPDF}
            download
            className="flex items-center py-3 sm:py-4 px-5 sm:px-8"
          >
            <HiDocumentText fontSize={20} className="mr-1" />
            My resume
          </a>
        </button>
      </motion.div>
    </section>
  );
};

export default Home;
