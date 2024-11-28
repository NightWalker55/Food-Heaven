import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import './Contacts.css'


const Contacts = () => {
  return (
    <div className='contacts'>
      <h1>Contacts</h1>
      <div className="contact-details">
        <div className="contactdetails">
        <h3>Find us on</h3>
        <FiInstagram className='contact-icon'/>
        </div>
        <div className="contactdetails">
        <h3>Find us on</h3>
        <FaFacebookF className='contact-icon'/>
        </div>
        <div className="contactdetails">
        <h4>Contact Number - +8801783068186</h4>
        </div>
      </div>
    </div>
  )
}

export default Contacts
