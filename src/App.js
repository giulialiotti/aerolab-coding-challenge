import { UserProvider } from "./context/UserContext";
import { Navbar, Hero, Product, Walkthrough, Footer } from "./sections";
import { Spacer } from "./components";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <main>
          <Hero />
          <Spacer height="112px" />
          <Walkthrough />
          <Spacer />
          <Product />
          <Spacer />
        </main>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
