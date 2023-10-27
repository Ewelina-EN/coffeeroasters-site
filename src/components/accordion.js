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
                        <input type="radio" id={opt.sub} name={opt.name} />
                        <label htmlFor={opt.sub} className="accordion_label">
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
    </div>
  );
};
