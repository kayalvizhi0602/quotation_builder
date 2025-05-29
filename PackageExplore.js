import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Users, 
  Calendar,
  X,
  Plane,
  Hotel,
  Car,
  Utensils,
  Camera,
  Waves,
  Mountain,
  Church,
  Sun,
  Umbrella,
  Wind
} from 'lucide-react';


const PackageExplore = () => {
  const [activeModal, setActiveModal] = useState(null);

  const tourData = {
    title: "Goa Paradise",
    subtitle: "5 Days of Sun, Sand & Serenity",
    price: 35000,
    originalPrice: 45000,
    destination: "Goa, India",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    bestTime: "Oct - Mar"
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrival & Beach Relaxation",
      highlights: ["Sunset at Colangute Beach"],
      activities: [
        "Airport pickup",
        "Chilling at Beach",
        "Hotel check-in",
        "Welcome dinner",
        "Colangute Beach"
      ]
    },
    {
      day: 2,
      title: "North Goa Exploration",
      highlights: ["Chapora fort View"],
      activities: [
        "Baga Beach",
        "Chapora Fort",
        "Anjuna Beach",
        "Anjuna Flea Market"
      ]
    },
    {
      day: 3,
      title: "Water Sports & Adventure",
      highlights: ["Thrilling Water Sports"],
      activities: [
        "Baga Beach",
        "Parasailing",
        "Water Sports & Adventure",
        "Breakfast + 2 Dinners",
        "Local Guide Service"
      ]
    },
    {
      day: 4,
      title: "Cultural & Spiritual Tour",
      highlights: ["Old Goa World Heritage Sites"],
      activities: [
        "Basilica of Bom Jesus",
        "Se Cathedral",
        "Spice Plantation",
        "Traditional Goan dinner"
      ]
    },
    {
      day: 5,
      title: "South Goa & Departure",
      highlights: ["Majestic Dudhsagar Falls"],
      activities: [
        "Palolem Beach",
        "Dudhsagar Falls",
        "Last minute shopping",
        "Airport drop off"
      ]
    }
  ];

  const priceBreakdown = [
    { item: "5-Star Beach Resort", price: 14000 },
    { item: "AC Car for 5 Days", price: 8000 },
    { item: "Water Sports & Sightseeing", price: 8000 },
    { item: "Breakfast + 2 Dinners", price: 4000 },
    { item: "Local Guide Service", price: 1000 }
  ];

  const included = [
    "5-star accommodation",
    "Daily breakfast",
    "Airport transfers",
    "Local sightseeing",
    "Professional guide",
    "Water sports activities"
  ];

  const modalContent = {
    destination: {
      title: "Destination: Goa, India",
      content: (
        <div style={{ lineHeight: '1.6' }}>
          <p style={{ marginBottom: '15px', color: '#374151' }}>
            Discover the tropical paradise of Goa, India's smallest state known for its pristine beaches, Portuguese colonial architecture, and vibrant nightlife.
          </p>
          <h4 style={{ color: '#1f2937', fontWeight: '600', marginBottom: '10px' }}>Why Goa?</h4>
          <ul style={{ paddingLeft: '20px', color: '#374151', marginBottom: '15px' }}>
            <li>Beautiful beaches with golden sand</li>
            <li>Rich Portuguese heritage and architecture</li>
            <li>Delicious seafood and local cuisine</li>
            <li>Vibrant nightlife and beach parties</li>
            <li>Water sports and adventure activities</li>
          </ul>
          <h4 style={{ color: '#1f2937', fontWeight: '600', marginBottom: '10px' }}>Key Attractions:</h4>
          <ul style={{ paddingLeft: '20px', color: '#374151' }}>
            <li>Baga Beach & Calangute Beach</li>
            <li>Chapora Fort</li>
            <li>Basilica of Bom Jesus</li>
            <li>Dudhsagar Waterfalls</li>
          </ul>
        </div>
      )
    },
    duration: {
      title: "Duration: 5 Days / 4 Nights",
      content: (
        <div style={{ lineHeight: '1.6' }}>
          <p style={{ marginBottom: '15px', color: '#374151' }}>
            Our carefully planned 5-day itinerary gives you the perfect balance of relaxation, adventure, and cultural exploration.
          </p>
          <h4 style={{ color: '#1f2937', fontWeight: '600', marginBottom: '10px' }}>Daily Schedule:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
              <strong>Day 1:</strong> Arrival & Beach Relaxation
            </div>
            <div style={{ padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
              <strong>Day 2:</strong> North Goa Exploration
            </div>
            <div style={{ padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
              <strong>Day 3:</strong> Water Sports & Adventure
            </div>
            <div style={{ padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
              <strong>Day 4:</strong> Cultural & Spiritual Tour
            </div>
            <div style={{ padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
              <strong>Day 5:</strong> South Goa & Departure
            </div>
          </div>
          <p style={{ marginTop: '15px', color: '#6b7280', fontSize: '14px' }}>
            * Flexible timing allows for personal preferences and rest periods
          </p>
        </div>
      )
    },
    groupSize: {
      title: "Group Size: 2-8 People",
      content: (
        <div style={{ lineHeight: '1.6' }}>
          <p style={{ marginBottom: '15px', color: '#374151' }}>
            Our tours are designed for small, intimate groups to ensure personalized attention and a better travel experience.
          </p>
          <h4 style={{ color: '#1f2937', fontWeight: '600', marginBottom: '10px' }}>Group Benefits:</h4>
          <ul style={{ paddingLeft: '20px', color: '#374151', marginBottom: '15px' }}>
            <li>Personalized attention from guide</li>
            <li>Flexible itinerary adjustments</li>
            <li>Better group dynamics</li>
            <li>Cost-effective pricing</li>
            <li>Easy coordination and communication</li>
          </ul>
          <h4 style={{ color: '#1f2937', fontWeight: '600', marginBottom: '10px' }}>Pricing Structure:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
              <span>2-3 People:</span>
              <span style={{ fontWeight: '600' }}>₹35,000 per person</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
              <span>4-6 People:</span>
              <span style={{ fontWeight: '600' }}>₹32,000 per person</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
              <span>7-8 People:</span>
              <span style={{ fontWeight: '600' }}>₹30,000 per person</span>
            </div>
          </div>
        </div>
      )
    },
    bestTime: {
      title: "Best Time: October - March",
      content: (
        <div style={{ lineHeight: '1.6' }}>
          <p style={{ marginBottom: '15px', color: '#374151' }}>
            The ideal time to visit Goa is during the winter months when the weather is pleasant and perfect for beach activities.
          </p>
          <h4 style={{ color: '#1f2937', fontWeight: '600', marginBottom: '10px' }}>Weather Overview:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Sun size={20} style={{ color: '#f59e0b' }} />
                <strong>October - December:</strong>
              </div>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>
                Temperature: 20-30°C, Low humidity, Perfect for sightseeing
              </p>
            </div>
            <div style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Wind size={20} style={{ color: '#06b6d4' }} />
                <strong>January - March:</strong>
              </div>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>
                Temperature: 18-28°C, Cool breeze, Ideal for water sports
              </p>
            </div>
          </div>
          <h4 style={{ color: '#1f2937', fontWeight: '600', marginTop: '15px', marginBottom: '10px' }}>Avoid:</h4>
          <div style={{ padding: '12px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Umbrella size={20} style={{ color: '#dc2626' }} />
              <strong>June - September (Monsoon):</strong>
            </div>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>
              Heavy rainfall, high humidity, limited outdoor activities
            </p>
          </div>
        </div>
      )
    }
  };

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f8fafc'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        padding: '30px',
        color: 'white',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          marginBottom: '8px',
          margin: 0
        }}>{tourData.title}</h1>
        <p style={{
          fontSize: '18px',
          opacity: 0.9,
          margin: 0
        }}>{tourData.subtitle}</p>
      </div>

      {/* Quick Info Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '30px'
      }}>
        <div
          onClick={() => openModal('destination')}
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid transparent'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
            e.currentTarget.style.borderColor = '#667eea';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <MapPin size={24} style={{ color: '#667eea', marginBottom: '8px' }} />
          <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Destination</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>{tourData.destination}</div>
        </div>

        <div
          onClick={() => openModal('duration')}
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid transparent'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
            e.currentTarget.style.borderColor = '#f59e0b';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <Clock size={24} style={{ color: '#f59e0b', marginBottom: '8px' }} />
          <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Duration</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>{tourData.duration}</div>
        </div>

        <div
          onClick={() => openModal('groupSize')}
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid transparent'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
            e.currentTarget.style.borderColor = '#10b981';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <Users size={24} style={{ color: '#10b981', marginBottom: '8px' }} />
          <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Group Size</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>{tourData.groupSize}</div>
        </div>

        <div
          onClick={() => openModal('bestTime')}
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '2px solid transparent'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
            e.currentTarget.style.borderColor = '#8b5cf6';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <Calendar size={24} style={{ color: '#8b5cf6', marginBottom: '8px' }} />
          <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Best Time</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>{tourData.bestTime}</div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '30px'
      }}>
        {/* Left Column - Itinerary */}
        <div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            marginBottom: '20px'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              📅 5-Day Itinerary
            </h2>

            {itinerary.map((day, index) => (
              <div key={index} style={{
                marginBottom: '24px',
                paddingBottom: '24px',
                borderBottom: index < itinerary.length - 1 ? '1px solid #e5e7eb' : 'none'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#667eea',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}>
                    {day.day}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    Day {day.day}: {day.title}
                  </h3>
                </div>

                <div style={{
                  backgroundColor: '#fef3c7',
                  border: '1px solid #fbbf24',
                  borderRadius: '8px',
                  padding: '12px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#92400e'
                  }}>
                    <span style={{ fontSize: '16px' }}>⭐</span>
                    <span style={{ fontWeight: '500' }}>Highlight:</span>
                    <span>{day.highlights[0]}</span>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '8px'
                }}>
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} style={{
                      padding: '8px 12px',
                      backgroundColor: '#f3f4f6',
                      borderRadius: '6px',
                      fontSize: '14px',
                      color: '#374151',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <span style={{ color: '#667eea' }}>•</span>
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '20px'
            }}>What's Included</h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px'
            }}>
              {included.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '6px',
                  border: '1px solid #bbf7d0'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981'
                  }}></div>
                  <span style={{ fontSize: '14px', color: '#065f46' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Pricing */}
        <div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '16px'
            }}>Package Pricing</h3>

            <div style={{
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#667eea',
                marginBottom: '4px'
              }}>
                ₹ {tourData.price.toLocaleString()}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280'
              }}>
                for 2 people
              </div>
              <div style={{
                fontSize: '16px',
                color: '#ef4444',
                textDecoration: 'line-through',
                marginTop: '4px'
              }}>
                ₹ {tourData.originalPrice.toLocaleString()}
              </div>
            </div>

            <div style={{
              marginBottom: '24px'
            }}>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '12px'
              }}>Price Breakdown</h4>

              {priceBreakdown.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: index < priceBreakdown.length - 1 ? '1px solid #f3f4f6' : 'none'
                }}>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>{item.item}</span>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#1f2937' }}>
                    ₹{item.price.toLocaleString()}
                  </span>
                </div>
              ))}

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                marginTop: '12px',
                borderTop: '2px solid #e5e7eb',
                fontSize: '18px',
                fontWeight: '600'
              }}>
                <span style={{ color: '#1f2937' }}>Total Cost</span>
                <span style={{ color: '#667eea' }}>₹ {tourData.price.toLocaleString()}</span>
              </div>
            </div>

            <div style={{
              backgroundColor: '#fef3c7',
              border: '1px solid #fbbf24',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '20px',
              fontSize: '12px',
              color: '#92400e'
            }}>
              🎉 Early Bird Offer: 15% OFF if booked before March 2024!
            </div>

            <div style={{
              marginBottom: '20px'
            }}>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '12px'
              }}>
                Contact our travel experts for customization and group discounts
              </p>
              <p style={{
                fontSize: '12px',
                color: '#9ca3af'
              }}>
                24/7 Support • Free cancellation • Best Price Guarantee
              </p>
            </div>

            <button style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#ea580c'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#f97316'}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={closeModal}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '80vh',
            overflowY: 'auto',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '5px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <X size={20} style={{ color: '#6b7280' }} />
            </button>

            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '20px',
              paddingRight: '40px'
            }}>
              {modalContent[activeModal]?.title}
            </h2>

            <div>
              {modalContent[activeModal]?.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageExplore;