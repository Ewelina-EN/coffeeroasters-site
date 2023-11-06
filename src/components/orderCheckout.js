import "../scss/layout/_checkout.scss";

export const OrderCheckout = ({ selectedOptions, toggleOrderCheckout }) => {
  return (
    <div className="order-checkout-overlay">
      <form>
        <div className="order-checkout">
          <h3>Order Summary</h3>
        </div>
        <div>
          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
        </div>
        <button type="submit" onClick={toggleOrderCheckout}>
          Checkout
        </button>
      </form>
    </div>
  );
};
