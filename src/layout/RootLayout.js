import "bootswatch/dist/minty/bootstrap.min.css";
import "./RootLayout.scss";
import Navigation from "../components/navBar/Navigation";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container fluid className="px-0 bg_leaf_pattern">
        <Navigation />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
