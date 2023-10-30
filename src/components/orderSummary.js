import "../scss/layout/_orderSummary.scss";

export const OrderSummary = ({ selectedOptions }) => {
  return (
    <div className="summary">
      <h3 className="summary_title">ORDER SUMMARY</h3>
      <p className="summary_description">
        “I drink my coffee as
        <span>{selectedOptions.preference || "_____"}</span>, with a{" "}
        <span>{selectedOptions.bean || "...."} </span>type of bean.
        <span> {selectedOptions.quantity || "...."}</span>
        ground ala <span>{selectedOptions.grind || "...."}</span>, sent to me
        <span>{selectedOptions.deliveries || "...."}</span>.”
      </p>
    </div>
  );
};
