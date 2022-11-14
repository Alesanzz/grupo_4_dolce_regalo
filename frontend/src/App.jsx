import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { IconWhassapp } from "./components/icon-whassapp/IconWhassapp";
import { Loader } from "./components/loader/Loader";
import { Routing } from "./router/Routing";

function App() {
  return (
    <>
    <Header />
    <Routing />
    <Footer/>
    <IconWhassapp/>
    </>
  );
}

export default App;
