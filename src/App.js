import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import NavLinks from "./components/NavLinks";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import SoftwareCreation from "./sections/SoftwareCreation";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <NavLinks />
          <div className="px-5 sm:px-10 lg:px-20 xl:px-40 xl:container xl:mx-auto">
            <Home />
            <About />
            <Experience />
            <SoftwareCreation />
            <Projects />
            <Footer />
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
