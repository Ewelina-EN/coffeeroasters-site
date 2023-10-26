import { SubscriptionList } from "./dataList";
import "../scss/layout/_accordion.scss";

export const Accordion = () => {
  const handleShow = (e) => {
    //złapać klik na pytaniu
    //złapanie rodzica tego pytania
    //pobranie atrybutu data-target
    //pobranie elementu div, który jest następnym rodzeństwem rodzica przycisku
    //dodanie i usunięcie klas CSS na elementach aby zwijac i rozwijac menu
    const questionBtn = e.target;
    // console.log(questionBtn);
    const parent = questionBtn.parentElement;
    // console.log("parent of btn", parent);
    const attribute = questionBtn.getAttribute("data-target");
    console.log(attribute);
    const targetDiv = parent.nextSibling;
    // console.log("div of parent", targetDiv);
    targetDiv.classList.toggle("collapse");
    targetDiv.classList.toggle(attribute);
    targetDiv.classList.toggle("collapse__show");
    questionBtn.classList.toggle("collapsed");
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
                    onClick={handleShow}
                    id={`accordionBtn${item.id}`}
                    className={`accordion--btn`}
                    data-toggle="collapse"
                    data-target={`collapse${item.id}`}
                  >
                    {item.question}
                  </button>
                </h2>

                <div id={`collapse${item.id}`} className={`collapse${item.id}`}>
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
