import { UserProvider } from "./context/UserContext";
import { Navbar, Hero, Product, Walkthrough, Footer } from "./sections";
import { Main, Toasts } from "./components";

// gsap
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
