import { Hero } from "../../components/hero";

export const HeaderPlan = () => {
  return (
    <div className="header header_plan">
      <Hero
        title="Create your plan"
        content="Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door."
        button="Create your plan"
      />
    </div>
  );
};
