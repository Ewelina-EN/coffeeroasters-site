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
    const updatedAnswerType = answerType
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionName]: updatedAnswerType,
    }));
    console.log(updatedAnswerType);
  };

  const toggleOrderCheckout = (e) => {
    e.preventDefault();
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
                    onClick={() => {
                      handleShow(item.id);
                    }}
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
                          id={opt.id}
                          name={item.name}
                          value={opt.id}
                          checked={
                            // (selectedOptions[item.name]
                            //   ? selectedOptions[item.name].toLowerCase()
                            //   : null) === opt.type.toLowerCase()
                            selectedOptions[item.name]?.toLowerCase() ===
                            opt.type.toLowerCase()
                          }
                          onChange={() =>
                            handleOptionChange(item.name, opt.type)
                          }
                        />
                        <label htmlFor={opt.id} className="accordion_label">
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
      <OrderSummary
        selectedOptions={selectedOptions}
        toggleOrderCheckout={toggleOrderCheckout}
      />
      {isOrderCheckoutVisible && (
        <OrderCheckout
          selectedOptions={selectedOptions}
          toggleOrderCheckout={toggleOrderCheckout}
        />
      )}
    </div>
  );
};
