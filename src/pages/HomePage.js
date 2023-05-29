import Hero from "../components/hero/Hero";
import HomeCareCards from "../components/homepageCards/homeCareCards/HomeCareCards";
import TipsSolutionsCards from "../components/homepageCards/tipsSolutionsCards/TipsSolutionsCards";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCareCards />
      <TipsSolutionsCards />
      </div>
  );
};

export default HomePage;
