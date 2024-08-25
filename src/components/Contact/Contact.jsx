import React, { useState } from 'react'

function Contact() {
  const customFontStyle = {
    fontFamily: "'Geist Regular', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}`;

    // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp number, including country code
    const whatsappNumber = '+919760302690';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div 
        style={customFontStyle} 
        className='p-2 md:p-20 text-xl md:text-4xl border-b-2 border-black m-2 md:m-8'
      >
        <h1 className='flex justify-center text-3xl md:text-5xl'>Contact Form</h1>
        <h2 className='mt-10 md:mt-20'>
          Hello Sir! , Please Enter Your Name Here <span><input className='border-b-2 border-black w-full md:w-auto' type="text" name="name" value={formData.name} onChange={handleChange} required /></span> , This is Contact Form , <br className='md:hidden'/><br className='md:hidden'/>
          Please Enter Your Email Here <input className='border-b-2 border-black w-full md:w-auto' type="email" name="email" value={formData.email} onChange={handleChange} required /> , For a Easy Contact , <br className='md:hidden'/><br className='md:hidden'/>
          Can You Write Down Your Mobile Number <input className='border-b-2 border-black w-full md:w-auto' type="tel" name="phone" value={formData.phone} onChange={handleChange} required /> , <br className='mt-4 md:mt-8' /> <br />
        </h2>
        <h2 className='mt-6 md:mt-10'>Thanks For Reaching me out , i assure you , we will <span className='text-blue-700'>connect</span> soon .</h2>
        <div className='mt-6 md:mt-10 flex justify-center'>
          <button type="submit" className='bg-black text-xl text-white font-bold py-2  px-4 rounded'>
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default Contact