import { OrderStepsList } from "./dataList";
import "../scss/layout/_orderSteps.scss";

export const OrderSteps = () => {
  return (
    <section className="order">
      <ul className="order_list">
        {OrderStepsList.map((step) => {
          return (
            <li key={step.id} className="order_item">
              <h2 className="order_num">{step.num}</h2>
              <h3 className="order_title">{step.title}</h3>
              <p className="order_description">{step.summary}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
