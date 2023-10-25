import { OrderStepsList } from "./dataList";

export const OrderSteps = () => {
  return (
    <ul>
      {OrderStepsList.map((step) => {
        return (
          <li key={step.id}>
            <span>{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.summary}</p>
          </li>
        );
      })}
    </ul>
  );
};
