// Context
import { UserProvider } from "./context/UserContext";

// Sections
import { Navbar, Hero, Product, Walkthrough, Footer } from "./sections";

// Local Components
import { Main, Toasts } from "./components";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Main>
          <Hero />
          <Walkthrough />
          <Product />
          <Toasts />
        </Main>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
