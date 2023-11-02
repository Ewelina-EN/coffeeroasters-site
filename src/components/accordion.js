import { SubscriptionList } from "./dataList";
import "../scss/layout/_accordion.scss";
import { useState } from "react";
import { OrderSummary } from "./orderSummary";
import { OrderCheckout } from "./orderCheckout";

export const Accordion = () => {
  const [activeItem, setActiveItem] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isOrderCheckoutVisible, setOrderCheckoutVisible] = useState(false);

  const handleShow = (id) => {
    if (activeItem.includes(id)) {
      setActiveItem(activeItem.filter((item) => item !== id));
    } else {
      setActiveItem([...activeItem, id]);
    }
  };

  const handleOptionChange = (questionName, answerType) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionName]: answerType,
    }));
  };

  const toggleOrderCheckout = () => {
    setOrderCheckoutVisible(!isOrderCheckoutVisible);
  };

  return (
    <div>
      <ul>
        {SubscriptionList.map((item) => {
          return (
            <li key={item.id} className="accordion_item">
              <div id={item.name}>
                <h2 className="accordion_title">
                  <button
                    onClick={() => handleShow(item.id)}
                    id={`accordionBtn${item.id}`}
                    className={`accordion--btn ${
                      activeItem.includes(item.id) ? "collapsed" : ""
                    }`}
                  >
                    {item.question}
                  </button>
                </h2>

                <div
                  id={`collapse${item.id}`}
                  className={`collapse ${
                    activeItem.includes(item.id) ? "show" : ""
                  }`}
                >
                  {item.options.map((opt) => {
                    return (
                      <div key={opt.id} className="accordion_answer">
                        <input
                          type="radio"
                          id={opt.type}
                          name={item.name}
                          value={opt.type}
                          checked={selectedOptions[item.name] === opt.type}
                          onChange={() =>
                            handleOptionChange(item.name, opt.type)
                          }
                        />
                        <label htmlFor={opt.type} className="accordion_label">
                          <h3 className="accordion_subtitle">{opt.type}</h3>
                          <p className="accordion_description">{opt.answer}</p>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <OrderSummary selectedOptions={selectedOptions} />
      <OrderCheckout
        isVisible={isOrderCheckoutVisible}
        onClose={toggleOrderCheckout}
      />
    </div>
  );
};
