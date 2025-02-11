import React from 'react';

function Pricing() {
  return (
    <div className="pricing-container">
      <h1>Pricing</h1>
      <p>Select the plan that fits your needs. We offer flexible pricing options to accommodate a variety of preferences.</p>
      
      <div className="pricing-plans">
        <div className="plan basic">
          <h2>--Basic Plan--</h2>
          <p className="price">$19.99 / month</p>
          <div className="features">
            <p>Essential Features</p>
            <p>Access to Core Services</p>
            <p>Email Support</p>
          </div>
        </div>
        
        <div className="plan standard">
          <h2>--Standard Plan--</h2>
          <p className="price">$49.99 / month</p>
          <div className="features">
            <p>All Basic Features</p>
            <p>Additional Tools and Resources</p>
            <p>Priority Email Support</p>
          </div>
        </div>
        
        <div className="plan premium">
          <h2>--Premium Plan--</h2>
          <p className="price">$99.99 / month</p>
          <div className="features">
            <p>All Standard Features</p>
            <p>Exclusive Access to Premium Features</p>
            <p>24/7 Phone and Email Support</p>
          </div>
        </div>
      </div>
      <p>
        <i className="disclaimer">*All plans include a 30-day money-back guarantee. No commitments—cancel anytime!</i>
      </p>
    </div>
  );
}

export default Pricing;
