import React, { useState } from 'react';
import axios from 'axios';

const BusinessForm = () => {
  const [business, setBusiness] = useState({
    name: '',
    category: '',
    owner: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    setBusiness({ ...business, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/businesses', business);
      alert('Business added successfully');
    } catch (error) {
      console.error('Error adding business', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Business Name" onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" onChange={handleChange} />
      <input type="text" name="owner" placeholder="Owner Name" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
      <button type="submit">Add Business</button>
    </form>
  );
};

export default BusinessForm;
