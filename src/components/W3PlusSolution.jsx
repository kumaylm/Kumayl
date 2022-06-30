import { GoTriangleRight } from "react-icons/go";
import { motion } from "framer-motion";

const W3PlusSolution = () => {
  return (
    <div>
      <h1 className="text-xl sm:text-[28px] font-bold text-whiteK">
        Web/App Development and Support @{" "}
        <span className="text-lightGreen">W3 Plus Solutions</span>
      </h1>
      <h1 className="uppercase sm:text-lg mt-1">June 2020 - present</h1>

      <motion.p
        className="flex sm:text-lg mt-7"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <GoTriangleRight className="text-lightGreen mt-1 mr-2" />
        Successfully developed and maintained 10+ WordPress and Shopify powered
        websites for businesses and charitable organizations.
      </motion.p>

      <motion.p
        className="flex sm:text-lg mt-3"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <GoTriangleRight className="text-lightGreen mt-1 mr-2" />
        Significantly implemented custom code using HTML, CSS, JavaScript, and
        PHP to enhance client and user experience.
      </motion.p>

      <motion.p
        className="flex sm:text-lg mt-3"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <GoTriangleRight className="text-lightGreen mt-1 mr-3" />
        Averaged over 30 tickets solved monthly with 90% customer satisfaction;
        administered daily maintenance for password resets, customer locked-out
        accounts, assisted registration requests, and online updates.
      </motion.p>
    </div>
  );
};

export default W3PlusSolution;
