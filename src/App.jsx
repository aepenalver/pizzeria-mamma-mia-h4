import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import NavMenu from "./components/Navbar";
import Pizza from "./components/Pizza";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <>
      <NavMenu />
      <Home />
      {/* <RegisterPage /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      {/* <Pizza /> */}
      <Footer />
    </>
  );
}

export default App;
