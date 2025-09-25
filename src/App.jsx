import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavMenu from "./components/Navbar";
import Cart from "./components/Cart";
// import RegisterPage from "./components/RegisterPage";
// import Login from "./components/Login";

function App() {
  return (
    <>
      <NavMenu />
      <Home />
      {/* <RegisterPage /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Footer />
    </>
  );
}

export default App;
