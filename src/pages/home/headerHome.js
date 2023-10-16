import { Hero } from "../../components/hero";

export const HeaderHome = () => {
  return (
    <div className="header header_home">
      <Hero
        title="Great coffee made simple."
        content="Start your mornings with the world’s best coffees. Try our expertly curated artisan 
  coffees from our best roasters delivered directly to your door, at your schedule."
        button="Create your plan"
      />
    </div>
  );
};
