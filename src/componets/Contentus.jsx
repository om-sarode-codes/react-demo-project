import React from 'react'
import { Link } from 'react-router-dom'


export default function Contactus() {
  return (
    <div className="contact-us">

      <h1>Contact Us</h1>

      <div className="contact-content">

        <h2>We'd Love to Hear From You</h2>

        <p>
          Have a question about our products, orders, or anything else?
          Our team is here to help.
        </p>

        <div className="contact-info">

          <div>
            <h3>Email</h3>
            <p>support@yourbrand.com</p>
          </div>

          <div>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div>
            <h3>Address</h3>
            <p>Surat, Gujarat, India</p>
          </div>

        </div>

        <h2>Customer Support</h2>

        <p>
          Our support team is available Monday to Saturday,
          from 10:00 AM to 6:00 PM.
        </p>

      </div>

    </div>
  )
}