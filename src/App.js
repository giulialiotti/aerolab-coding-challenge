import { Navbar, Hero, Product, Footer } from "./sections";
import { Spacer } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Spacer height='112px' />
        <Product />
        <Spacer />
      </main>
      <Footer />
    </>
  );
}

export default App;
