import { useState } from "react";
import W3PlusSolution from "../components/W3PlusSolution";
import { motion } from "framer-motion";

const expBtn = [
  {
    id: 1,
    name: "W3 PLUS SOLUTIONS",
  },
];

const Experience = () => {
  const [experience, setExperience] = useState("W3 PLUS SOLUTIONS");
  return (
    <motion.section
      id="experience"
      className="mt-10 pt-10"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 3 }}
    >
      <div className="flex items-center space-x-5">
        <h1 className="text-3xl sm:text-5xl font-semibold text-whiteK">
          / experience
        </h1>
        <hr className="border w-40 sm:w-72 border-gray-700" />
      </div>

      <div className="grid md:grid-cols-4 gap-10 mt-5 sm:mt-14">
        <div className="border-r border-[#091629]">
          {expBtn.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setExperience(exp.name)}
              className={`pl-2 py-3.5 ${
                exp.name === experience &&
                "border-r-2 border-lightGreen text-lightGreen"
              } w-full text-left font-semibold uppercase hover:bg-white hover:bg-opacity-5`}
            >
              {exp.name}
            </button>
          ))}
        </div>

        <div className="md:col-span-3 px-4">
          {experience === "W3 PLUS SOLUTIONS" ? <W3PlusSolution /> : null}
        </div>
      </div>
      <div className="col-span-3"></div>
    </motion.section>
  );
};

export default Experience;
