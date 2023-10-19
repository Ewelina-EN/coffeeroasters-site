import { WorksData } from "./dataList";

export const WorksList = () => {
  return (
    <>
      <ul>
        {WorksData.map((work) => {
          return (
            <li key={work.id}>
              <span>{work.num}</span>
              <h3>{work.title}</h3>
              <p>{work.summary}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
