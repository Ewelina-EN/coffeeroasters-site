import { SubscriptionList } from "./dataList";
import "../scss/layout/_accordion.scss";
import { useState } from "react";

export const Accordion = () => {
  const [activeItem, setActiveItem] = useState([]);

  const handleShow = (id) => {
    if (activeItem.includes(id)) {
      setActiveItem(activeItem.filter((item) => item !== id));
    } else {
      setActiveItem([...activeItem, id]);
    }
  };

  return (
    <div>
      <ul>
        {SubscriptionList.map((item) => {
          return (
            <li key={item.id}>
              <div id={item.name}>
                <h2>
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
                      <div key={opt.id}>
                        <input type="radio" id={opt.sub} name={opt.name} />
                        <label htmlFor={opt.sub}>
                          <span>{opt.type}</span>
                          <span>{opt.answer}</span>
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
    </div>
  );
};
