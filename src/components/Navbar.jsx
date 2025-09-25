import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import convertedAmount from "../utils/convert";

const NavMenu = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar className="bg-dark">
      <Container fluid className="m-1 gap-2">
        <Navbar.Brand className="text-light fs-4 fw">Pizzería Mamma Mia!</Navbar.Brand>

        <Button variant="outline-light">🍕 Home</Button>

        {token ? (
          <>
            <Button variant="outline-light">🔓 Profile</Button>
            <Button variant="outline-light">🔒 Logout</Button>
          </>
        ) : (
          <>
            <Button variant="outline-light">🔐 Login</Button>
            <Button variant="outline-light">🔐 Register</Button>
          </>
        )}

        <Button className="ms-auto" variant="outline-info">
          🛒 Total: ${convertedAmount(total)}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
