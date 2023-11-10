import { BenefitsList } from "./dataList";
import "../scss/layout/_benefits.scss";
import { BgBenefits } from "./bgbenefits";

export const Benefits = () => {
  return (
    <div className="benefits-main">
      <BgBenefits />
      <section className="benefits">
        <ul>
          {BenefitsList.map((benefit) => {
            return (
              <li key={benefit.id} className="benefits-item">
                <img
                  src={benefit.imgUrl}
                  alt={benefit.alt}
                  className="benefits-img"
                />
                <div className="benefits-detail">
                  <h3 className="benefits-subtitle">{benefit.title}</h3>
                  <p className="benefits-summary">{benefit.summary}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
