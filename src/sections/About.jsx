import me from "../assets/me.png";
import { GoTriangleRight } from "react-icons/go";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="mt-5 sm:mt-10 pt-10"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 3 }}
    >
      <div className="flex items-center space-x-5">
        <h1 className="text-3xl sm:text-5xl font-semibold text-whiteK">
          / about me
        </h1>
        <hr className="border w-40 sm:w-72 border-gray-700" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 sm:gap-14 mt-5 sm:mt-12">
        <div>
          <p className="sm:text-22px text-justify">
            I am a New Grad with a Bachelor of Science in{" "}
            <span className="font-bold">Computer Science</span> from
            <span className="font-bold text-lightGreen sm:text-[21px]">
              {" "}
              York University
            </span>
            , and I enjoy creating things that live on the internet. I’m
            currently looking for entry level and junior roles in{" "}
            <span className="font-bold">
              software engineering or development
            </span>{" "}
            (front end, back end, or full stack) where I can leverage everything
            I’ve learned and get some hands-on experience.
          </p>

          <p className="sm:text-22px text-justify mt-6">
            Here are some technologies I’ve been working with:
          </p>

          <div className="grid grid-cols-3 gap-5 mt-4">
            <div>
              <motion.div
                className="flex items-center space-x-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GoTriangleRight className="text-lightGreen" />
                <h1 className="sm:text-lg mt-1">HTML & CSS</h1>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <GoTriangleRight className="text-lightGreen" />
                <h1 className="sm:text-lg mt-1">JavaScript</h1>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <GoTriangleRight className="text-lightGreen" />
                <h1 className="sm:text-lg mt-1">React.js</h1>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1 }}
              >
                <GoTriangleRight className="text-lightGreen" />
                <h1 className="sm:text-lg mt-1">Node.js</h1>
              </motion.div>
            </div>

            <div>
              <motion.div
                className="flex items-center space-x-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GoTriangleRight className="text-lightGreen" />
                <h1 className="sm:text-lg mt-1">Next.js</h1>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <GoTriangleRight className="text-lightGreen" />
                <h1 className="sm:text-lg mt-1">Java</h1>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <GoTriangleRight className="text-lightGreen" />
                <h1 className="sm:text-lg mt-1">Python</h1>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1 }}
              >
                <GoTriangleRight className="text-lightGreen" />
                <h1 className="sm:text-lg mt-1">SQL</h1>
              </motion.div>
            </div>
          </div>

          <p className="sm:text-22px text-justify mt-6">
            I am a hardworking, creative and friendly individual. Imaginative
            thinking and good communication are two skills I pride myself on.
            Seeking out a wide range of experience has taught me to always make
            the most of every challenge and approach each task I am given with
            great enthusiasm. Give me a problem and I will always try to solve
            it!
          </p>
          <p className="sm:text-22px text-justify mt-6">
            Outside of all this, I also play cricket and a lot of video games.
          </p>
        </div>

        <div>
          <img
            src={me}
            alt="me"
            className="lg:h-3/5 mx-auto shadow-2xl rounded-lg hover:-translate-y-3 transition-all duration-300"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
