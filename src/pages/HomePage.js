import { Container } from "reactstrap";
// import SubHeader from '../components/SubHeader'
import Hero from "../components/hero/Hero";
import CareGuideCards from "../components/homepageCards/careGuideCards/CareGuideCards";

// import TipsSolutionsCards from "../components/homepageCards/TipsSolutionsCards";

const HomePage = () => {
  return (
    <div>
      {/* <SubHeader current='Home'/> */}
      <Hero />
      <CareGuideCards />
      {/* <TipsSolutionsCards /> */}
      </div>
  );
};

export default HomePage;
