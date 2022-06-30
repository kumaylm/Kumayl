import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-10 mt-5 sm:mt-16 text-center">
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Built and designed by Kumayl Mohamedali.
      </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        All rights reserved. ©
      </motion.p>
    </footer>
  );
};

export default Footer;
