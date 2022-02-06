import { Navbar, Hero, Product, Walkthrough, Footer } from "./sections";
import { Spacer } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Spacer height='112px' />
        <Walkthrough />
        <Spacer />
        <Product />
        <Spacer />
      </main>
      <Footer />
    </>
  );
}

export default App;
