import React, { useState } from 'react';
import { db } from 'firebaseConfig.js';
import {Form,FormGroup} from 'reactstrap';
function BookingForm() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [packageSelected, setPackageSelected] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can use axios or fetch to send the form data to your server
    const formData = {
      pickupLocation,
      dropoffLocation,
      pickupDate,
      packageSelected,
      dropoffDate
    };
    // For demonstration, logging the form data to console
    console.log(formData);
    // You can redirect to the bookings page or handle the response as needed
  };

  return (
    <div class='container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pickupLocation">Pickup Location:</label>
        <select id="pickupLocation" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </select><br/><br/>

        <label htmlFor="dropoffLocation">Dropoff Location:</label>
        <select id="dropoffLocation" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)}>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </select><br/><br/>

        <label htmlFor="pickupDate">Pickup Date:</label>
        <input type="date" id="pickupDate" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} /><br/><br/>

        <label htmlFor="package">Choose Package:</label>
        <select id="package" value={packageSelected} onChange={(e) => setPackageSelected(e.target.value)}>
          <option value="package1">Package 1</option>
          <option value="package2">Package 2</option>
          <option value="package3">Package 3</option>
        </select><br/><br/>

        <label htmlFor="dropoffDate">Dropoff Date:</label>
        <input type="date" id="dropoffDate" value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} /><br/><br/>

        <p>Note: For outstanding rides, only booking amount of 500/- is charged (rest charge depends on Rate/Km).</p><br/>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
export default {db};