import { Collections } from "../../components/dataList";
import "../../scss/layout/_collection.scss";

export const MainHome = () => {
  return (
    <main className="main-home">
      <section className="collection">
        <h2 className="collection-title">our collection</h2>
        <ul className="collection-list">
          {Collections.map((item) => {
            return (
              <li key={item.id} className="collection-item">
                <div className="collection-image">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="collection-img"
                  />
                </div>
                <div className="collection-details">
                  <h3 className="collection-subtitle">{item.title}</h3>
                  <p className="collection-summary">{item.summary}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
