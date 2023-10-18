import { BenefitsList } from "./dataList";
import "../scss/layout/_benefits.scss";
import { BgBenefits } from "../scss/layout/_bgbenefits";

export const Benefits = () => {
  return (
    <>
      <BgBenefits />
      <section className="benefits">
        <ul>
          {BenefitsList.map((benefit) => {
            return (
              <li key={benefit.id} className="benefits-item">
                <div>
                  <img
                    src={benefit.imgUrl}
                    alt={benefit.alt}
                    className="benefits-img"
                  />
                  <h3 className="benefits-subtitle">{benefit.title}</h3>
                  <p className="benefits-summary">{benefit.summary}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
