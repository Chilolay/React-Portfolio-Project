// import SubHeader from '../components/SubHeader'
import Hero from "../components/hero/Hero";
import HomeCareCards from "../components/homepageCards/homeCareCards/HomeCareCards";
import TipsSolutionsCards from "../components/homepageCards/tipsSolutionsCards/TipsSolutionsCards";

// import TipsSolutionsCards from "../components/homepageCards/TipsSolutionsCards";

const HomePage = () => {
  return (
    <div>
      {/* <SubHeader current='Home'/> */}
      <Hero />
      <HomeCareCards />
      <TipsSolutionsCards />
      </div>
  );
};

export default HomePage;
