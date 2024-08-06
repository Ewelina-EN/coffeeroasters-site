import "../scss/layout/_checkout.scss";
import { FaTimes } from "react-icons/fa";

export const OrderCheckout = ({
  selectedOptions,
  toggleOrderCheckout,
  total,
}) => {
  return (
    <div className="checkout-overlay">
      <form className="checkout-form">
        <div className="checkout-order">
          <div className="close-icon">
            <FaTimes onClick={toggleOrderCheckout} />
          </div>
          <h3 className="checkout-title">Order Summary</h3>
        </div>
        <div className="checkout-info">
          <p className="checkout-summary">
            “I drink my coffee as{" "}
            <span>{selectedOptions.preference || "____"}</span>, with a
            <span> {selectedOptions.bean || "____"}</span> type of bean.
            <span> {selectedOptions.quantity || "____"}</span> ground ala
            <span> {selectedOptions.grind || "____"}</span>, sent to me
            <span> {selectedOptions.deliveries || "____"}</span>.”
          </p>

          <p className="checkout-confirm">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
        </div>
        <button
          type="submit"
          className="header_btn checkout-btn"
          onClick={toggleOrderCheckout}
        >
          Checkout - ${total} / mo
        </button>
      </form>
    </div>
  );
};
