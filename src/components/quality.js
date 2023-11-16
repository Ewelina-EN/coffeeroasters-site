import QualityImg from "../assets/about/mobile/image-quality.jpg";
import "../scss/layout/_quality.scss";

export const Quality = () => {
  return (
    <section className="main">
      <div className="quality_img"></div>
      <div className="quality_content">
        <h3 className="quality_title">Uncompromising quality</h3>
        <p className="quality_description">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </section>
  );
};
