import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import store from "../assets/store.png";
import shareme from "../assets/shareme.png";
import chat from "../assets/chat.png";
import movies from "../assets/movies.png";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    img: store,
    name: "An ecommerce store",
    info: "A fully responsive modern full stack ecommerce application with modern design, animations, the ability to add and edit products on the go using a CMS, all advanced cart functionalities, and complete integration with Stripe.",
    tech: "HTML, CSS, React.js, and Next.js",
    github: "https://github.com/kumaylm/EcommerceStore",
  },
  {
    id: 2,
    img: shareme,
    name: "ShareMe (a Pinterest Clone)",
    info: "A fully responsive modern full stack image sharing social media application with all advanced features such as Google authentication, create/edit/delete/save images, like/comment on other people's posts, and search and filter images.",
    tech: "HTML, CSS, and React.js",
    github: "https://github.com/kumaylm/ShareMeApp",
  },
  {
    id: 3,
    img: chat,
    name: " A realtime chat app",
    info: "A chat app where users can enter a chat room with their username and room ID, and chat with everyone present in the room in real time.",
    tech: "HTML, CSS, React.js, and Node.js",
    github: "https://github.com/kumaylm/RealtimeChatApp",
  },
  {
    id: 4,
    img: movies,
    name: "My top 10 movies website",
    info: "A beautiful website that lists our top 10 movies of all time. As we watch more movies, we can always update our list and keep track of which movies to recommend to people.",
    tech: "HTML, CSS, Python (Flask and WTForms), SQLite, and SQLAlchemy",
    github: "https://github.com/kumaylm/MyTop10Movies",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 6000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest;

  return (
    <button
      className={`${active && "text-lightGreen"} mx-1`}
      onClick={() => onClick()}
    >
      ⦿
    </button>
  );
};

const SoftwareCreation = () => {
  return (
    <motion.section
      id="softwareCreation"
      className="mt-10 pt-10"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 3 }}
    >
      <div className="flex items-center space-x-5 sm:mb-5">
        <h1 className="text-3xl sm:text-5xl font-semibold text-whiteK">
          / software-creations
        </h1>
        <hr className="border w-20 sm:w-40 md:w-72 border-gray-700" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-4 hover:scale-[1.01]">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            customDot={<CustomDot />}
            autoPlaySpeed={5000}
            transitionDuration={500}
            containerClass="py-12"
          >
            {projectData.map((project) => (
              <div key={project.id} className="h-full relative">
                <div className="bg-black bg-opacity-60 absolute h-full w-full rounded-2xl"></div>
                <img
                  src={project.img}
                  alt="projects"
                  className="h-full w-full rounded-2xl"
                />
                <div className="text-whiteK text-center px-5 sm:px-20 absolute top-[50%] -translate-y-[50%]">
                  <h1 className="sm:text-3xl font-semibold">{project.name}</h1>
                  <p className="mt-4 text-xs sm:text-lg">{project.info}</p>
                  <p className="text-sm sm:text-base mt-3 text-lightGreen">
                    {project.tech}
                  </p>

                  <div className="flex justify-center mt-5">
                    <a href={project.github} target="_blank">
                      <BsGithub fontSize={25} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
};

export default SoftwareCreation;
