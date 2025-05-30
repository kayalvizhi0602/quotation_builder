import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Download, Star, Wifi, Car, Utensils, Dumbbell, Plane, MapPin, Clock, Calendar, User, Phone } from 'lucide-react';

const TravelItinerary = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Itinerary Overview' },
    { id: 'hotel', label: 'Hotel Details' },
    { id: 'flight', label: 'Flight Information' },
    { id: 'transfer', label: 'Transfer Details' },
    { id: 'inclusions', label: 'Inclusions and Exclusions' }
  ];

  const hotelImages = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=300&h=200&fit=crop'
  ];

  const reviews = [
    { name: 'Sarah K.', rating: 5, comment: 'Absolutely stunning hotel! The room was beautiful, and the service was impeccable. The rooftop pool is a must-visit. Highly recommend!', date: '2023-11-16' },
    { name: 'John D.', rating: 4, comment: 'Great location and comfortable stay. The staff was friendly and helpful. Breakfast was good, but the gym could use a few more machines.', date: '2023-11-10' },
    { name: 'Emily R.', rating: 5, comment: 'The spa treatment was amazing! Felt completely relaxed. The room had a fantastic view. Will definitely be back.', date: '2023-11-08' },
    { name: 'Michael B.', rating: 5, comment: 'Business trip stay. WiFi was fast and reliable. The business center was well-equipped. Convenient location for meetings.', date: '2023-11-05' },
    { name: 'Jessica L.', rating: 3, comment: 'Nice hotel, but the check-in process was a bit slow. The room was clean and comfortable, though.', date: '2023-11-02' },
    { name: 'David S.', rating: 5, comment: 'Perfect family vacation stay. Kids loved the pool. Staff went out of their way to accommodate us. Highly satisfied.', date: '2023-10-28' }
  ];

  const handleDownloadPDF = (values) => {
    console.log('Downloading PDF with form data:', values);
    // Here you would implement the actual PDF generation logic
    alert('PDF download initiated! (This is a demo)');
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        style={{ 
          color: i < rating ? '#fbbf24' : '#e5e7eb',
          fill: i < rating ? '#fbbf24' : 'none'
        }} 
      />
    ));
  };

  const containerStyle = {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    padding: '20px'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  };

  const logoStyle = {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px'
  };

  const tabsStyle = {
    display: 'flex',
    gap: '4px',
    marginBottom: '30px',
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflowX: 'auto'
  };

  const tabStyle = (isActive) => ({
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: isActive ? '#6366f1' : 'transparent',
    color: isActive ? 'white' : '#64748b',
    cursor: 'pointer',
    fontWeight: isActive ? '600' : '400',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s'
  });

  const contentStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  };

  const downloadButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    backgroundColor: '#6366f1',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.2s',
    marginBottom: '20px'
  };

  const renderOverviewTab = () => {
    // You can replace this with a prop or state if user selection is available
    const numberOfDays = 14; // Default value
    const dayCardStyle = {
      padding: '20px',
      backgroundColor: '#f3f4f6',
      borderRadius: '10px',
      border: '1px solid #e5e7eb',
      marginBottom: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    };
    // Sample day plan details (replace with your real data if available)
    const dayPlans = [
      {
        destination: "Amsterdam",
        activities: [
          { time: "09:00", description: "Arrive at Schiphol Airport" },
          { time: "11:00", description: "Canal cruise" },
          { time: "14:00", description: "Visit Rijksmuseum" },
          { time: "18:00", description: "Welcome dinner in city center" }
        ],
        accommodation: "Hotel Amsterdam Central",
        transport: "Flight KL123, Private Transfer"
      },
      {
        destination: "Amsterdam",
        activities: [
          { time: "10:00", description: "Visit Van Gogh Museum" },
          { time: "13:00", description: "Lunch at Jordaan district" },
          { time: "15:00", description: "Explore Jordaan neighborhood" },
          { time: "19:00", description: "Evening walk along canals" }
        ],
        accommodation: "Hotel Amsterdam Central",
        transport: "Public Transport/Walking"
      },
      {
        destination: "Berlin",
        activities: [
          { time: "08:00", description: "Train to Berlin" },
          { time: "13:00", description: "Check-in at hotel" },
          { time: "15:00", description: "Berlin Wall & Brandenburg Gate tour" },
          { time: "19:00", description: "Dinner at Alexanderplatz" }
        ],
        accommodation: "Hotel Berlin City",
        transport: "Train IC234, Taxi"
      },
      {
        destination: "Berlin",
        activities: [
          { time: "10:00", description: "Museum Island visit" },
          { time: "13:00", description: "Lunch at Hackescher Markt" },
          { time: "16:00", description: "Evening at Alexanderplatz" }
        ],
        accommodation: "Hotel Berlin City",
        transport: "Metro/Walking"
      },
      {
        destination: "Prague",
        activities: [
          { time: "09:00", description: "Travel to Prague" },
          { time: "14:00", description: "Old Town Square & Astronomical Clock" },
          { time: "18:00", description: "Dinner in Old Town" }
        ],
        accommodation: "Grand Prague Hotel",
        transport: "Train EC345"
      },
      {
        destination: "Prague",
        activities: [
          { time: "10:00", description: "Prague Castle" },
          { time: "13:00", description: "Lunch at local bistro" },
          { time: "15:00", description: "Charles Bridge walk" },
          { time: "18:00", description: "Local food tasting tour" }
        ],
        accommodation: "Grand Prague Hotel",
        transport: "Walking"
      },
      {
        destination: "Vienna",
        activities: [
          { time: "08:00", description: "Train to Vienna" },
          { time: "12:00", description: "St. Stephen’s Cathedral" },
          { time: "15:00", description: "Ringstrasse walk" },
          { time: "19:00", description: "Dinner at Naschmarkt" }
        ],
        accommodation: "Vienna Royal Inn",
        transport: "Train RJ456"
      },
      {
        destination: "Vienna",
        activities: [
          { time: "10:00", description: "Schönbrunn Palace tour" },
          { time: "14:00", description: "Vienna Opera House visit" },
          { time: "18:00", description: "Evening concert" }
        ],
        accommodation: "Vienna Royal Inn",
        transport: "Metro/Walking"
      },
      {
        destination: "Salzburg",
        activities: [
          { time: "08:00", description: "Day trip to Salzburg" },
          { time: "11:00", description: "Sound of Music tour" },
          { time: "15:00", description: "Explore Salzburg Old Town" },
          { time: "19:00", description: "Return to Vienna" }
        ],
        accommodation: "Vienna Royal Inn",
        transport: "Train RJ789"
      },
      {
        destination: "Vienna",
        activities: [
          { time: "10:00", description: "Free time for shopping and cafes" },
          { time: "15:00", description: "Relax at Stadtpark" }
        ],
        accommodation: "Vienna Royal Inn",
        transport: "Walking"
      },
      {
        destination: "Paris",
        activities: [
          { time: "08:00", description: "Fly to Paris" },
          { time: "12:00", description: "Check-in at hotel" },
          { time: "14:00", description: "Eiffel Tower visit" },
          { time: "18:00", description: "Seine river cruise" }
        ],
        accommodation: "Hotel Paris Centre",
        transport: "Flight AF567, Taxi"
      },
      {
        destination: "Paris",
        activities: [
          { time: "10:00", description: "Louvre Museum" },
          { time: "13:00", description: "Lunch in Montmartre" },
          { time: "15:00", description: "Montmartre exploration" }
        ],
        accommodation: "Hotel Paris Centre",
        transport: "Metro/Walking"
      },
      {
        destination: "Versailles",
        activities: [
          { time: "09:00", description: "Day trip to Versailles Palace" },
          { time: "13:00", description: "Palace gardens tour" },
          { time: "19:00", description: "Farewell dinner in Paris" }
        ],
        accommodation: "Hotel Paris Centre",
        transport: "Train RER C"
      },
      {
        destination: "Paris",
        activities: [
          { time: "08:00", description: "Pack and relax at hotel" },
          { time: "11:00", description: "Departure from Paris" }
        ],
        accommodation: "-",
        transport: "Airport Transfer"
      }
    ];

    return (
      <div style={contentStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
              European Grand Tour
            </h1>
            <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6', maxWidth: '600px' }}>
              Experience the magic of Europe with our carefully curated {numberOfDays}-day journey through iconic cities. 
              From the romantic canals of Amsterdam to the historic streets of Prague, discover art, culture, 
              and culinary delights in this unforgettable adventure.
            </p>
          </div>
          <button 
            type="submit" 
            style={downloadButtonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#5b21b6'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#6366f1'}
          >
            <Download size={16} />
            Download Itinerary
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
            <Calendar style={{ color: '#6366f1', marginBottom: '12px' }} size={24} />
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Duration</h3>
            <p style={{ color: '#64748b' }}>{numberOfDays} Days, {numberOfDays - 1} Nights</p>
          </div>
          <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
            <MapPin style={{ color: '#6366f1', marginBottom: '12px' }} size={24} />
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Destinations</h3>
            <p style={{ color: '#64748b' }}>Amsterdam, Berlin, Prague, Vienna</p>
          </div>
          <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
            <User style={{ color: '#6366f1', marginBottom: '12px' }} size={24} />
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Group Size</h3>
            <p style={{ color: '#64748b' }}>Max 16 travelers</p>
          </div>
        </div>

        {/* Day Plans Section */}
        <div style={{ marginTop: '24px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '18px' }}>Day Plans</h2>
          {Array.from({ length: numberOfDays }, (_, i) => {
            const plan = dayPlans[i];
            return (
              <div key={i} style={{
                ...dayCardStyle,
                borderLeft: '6px solid #6366f1',
                background: '#fff',
                boxShadow: '0 2px 8px rgba(99,102,241,0.07)',
                marginBottom: '28px'
              }}>
                <div style={{
                  minWidth: '56px', height: '56px', background: '#6366f1', color: 'white', borderRadius: '12px', fontWeight: 700, fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px rgba(99,102,241,0.13)', marginRight: '20px'
                }}>{`Day ${i + 1}`}</div>
                <div style={{ flex: 1 }}>
                  {plan ? (
                    <>
                      {/* Destination */}
                      <div style={{ fontSize: '20px', fontWeight: 700, color: '#4f46e5', marginBottom: '6px', letterSpacing: '0.5px' }}>
                        <MapPin size={18} style={{ verticalAlign: 'middle', marginRight: 6, color: '#6366f1' }} />
                        {plan.destination}
                      </div>
                      {/* Activities */}
                      <div style={{ marginBottom: '8px', marginTop: '6px' }}>
                        <span style={{ fontWeight: 600, color: '#1e293b', fontSize: '16px', marginBottom: '2px', display: 'block' }}>Activities:</span>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                          {plan.activities.map((act, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
                              <span style={{
                                background: '#eef2ff',
                                color: '#6366f1',
                                borderRadius: '6px',
                                fontWeight: 600,
                                fontSize: '13px',
                                padding: '2px 10px',
                                marginRight: 10,
                                minWidth: 54,
                                textAlign: 'center',
                                letterSpacing: '0.2px',
                                display: 'inline-block'
                              }}>{act.time}</span>
                              <span style={{ color: '#374151', fontSize: '15px' }}>{act.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Accommodation & Transport */}
                      <div style={{ display: 'flex', gap: '24px', marginTop: '10px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#64748b', fontSize: '15px', background: '#f1f5f9', borderRadius: '8px', padding: '6px 16px', marginRight: '8px' }}>
                          <User size={16} style={{ marginRight: 7, color: '#6366f1' }} />
                          <span style={{ fontWeight: 500 }}>Stay:</span>&nbsp;{plan.accommodation}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#64748b', fontSize: '15px', background: '#f1f5f9', borderRadius: '8px', padding: '6px 16px' }}>
                          <Plane size={16} style={{ marginRight: 7, color: '#6366f1' }} />
                          <span style={{ fontWeight: 500 }}>Transport:</span>&nbsp;{plan.transport}
                        </div>
                      </div>
                    </>
                  ) : (
                    <span style={{ color: '#64748b' }}>No plan details for Day {i + 1}.</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderHotelTab = () => (
    <div style={contentStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>
            The Serenity Suites
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            {renderStars(5)}
            <span style={{ color: '#64748b', marginLeft: '8px' }}>Luxury Hotel</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6', maxWidth: '600px' }}>
            Nestled in the heart of the city, The Serenity Suites offers a tranquil escape with luxurious rooms, 
            exceptional service, and state-of-the-art facilities, perfect for both business and leisure travelers.
          </p>
        </div>
        <button 
          type="submit" 
          style={downloadButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5b21b6'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#6366f1'}
        >
          <Download size={16} />
          Download Itinerary
        </button>
      </div>

      <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Photo Gallery</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '40px' }}>
        {hotelImages.map((img, index) => (
          <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', height: '200px' }}>
            <img 
              src={img} 
              alt={`Hotel view ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Hotel Information</h3>
          
          <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Amenities</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {[
              { icon: <Wifi size={16} />, text: 'Free WiFi' },
              { icon: <Car size={16} />, text: 'Swimming Pool' },
              { icon: <Dumbbell size={16} />, text: 'Gym' },
              { icon: <Utensils size={16} />, text: 'Restaurant' },
              { icon: <MapPin size={16} />, text: 'Spa & Wellness' },
              { icon: <Car size={16} />, text: 'Parking' },
              { icon: <Plane size={16} />, text: 'Airport Shuttle' },
              { icon: <User size={16} />, text: 'Pet Friendly' }
            ].map((amenity, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b' }}>
                {amenity.icon}
                <span style={{ fontSize: '14px' }}>{amenity.text}</span>
              </div>
            ))}
          </div>

          <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Location</h4>
          <p style={{ color: '#64748b', fontSize: '14px' }}>123 Ocean View Ave, Coastal City, CA 90210</p>
        </div>

        <div>
          <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Check-in & Check-out</h4>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Clock size={16} style={{ color: '#64748b' }} />
              <span style={{ fontSize: '14px', color: '#64748b' }}>Check-in: 3:00 PM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} style={{ color: '#64748b' }} />
              <span style={{ fontSize: '14px', color: '#64748b' }}>Check-out: 12:00 PM</span>
            </div>
          </div>

          <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Hotel Policies</h4>
          <div style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
            <p style={{ marginBottom: '12px' }}>
              <strong>Cancellation Policy:</strong> Free cancellation up to 24 hours before check-in.
            </p>
            <p style={{ marginBottom: '12px' }}>
              <strong>Pet Policy:</strong> Pets allowed with $50 fee per stay. Max two pets per room.
            </p>
            <p style={{ marginBottom: '12px' }}>
              <strong>Smoking Policy:</strong> Non-smoking hotel. Cleaning fee applies for violations.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Guest Reviews</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {reviews.map((review, index) => (
            <div key={index} style={{ 
              padding: '20px', 
              backgroundColor: '#f8fafc', 
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{review.name}</h4>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {renderStars(review.rating)}
                </div>
              </div>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5', marginBottom: '12px' }}>
                {review.comment}
              </p>
              <span style={{ color: '#9ca3af', fontSize: '12px' }}>{review.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFlightTab = () => (
    <div style={contentStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b' }}>Flight Information</h2>
        <button 
          type="submit" 
          style={downloadButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5b21b6'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#6366f1'}
        >
          <Download size={16} />
          Download Full Itinerary
        </button>
      </div>
      {/* Attractive flight image banner */}
      <div style={{backgroundImage:'url(https://images.unsplash.com/photo-1609265434879-80576bcdcfa3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'400px',
        width:'100%',
        borderRadius:'12px',
        marginBottom:'20px',
        objectFit:'cover'
      }}>

      </div>
      <div style={{ display: 'grid', gap: '24px' }}>
        <div style={{ 
          padding: '24px', 
          border: '2px solid #e2e8f0', 
          borderRadius: '12px',
          position: 'relative'
        }}>
          <div style={{ 
            backgroundColor: '#10b981', 
            color: 'white', 
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontSize: '12px', 
            fontWeight: '600',
            position: 'absolute',
            top: '16px',
            right: '16px'
          }}>
            Confirmed
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: '#6366f1', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              LH
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>Lufthansa - LH 401</h3>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '20px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Plane size={16} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '14px', color: '#64748b' }}>From: Frankfurt (FRA)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Clock size={16} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '14px', color: '#64748b' }}>Departure: 2024-10-27 10:30</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '14px', color: '#64748b' }}>Duration: 8h 45m</span>
              </div>
            </div>

            <div style={{ 
              width: '40px', 
              height: '2px', 
              backgroundColor: '#e2e8f0',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                right: '-6px',
                top: '-4px',
                width: '0',
                height: '0',
                borderLeft: '6px solid #e2e8f0',
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent'
              }} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Plane size={16} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '14px', color: '#64748b' }}>To: New York (JFK)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '14px', color: '#64748b' }}>Arrival: 2024-10-27 13:15</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          padding: '24px', 
          border: '2px solid #e2e8f0', 
          borderRadius: '12px',
          position: 'relative'
        }}>
          <div style={{ 
            backgroundColor: '#10b981', 
            color: 'white', 
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontSize: '12px', 
            fontWeight: '600',
            position: 'absolute',
            top: '16px',
            right: '16px'
          }}>
            On Time
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: '#1e40af', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              BA
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>British Airways - BA 245</h3>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '20px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Plane size={16} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '14px', color: '#64748b' }}>From: New York (JFK)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Clock size={16} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '14px', color: '#64748b' }}>Departure: 2024-11-03 18:00</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '14px', color: '#64748b' }}>Duration: 7h 00m</span>
              </div>
            </div>

            <div style={{ 
              width: '40px', 
              height: '2px', 
              backgroundColor: '#e2e8f0',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                right: '-6px',
                top: '-4px',
                width: '0',
                height: '0',
                borderLeft: '6px solid #e2e8f0',
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent'
              }} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Plane size={16} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '14px', color: '#64748b' }}>To: London (LHR)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} style={{ color: '#64748b' }} />
                <span style={{ fontSize: '14px', color: '#64748b' }}>Arrival: 2024-11-04 06:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'right' }}>
        <div style={{ 
          display: 'inline-block',
          padding: '16px',
          backgroundColor: '#f8fafc',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>
            Frankfurt Airport (FRA)
          </div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
            Frankfurt
          </div>
        </div>
      </div>
    </div>
  );

  const renderTransferTab = () => (
    <div style={contentStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Transfer Details</h2>
          <p style={{ color: '#64748b', fontSize: '16px' }}>
            Comprehensive information about all your transportation arrangements for this trip, 
            including pick-up and drop-off services.
          </p>
        </div>
        <button 
          type="submit" 
          style={downloadButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5b21b6'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#6366f1'}
        >
          <Download size={16} />
          Download Transfer Details
        </button>
      </div>
      <div style={{backgroundImage:'url(https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize:'100% 100%',
        backgroundPosition:'center',
        height:'400px',
        width:'100%',
        borderRadius:'12px',
        marginBottom:'20px',
        objectFit:'cover'
      }}></div>

      <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>Your Transfer Segments</h3>

      <div style={{ display: 'grid', gap: '24px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '24px' 
        }}>
          <div style={{ 
            padding: '24px', 
            border: '2px solid #e2e8f0', 
            borderRadius: '12px',
            position: 'relative'
          }}>
            <div style={{ 
              backgroundColor: '#10b981', 
              color: 'white', 
              padding: '4px 12px', 
              borderRadius: '20px', 
              fontSize: '12px', 
              fontWeight: '600',
              position: 'absolute',
              top: '16px',
              right: '16px'
            }}>
              Confirmed
            </div>

            <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>
              Inter-city Transfer
            </h4>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>
                <strong>Date:</strong> October 30, 2024 | <strong>Time:</strong> 10:00 AM
              </p>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>
                <strong>From:</strong> The Goring Hotel, London | <strong>To:</strong> Luton Train Station
              </p>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>
                <strong>Vehicle:</strong> Private Minibus
              </p>
            </div>

            <div style={{ padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', color: '#1e293b', marginBottom: '4px' }}>
                <strong>Driver:</strong> Emily Jones
              </p>
              <p style={{ fontSize: '14px', color: '#64748b' }}>
                <strong>Contact:</strong> +44 7700 900456
              </p>
            </div>
          </div>
        </div>

        <div style={{ 
          padding: '24px', 
          border: '2px solid #e2e8f0', 
          borderRadius: '12px',
          position: 'relative',
          maxWidth: '400px'
        }}>
          <div style={{ 
            backgroundColor: '#10b981', 
            color: 'white', 
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontSize: '12px', 
            fontWeight: '600',
            position: 'absolute',
            top: '16px',
            right: '16px'
          }}>
            Confirmed
          </div>

          <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>
            Departure Transfer
          </h4>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>
              <strong>Date:</strong> October 30, 2024 | <strong>Time:</strong> 11:00 AM
            </p>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>
              <strong>From:</strong> The Goring Hotel, London | <strong>To:</strong> London Gatwick Airport (LGW)
            </p>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>
              <strong>Vehicle:</strong> Private Sedan
            </p>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <p style={{ fontSize: '14px', color: '#1e293b', marginBottom: '4px' }}>
              <strong>Driver:</strong> David Brown
            </p>
            <p style={{ fontSize: '14px', color: '#64748b' }}>
              <strong>Contact:</strong> +44 7700 900789
            </p>
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#eff6ff', 
        borderRadius: '12px',
        border: '1px solid #dbeafe'
      }}>
        <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e40af', marginBottom: '12px' }}>
          Important Notes
        </h4>
        <ul style={{ color: '#1e40af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>Please be ready at the designated pick-up location 15 minutes prior to the scheduled time.</li>
          <li style={{ marginBottom: '8px' }}>Inform the driver of any last-minute changes or delays.</li>
          <li style={{ marginBottom: '8px' }}>Ensure you have all your luggage before departing the vehicle.</li>
          <li style={{ marginBottom: '8px' }}>Emergency contact number for transfers: +44 20 1234 5678.</li>
          <li>Vehicle type may be subject to change based on availability, but similar standard will be provided.</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>
          Map Overview
        </h4>
        <div style={{ 
          height: '300px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e2e8f0" fill-opacity="0.4"%3E%3Ccircle cx="9" cy="9" r="1"/%3E%3Ccircle cx="19" cy="9" r="1"/%3E%3Ccircle cx="29" cy="9" r="1"/%3E%3Ccircle cx="39" cy="9" r="1"/%3E%3Ccircle cx="49" cy="9" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}>
          <div style={{ textAlign: 'center', color: '#64748b' }}>
            <MapPin size={48} style={{ marginBottom: '12px' }} />
            <p style={{ fontSize: '16px', fontWeight: '500' }}>Interactive Map</p>
            <p style={{ fontSize: '14px' }}>Route visualization will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInclusionsTab = () => (
    <div style={contentStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
            Inclusions and Exclusions
          </h2>
          <p style={{ color: '#64748b', fontSize: '16px' }}>
            Below is a comprehensive breakdown of what is included in your travel package and what is not, 
            ensuring full transparency for your upcoming trip. Please review these lists carefully.
          </p>
        </div>
        <button 
          type="submit" 
          style={downloadButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5b21b6'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#6366f1'}
        >
          <Download size={16} />
          Download Full Itinerary
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#059669', marginBottom: '20px' }}>
            What's Included
          </h3>
          <div style={{ space: '16px' }}>
            {[
              'Accommodation in luxury 4-star hotels with daily breakfast.',
              'Guided city tours of historical landmarks in each destination.',
              'Private airport transfers upon arrival and departure.',
              'Entrance fees to all listed museums and attractions.',
              'Comprehensive travel insurance (basic coverage for medical emergencies).',
              'Welcome dinner with local cuisine on the first evening.',
              'Local sim card with pre-loaded data for communication.',
              'Inter-city transfers via high-speed train.',
              'Expert local guides in each major city.',
              'Daily mineral water bottles provided.'
            ].map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '12px', 
                marginBottom: '16px' 
              }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: '#059669', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>✓</span>
                </div>
                <span style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#dc2626', marginBottom: '20px' }}>
            What's Excluded
          </h3>
          <div style={{ space: '16px' }}>
            {[
              'International flights to and from the starting point of the trip.',
              'Visa application fees and processing.',
              'Personal expenses such as shopping, laundry, and phone calls.',
              'Optional activities not listed in the itinerary.',
              'Tips and gratuities for guides, drivers, and hotel staff.',
              'Meals not explicitly specified as included in the itinerary.',
              'Additional travel insurance coverage beyond the basic plan.',
              'Porterage services at airports or hotels unless specified.'
            ].map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '12px', 
                marginBottom: '16px' 
              }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: '#dc2626', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>✕</span>
                </div>
                <span style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '40px', 
        padding: '24px', 
        backgroundColor: '#fef3c7', 
        borderRadius: '12px',
        border: '1px solid #fbbf24'
      }}>
        <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#92400e', marginBottom: '12px' }}>
          Important Notice
        </h4>
        <p style={{ color: '#92400e', fontSize: '14px', lineHeight: '1.6' }}>
          Please note that all inclusions and exclusions are subject to change based on availability and 
          seasonal variations. We recommend reviewing your travel insurance policy details and consulting 
          with our travel advisors for any clarifications before your departure.
        </p>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {['Itinerary Overview', 'Hotel Details', 'Flight Information', 'Transfer Details'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveTab(section.toLowerCase().replace(' ', ''))}
              style={{
                padding: '12px 20px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                color: '#64748b',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#6366f1';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#f8fafc';
                e.target.style.color = '#64748b';
              }}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverviewTab();
      case 'hotel':
        return renderHotelTab();
      case 'flight':
        return renderFlightTab();
      case 'transfer':
        return renderTransferTab();
      case 'inclusions':
        return renderInclusionsTab();
      default:
        return renderOverviewTab();
    }
  };

  return (
    <div style={containerStyle}>
      <Formik
        initialValues={{
          travelerName: 'John Doe',
          email: 'john.doe@email.com',
          phone: '+44 7700 900123',
          specialRequests: '',
          emergencyContact: '+44 20 1234 5678'
        }}
        onSubmit={handleDownloadPDF}
      >
        {({ values }) => (
          <Form>
            {/* <div style={headerStyle}>
              <div style={logoStyle}>
                TP
              </div>
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                  Travel Itinerary Pro
                </h1>
                <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                  Your comprehensive travel companion
                </p>
              </div>
            </div> */}

            <div style={tabsStyle}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={tabStyle(activeTab === tab.id)}
                  onMouseOver={(e) => {
                    if (activeTab !== tab.id) {
                      e.target.style.backgroundColor = '#f1f5f9';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeTab !== tab.id) {
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {renderTabContent()}

            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              padding: '30px', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
          </div>
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TravelItinerary;