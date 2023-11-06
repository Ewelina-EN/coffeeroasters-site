import "../scss/layout/_orderSummary.scss";

export const OrderSummary = ({ selectedOptions, toggleOrderCheckout }) => {
  return (
    <form>
      <div className="summary">
        <h3 className="summary_title">ORDER SUMMARY</h3>
        <p className="summary_description">
          “I drink my coffee as{" "}
          <span>{selectedOptions.preference || "____"}</span>, with a{" "}
          <span>{selectedOptions.bean || "____"}</span> type of bean.
          <span> {selectedOptions.quantity || "____"}</span> ground ala
          <span> {selectedOptions.grind || "____"}</span>, sent to me
          <span> {selectedOptions.deliveries || "____"}</span>.”
        </p>
      </div>
      <button type="submit" onClick={toggleOrderCheckout}>
        Create my plan!
      </button>
    </form>
  );
};
