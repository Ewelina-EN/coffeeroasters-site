import { OrderStepsList } from "./dataList";
import "../scss/layout/_orderSteps.scss";

export const OrderSteps = () => {
  return (
    <section className="order order-dark">
      <hr className="dark-line" />
      <section className="dark-point">
        <div className="dark-circle"></div>
        <div className="dark-circle"></div>
        <div className="dark-circle"></div>
      </section>

      <ul className="order_list dark_list">
        {OrderStepsList.map((step) => {
          return (
            <li key={step.id} className="order_item dark_item">
              <h2 className="order_num dark_num">{step.num}</h2>
              <h3 className="order_title dark_title">{step.title}</h3>
              <p className="order_description dark_description">
                {step.summary}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
