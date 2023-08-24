import React, { useState } from "react";
import "../../stylesheet/dashboard/DispatchRequestForm.css";
function Shipment() {
  // State variables to store form data
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    deliveryAddress: "",
    courierService: "",
  });
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Handle form submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process and send form data to the server or admin
    // ...
  };

  return (
    <div id="dash-dreq" className="shipment-form">
      <h2>Shipment Request</h2>
      <form onSubmit={handleSubmit}>
        {/* Customer Information */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            value={customerInfo.fullName}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, fullName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={customerInfo.email}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, email: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Phone Number"
            value={customerInfo.phoneNumber}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, phoneNumber: e.target.value })
            }
          />
        </div>

        {/* Delivery Information */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Delivery Address"
            value={deliveryInfo.deliveryAddress}
            onChange={(e) =>
              setDeliveryInfo({
                ...deliveryInfo,
                deliveryAddress: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <select
            value={deliveryInfo.courierService}
            onChange={(e) =>
              setDeliveryInfo({
                ...deliveryInfo,
                courierService: e.target.value,
              })
            }
          >
            <option value="">Select Courier Service</option>
            <option value="ServiceA">Service A</option>
            <option value="ServiceB">Service B</option>
            <option value="ServiceC">Service C</option>
          </select>
        </div>

        {/* Terms and Conditions */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
            />
            I agree to the Terms and Conditions
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit">Submit Request</button>
        </div>
      </form>
    </div>
  );
}

export default Shipment;
