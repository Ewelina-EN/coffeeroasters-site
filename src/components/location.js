import { LocationData } from "./dataList";
import "../scss/layout/_location.scss";

export const LocationList = () => {
  return (
    <section className="location">
      <h2 className="location_title">Our headquarters</h2>
      <ul className="location_country">
        {LocationData.map((point) => {
          return (
            <li key={point.id} className="location_item">
              <div className="location_img">
                <img src={point.locMap} alt={point.alt} />
              </div>
              <div>
                <h3 className="location_subtitle">{point.country}</h3>
                <p className="location_adress">
                  {point.adress.street} <br />
                  {point.adress.town} <br />
                  {point.adress.code} <br />
                  {point.adress.phone} <br />
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
