import { BiFolder } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    name: "Flight Deal Finder",
    info: "An SMS alert on flight deals, that involves searching for cheap flights, and sending an SMS when the flight price drops.",
    tech: "Python",
    github: "https://github.com/kumaylm/FlightDealFinder",
  },
  {
    id: 2,
    name: "Password Manager",
    info: "An app used to generate, copy to clipboard, and store your multiple passwords, inclusive of error handling, dialog boxes and pop-up features.",
    tech: "Python",
    github: "https://github.com/kumaylm/PasswordManager",
  },
  {
    id: 3,
    name: "Space Invaders",
    info: "The classic shoot 'em up game using Python Turtle, where your space ship can move and hit some alien ships. Every second the aliens move closer to your            ship, and the game ends once the aliens touch your ship.",
    tech: "Python",
    github: "https://github.com/kumaylm/SpaceInvaders",
  },
  {
    id: 4,
    name: "PDF to Audiobook",
    info: "A script that takes a PDF file, identifies the text, and converts the text to speech, effectively creating a free audiobook.",
    tech: "Python",
    github: "https://github.com/kumaylm/PDFtoAudiobook",
  },
  {
    id: 5,
    name: "Virtual Library",
    info: "A virtual library to keep track of all your books.",
    tech: "HTML, Python",
    github: "https://github.com/kumaylm/VirtualLibrary",
  },
  {
    id: 6,
    name: "Stock News Alert",
    info: "Using APIs to check for stock price movements, retrieve news articles, and send Telegram messages.",
    tech: "Python",
    github: "https://github.com/kumaylm/StockTradingNewsAlert",
  },
];

const Projects = () => {
  return (
    <section className="mt-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectData.map((pro) => (
          <motion.div
            key={pro.id}
            className="bg-[#112240] p-7 rounded-3xl hover:bg-[#233554] hover:-translate-y-1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex items-center justify-between">
              <BiFolder fontSize={30} className="text-lightGreen" />
              <a href={pro.github} target="_blank">
                <BsGithub fontSize={20} className="text-whiteK" />
              </a>
            </div>

            <h1 className="text-whiteK text-2xl font-semibold mt-7">
              {pro.name}
            </h1>
            <p className="mt-4 text-lg">{pro.info}</p>
            <p className="mt-10">{pro.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
