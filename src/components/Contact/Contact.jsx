import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  
  const customFontStyle = {
    fontFamily: "'Geist Regular', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form data before submit:', formData);

    try {
      const response = await axios.post('http://localhost:3001/contact', formData);
      
      if (response.status === 200) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        console.error('Server responded with:', response);
        alert('Error sending message: ' + (response.data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error details:', error);
      if (error.response) {
        console.error('Error response:', error.response);
        alert('Network error: ' + error.message);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div 
        style={customFontStyle} 
        className='p-2 md:p-20 text-xl md:text-4xl border-b-2 border-black m-2 md:m-8'
      >
        <h1 className='flex justify-center text-3xl md:text-5xl'>Contact Form</h1>
        <h2 className='mt-10 md:mt-20'>
          Hello Sir! , Please Enter Your Name Here 
          <input 
            className='border-b-2 border-black w-full md:w-auto' 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          This is Contact Form   
          <br className='md:hidden'/><br className='md:hidden'/>
          Please Enter Your Email Here 
          <input 
            className='border-b-2 border-black w-full md:w-auto' 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          For Easy Contact :  
          <br className='md:hidden'/><br className='md:hidden'/>
          Can You Write Down Your Mobile Number 
          <input 
            className='border-b-2 border-black w-full md:w-auto' 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
          , 
          <br className='mt-4 md:mt-8' /> 
          <br />
          Please Write Your Message Here:
          <textarea 
            className='border-b-2 border-black w-full md:w-auto' 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </h2>
        <h2 className='mt-6 md:mt-10'>
          Thanks For Reaching me, we will 
          <span className='text-blue-700'> connect</span> soon.
        </h2>
        <div className='mt-6 md:mt-10 flex justify-center'>
          <button 
            type="submit" 
            className='bg-black text-xl text-white font-bold py-2 px-4 rounded'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Contact;
