import { Navbar, Product, Footer } from "./sections";
import { Spacer } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Spacer />
        <Product />
        <Spacer />
      </main>
      <Footer />
    </>
  );
}

export default App;
