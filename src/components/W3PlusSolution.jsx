import { GoTriangleRight } from "react-icons/go";
import { motion } from "framer-motion";

const W3PlusSolution = () => {
  return (
    <div>
      <h1 className="text-xl sm:text-[28px] font-bold text-whiteK">
        Web Developer and Support @{" "}
        <span className="text-lightGreen">W3 Plus Solutions</span>
      </h1>
      <h1 className="uppercase sm:text-lg mt-1">June 2020 - Present</h1>

      <motion.p
        className="flex sm:text-lg mt-7"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <GoTriangleRight className="text-lightGreen mt-1 mr-2" />
        Developed and maintained over 10 WordPress websites for clients using
        HTML, CSS, JavaScript, and MySQL, resulting in a 55% increase in client satisfaction.
      </motion.p>

      <motion.p
        className="flex sm:text-lg mt-3"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <GoTriangleRight className="text-lightGreen mt-1 mr-2" />
        Worked on multiple projects, collaborating with colleagues to ensure a 
        high-quality final product, resulting in a 50% reduction in project delivery time.
      </motion.p>

      <motion.p
        className="flex sm:text-lg mt-3"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <GoTriangleRight className="text-lightGreen mt-1 mr-3" />
        Implemented and integrated different third-party plugins to enhance website 
        functionality, resulting in a 20% increase in website traffic.
      </motion.p>

 <motion.p
        className="flex sm:text-lg mt-3"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <GoTriangleRight className="text-lightGreen mt-1 mr-2" />
        Showcased strong problem-solving skills by addressing technical challenges
        in a timely and efficient manner, resulting in a 15% reduction in support tickets.
      </motion.p>

 <motion.p
        className="flex sm:text-lg mt-3"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <GoTriangleRight className="text-lightGreen mt-1 mr-2" />
        Strong communication skills, able to explain technical concepts to 
        non-technical clients, resulting in a 100% success rate in meetings.
      </motion.p>

    </div>
  );
};

export default W3PlusSolution;
