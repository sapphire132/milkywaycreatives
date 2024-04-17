import Header from "../components/header";
import Hero from "../components/hero";
import "../index.css";
import Home from "../pages/Home";
import ModalProvider from "src/contexts/modalContext";

const App = () => {
  return (
    <ModalProvider>
      <Header />
      <Home />
    </ModalProvider>
  );
};

export default App;
