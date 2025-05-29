import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, Star, Clock, Percent } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Home');
    const [searchMode, setSearchMode] = useState('dateRange');
    const [travelerMode, setTravelerMode] = useState('select');
    const [monthMode, setMonthMode] = useState('select');

    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      destination: '',
      startDate: '',
      endDate: '',
      numberOfDays: 3,
      travelers: 1,
      month: ''
    });
  
    const [errors, setErrors] = useState({});
  
    const handleInputChange = (name, value) => {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleExploreClick = () => {
    navigate("/travelbooking");
  };

  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.destination.trim()) newErrors.destination = 'Destination is required';
      if (searchMode === 'dateRange') {
        if (!formData.startDate) newErrors.startDate = 'Start date is required';
        if (!formData.endDate) newErrors.endDate = 'End date is required';
      }
      if (searchMode === 'fixedDays' && (!formData.numberOfDays || formData.numberOfDays < 1)) {
        newErrors.numberOfDays = 'Must be at least 1 day';
      }
      if (travelerMode === 'select' && (!formData.travelers || formData.travelers < 1)) {
        newErrors.travelers = 'Must select at least 1 traveler';
      }
      if (monthMode === 'select' && !formData.month) {
        newErrors.month = 'Month is required';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log('Form submitted:', formData);
        alert('Search submitted! Check console for values.');
      }
    };
  
    const toggleSearchMode = () => setSearchMode(prev => prev === 'dateRange' ? 'fixedDays' : 'dateRange');
    const toggleTravelerMode = () => setTravelerMode(prev => prev === 'select' ? 'fixed' : 'select');
    const toggleMonthMode = () => setMonthMode(prev => prev === 'select' ? 'fixed' : 'select');
  
    const styles = {
      container: { minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' },
      header: { position: 'fixed', top: 0, left: 0, right: 0, background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', padding: '15px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 1000 },
      logo: { display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: 'bold', color: '#667eea' },
      logoIcon: { width: '30px', height: '30px', background: 'linear-gradient(45deg, #667eea, #764ba2)', borderRadius: '6px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '16px' },
      nav: { display: 'flex', gap: '30px' },
      navLink: { color: '#666', textDecoration: 'none', fontSize: '16px', fontWeight: '500', cursor: 'pointer' },
      formContainer: { background: 'white', borderRadius: '15px', padding: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', width: '100%', maxWidth: '800px', marginTop: '100px' },
      title: { fontSize: '32px', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '40px' },
      row: { display: 'flex', gap: '20px', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '20px' },
      group: { flex: 1, minWidth: '200px' },
      label: { display: 'block', fontSize: '16px', fontWeight: '600', color: 'black', marginBottom: '8px' },
      input: { width: '100%', padding: '12px 15px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease', boxSizing: 'border-box' },
      select: { width: '100%', padding: '12px 15px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '16px', outline: 'none', backgroundColor: 'white' },
      button: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', transition: 'transform 0.2s ease', minWidth: '120px' },
      toggle: { background: '#f0f0f0', border: '1px solid #ddd', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', cursor: 'pointer', marginLeft: '10px', color: '#666' },
      error: { color: '#e74c3c', fontSize: '12px', marginTop: '5px' },
      fixed: { background: '#f8f9fa', color: '#666', cursor: 'not-allowed' }
    };
  
 
  const [formErrors, setFormErrors] = useState({});

  // Popular destinations data
  const popularDestinations = [
    {
      id: 1,
      name: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop',
      rating: 4.8,
      days: 5,
      price: 1200
    },
    {
      id: 2,
      name: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
      rating: 4.7,
      days: 6,
      price: 1500
    },
    {
      id: 3,
      name: 'New York',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop',
      rating: 4.6,
      days: 4,
      price: 1100
    }
  ];

  // Top destinations data
  const topDestinations = [
    { name: 'Kyoto, Japan', rating: 4.9, days: 7, price: 1800, image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=300&h=200&fit=crop' },
    { name: 'Santorini, Greece', rating: 4.8, days: 5, price: 2200, image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=200&fit=crop' },
    { name: 'Banff, Canada', rating: 4.7, days: 6, price: 1500, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop' },
    { name: 'Machu Picchu, Peru', rating: 4.9, days: 4, price: 1200, image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=300&h=200&fit=crop' },
    { name: 'Bali, Indonesia', rating: 4.6, days: 8, price: 1100, image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop' },
    { name: 'Rome, Italy', rating: 4.7, days: 5, price: 1700, image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=300&h=200&fit=crop' },
    { name: 'Cape Town, South Africa', rating: 4.5, days: 7, price: 1600, image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=200&fit=crop' },
    { name: 'Tokyo, Japan', rating: 4.7, days: 6, price: 2000, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop' },
    { name: 'Maui, USA', rating: 4.8, days: 7, price: 2500, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop' },
    { name: 'Vienna, Austria', rating: 4.7, days: 4, price: 1400, image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=300&h=200&fit=crop' }
  ];

  // Featured deals data
  const featuredDeals = [
    {
      id: 1,
      destination: 'Maldives Paradise',
      originalPrice: 3500,
      salePrice: 2450,
      discount: 30,
      image: 'https://www.magtheweekly.com/assets/uploads/updates/2019-10-05/0_1_023037_album.jpg',
      duration: '7 Days / 6 Nights',
      rating: 4.9,
      features: ['All Inclusive', 'Private Villa', 'Spa Access']
    },
    {
      id: 2,
      destination: 'Swiss Alps Adventure',
      originalPrice: 2800,
      salePrice: 1960,
      discount: 30,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi49N9A0fxaq85-O-deSg2s3TzypIOZQgkvbB_kdwq4Lmev12p7ksv6mcF7hqcExmFEDg&usqp=CAU',
      duration: '5 Days / 4 Nights',
      rating: 4.8,
      features: ['Mountain Lodge', 'Guided Tours', 'Meals Included']
    },
    {
      id: 3,
      destination: 'Dubai Luxury',
      originalPrice: 2200,
      salePrice: 1540,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop',
      duration: '4 Days / 3 Nights',
      rating: 4.7,
      features: ['5-Star Hotel', 'Desert Safari', 'City Tour']
    }
  ];
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={12} style={{ fill: '#ffd700', color: '#ffd700' }} />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" size={12} style={{ fill: '#ffd700', color: '#ffd700', opacity: 0.5 }} />);
    }
    
    return stars;
  };
  const labelStyle = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '#374151',
  marginBottom: '0.5rem'
};

const iconStyle = { display: 'inline', marginRight: '0.5rem' };

const inputStyle = (hasError) => ({
  width: '100%',
  padding: '0.75rem',
  border: `1px solid ${hasError ? '#ef4444' : '#d1d5db'}`,
  borderRadius: '8px',
  fontSize: '1rem',
  outline: 'none',
  marginBottom: '0.5rem'
});

const toggleBtn = (active) => ({
  padding: '0.25rem 0.75rem',
  fontSize: '0.75rem',
  borderRadius: '9999px',
  border: '1px solid #d1d5db',
  backgroundColor: active ? '#667eea' : '#f1f5f9',
  color: active ? '#fff' : '#374151',
  cursor: 'pointer'
});

const errorText = {
  color: '#ef4444',
  fontSize: '0.75rem',
  marginTop: '-0.25rem',
  marginBottom: '0.5rem'
};


  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#ffffff',
        padding: '1rem 2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          {/* <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <MapPin size={20} color="white" />
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>EasyBook</span>
          </div> */}
          
          {/* <nav style={{ display: 'flex', gap: '2rem' }}>
            {['Home', 'Login', 'Quotation Builder', 'Quotation Status'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeTab === item ? '#667eea' : '#64748b',
                  fontWeight: activeTab === item ? '600' : '400',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  borderBottom: activeTab === item ? '2px solid #667eea' : 'none'
                }}
              >
                {item}
              </button>
            ))}
          </nav> */}
          
          {/* <div style={{ position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search for flights, hotels, and places"
              style={{
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                width: '300px',
                fontSize: '0.875rem'
              }}
            />
          </div> */}
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Find Your Next Adventure
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '3rem' }}>
            Discover amazing places and create unforgettable memories
          </p>

          {/* Search Form */}
          
        <div style={styles.row}>
          <div style={styles.group}>
            <label style={styles.label}>Destination</label>
            <input type="text" value={formData.destination} onChange={(e) => handleInputChange('destination', e.target.value)} style={{ ...styles.input, borderColor: errors.destination ? '#e74c3c' : '#e0e0e0' }} 
            placeholder='Where to?'
            required 
            />
            {errors.destination && <div style={styles.error}>{errors.destination}</div>}
          </div>

          {searchMode === 'dateRange' ? (
            <>
              <div style={styles.group}>
                <label style={styles.label}>Start Date <button type="button" onClick={toggleSearchMode} style={styles.toggle}>Switch to Days</button></label>
                <input
                      type="date"
                      value={formData.startDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      style={{ ...styles.input, borderColor: errors.startDate ? '#e74c3c' : '#e0e0e0' }}
                />
                {errors.startDate && <div style={styles.error}>{errors.startDate}</div>}
              </div>
              <div style={styles.group}>
                <label style={styles.label}>End Date</label>
                <input
                    type="date"
                    value={formData.endDate}
                    min={formData.startDate || new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    style={{ ...styles.input, borderColor: errors.endDate ? '#e74c3c' : '#e0e0e0' }}
                />
                {errors.endDate && <div style={styles.error}>{errors.endDate}</div>}
              </div>
            </>
          ) : (
            <div style={styles.group}>
              <label style={styles.label}>Number of Days <button type="button" onClick={toggleSearchMode} style={styles.toggle}>Switch to Dates</button></label>
              <input type="number" min="1" value={formData.numberOfDays} onChange={(e) => handleInputChange('numberOfDays', parseInt(e.target.value) || '')} style={{ ...styles.input, borderColor: errors.numberOfDays ? '#e74c3c' : '#e0e0e0' }} />
              {errors.numberOfDays && <div style={styles.error}>{errors.numberOfDays}</div>}
            </div>
          )}

          {travelerMode === 'select' ? (
            <div style={styles.group}>
              <label style={styles.label}>Travelers <button type="button" onClick={toggleTravelerMode} style={styles.toggle}>Fix to 2</button></label>
              <select value={formData.travelers} onChange={(e) => handleInputChange('travelers', parseInt(e.target.value) || '')} style={{ ...styles.select, borderColor: errors.travelers ? '#e74c3c' : '#e0e0e0' }}>
                <option value="">Select travelers</option>
                {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Traveler{n > 1 && 's'}</option>)}
              </select>
              {errors.travelers && <div style={styles.error}>{errors.travelers}</div>}
            </div>
          ) : (
            <div style={styles.group}>
              <label style={styles.label}>Travelers (Fixed) <button type="button" onClick={toggleTravelerMode} style={styles.toggle}>Make Selectable</button></label>
              <input type="text" value="2 Travelers" readOnly style={{ ...styles.input, ...styles.fixed }} />
            </div>
          )}

          {monthMode === 'select' ? (
            <div style={styles.group}>
              <label style={styles.label}>Preferred Month <button type="button" onClick={toggleMonthMode} style={styles.toggle}>Fix to June</button></label>
              <select value={formData.month} onChange={(e) => handleInputChange('month', e.target.value)} style={{ ...styles.select, borderColor: errors.month ? '#e74c3c' : '#e0e0e0' }}>
                <option value="">Select month</option>
                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              {errors.month && <div style={styles.error}>{errors.month}</div>}
            </div>
          ) : (
            <div style={styles.group}>
              <label style={styles.label}>Preferred Month (Fixed) <button type="button" onClick={toggleMonthMode} style={styles.toggle}>Make Selectable</button></label>
              <input type="text" value="June" readOnly style={{ ...styles.input, ...styles.fixed }} />
            </div>
          )}

          <div>
            <button type="submit" style={styles.button} onClick={handleExploreClick}>Explore Now</button>
          </div>
        </div>

        </div>
      </section>

      {/* Featured Deals Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
              Featured Deals
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
              Limited time offers on our most popular destinations
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {featuredDeals.map((deal) => (
              <div
                key={deal.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
                {/* Discount Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <Percent size={14} />
                  {deal.discount}% OFF
                </div>

                <img
                  src={deal.image}
                  alt={deal.destination}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem' }}>
                    {deal.destination}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      {renderStars(deal.rating)}
                    </div>
                    <span style={{ fontSize: '0.875rem', color: '#64748b' }}>({deal.rating})</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginLeft: '1rem' }}>
                      <Clock size={14} color="#64748b" />
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{deal.duration}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {deal.features.map((feature, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: '#e0e7ff',
                          color: '#3730a3',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.875rem', color: '#64748b', textDecoration: 'line-through' }}>
                        ${deal.originalPrice}
                      </span>
                      <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b', marginLeft: '0.5rem' }}>
                        ${deal.salePrice}
                      </span>
                      <span style={{ fontSize: '0.875rem', color: '#64748b' }}> / person</span>
                    </div>
                    <button
                      style={{
                        backgroundColor: '#667eea',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#5a67d8'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#667eea'}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Top Destinations Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: '#1e293b', marginBottom: '3rem' }}>
            Top Destinations to Explore
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {topDestinations.map((destination, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                }}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                    {destination.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
                    {renderStars(destination.rating)}
                    <span style={{ marginLeft: '0.25rem', color: '#64748b', fontSize: '0.75rem' }}>
                      {destination.rating}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem' }}>
                    <span style={{ color: '#64748b' }}>
                      {destination.days} Days
                    </span>
                    <span style={{ fontWeight: 'bold', color: '#1e293b' }}>
                      ${destination.price} / person
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1e293b',
        color: 'white',
        padding: '3rem 2rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <MapPin size={20} color="white" />
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>EasyBook</span>
          </div>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
            Your trusted partner for unforgettable travel experiences around the world.
          </p>
          <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem' }}>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
              © 2024 EasyBook. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;