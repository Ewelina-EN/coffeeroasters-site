import "../../scss/layout/_collection.scss";
import { CollectionSection } from "../../components/collection";
import { Benefits } from "../../components/benefits";
import { Works } from "../../components/works";
import "../../scss/layout/_works.scss";

export const MainHome = () => {
  return (
    <>
      <CollectionSection />
      <Benefits />
      <Works />
    </>
  );
};
