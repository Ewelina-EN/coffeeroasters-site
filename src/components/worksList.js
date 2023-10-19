import { WorksData } from "./dataList";

export const WorksList = () => {
  return (
    <>
      <ul className="work_list">
        {WorksData.map((work) => {
          return (
            <li key={work.id} className="work_item">
              <span className="work_num">{work.num}</span>
              <h3 className="work_subtitle">{work.title}</h3>
              <p className="work_summary">{work.summary}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
