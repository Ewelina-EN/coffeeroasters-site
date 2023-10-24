import { Commitment } from "../../components/commitment";
import { LocationList } from "../../components/location";
import { Quality } from "../../components/quality";

export const MainAbout = () => {
  return (
    <main>
      <Commitment />
      <Quality />
      <LocationList />
    </main>
  );
};
