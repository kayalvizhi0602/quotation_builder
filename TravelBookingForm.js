import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const TravelBookingForm = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [filters, setFilters] = useState({
    destinationType: [],
    budget: [],
    rating:[],
    food:[],
    flight:[],
    transfers:[],
    duration: [],
    activities: [],
    travelMonth: []
  });
  const navigate = useNavigate();

  const travelDestinations = [
    {
      id: 1,
      name: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=250&fit=crop',
      rating: 4.2,
      travelers: '26,928+ Travelers',
      bestTime: 'OCT - MAR',
      priceRange: '₹ 7K to 2Lac',
      description: 'One of India\'s most scenic states, Kerala is...',
      category: 'India'
    },
    {
      id: 2,
      name: 'Himachal',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=250&fit=crop',
      rating: 4.2,
      travelers: '21,408+ Travelers',
      bestTime: 'APR - JUL',
      priceRange: '₹ 7K to 49K',
      description: 'With stunning snowy peaks and lush valleys, H...',
      category: 'India'
    },
    {
      id: 3,
      name: 'Maldives',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&h=250&fit=crop',
      rating: 4.6,
      travelers: '11,696+ Travelers',
      bestTime: 'JUL - APR',
      priceRange: '₹ 15K to 8Lac',
      description: 'The whimsical beauty of Maldives invites tour...',
      category: 'International'
    },
    {
      id: 4,
      name: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop',
      rating: 4.5,
      travelers: '8,569+ Travelers',
      bestTime: 'OCT - FEB',
      priceRange: '₹ 25K to 1Lac',
      description: 'Dubai is located on the Eastern coast of the...',
      category: 'International'
    },
    {
      id: 5,
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=250&fit=crop',
      rating: 4.3,
      travelers: '10,489+ Travelers',
      bestTime: 'OCT - MAR',
      priceRange: '₹ 5K to 85K',
      description: 'Goa is one of the most astounding holiday spo...',
      category: 'India'
    },
    {
      id: 6,
      name: 'Andaman',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=250&fit=crop',
      rating: 4.4,
      travelers: '14,035+ Travelers',
      bestTime: 'SEP - MAR',
      priceRange: '₹ 13K to 1Lac',
      description: 'The unique islands of Andaman showcase the pr...',
      category: 'India'
    },
    {
      id: 7,
      name: 'Mauritius',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop',
      rating: 4.3,
      travelers: '3,821+ Travelers',
      bestTime: 'SEP - MAR',
      priceRange: '₹ 18K to 90K',
      description: 'Situated in the Indian Ocean, Mauritius is an...',
      category: 'International'
    },
    {
      id: 8,
      name: 'Thailand',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=250&fit=crop',
      rating: 4.4,
      travelers: '11,419+ Travelers',
      bestTime: 'APR - JUN',
      priceRange: '₹ 10K to 1Lac',
      description: 'Fun Loving, Exotic, Cultured and Historic, Tha...',
      category: 'International'
    }
  ];

  const toggleExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };
     const handlePackageExplore = () => {
    navigate("/packageExplore");
  };
  const handleTravelItinerary = () => {
    navigate("/travelItinerary");
  };

  const handleCheckboxChange = (fieldName, value) => {
    setFilters(prev => {
      const currentValues = prev[fieldName] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
      return {
        ...prev,
        [fieldName]: newValues
      };
    });
  };

  const clearFilter = (fieldName) => {
    setFilters(prev => ({
      ...prev,
      [fieldName]: []
    }));
  };

  const resetAllFilters = () => {
    setFilters({
      destinationType: [],
      budget: [],
      duration: [],
      activities: [],
      travelMonth: []
    });
  };

  const filterContainerStyle = {
    width: '280px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    height: 'fit-content',
    position: 'sticky',
    top: '20px'
  };

  const filterSectionStyle = {
    marginBottom: '24px',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '20px'
  };

  const filterTitleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const checkboxGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const checkboxItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const checkboxStyle = {
    width: '16px',
    height: '16px',
    accentColor: '#059669',
    cursor: 'pointer'
  };

  const labelStyle = {
    fontSize: '14px',
    color: '#374151',
    cursor: 'pointer'
  };

  const clearButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#6b7280',
    fontSize: '12px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const resetButtonStyle = {
    padding: '6px 12px',
    backgroundColor: '#f3f4f6',
    border: 'none',
    borderRadius: '6px',
    color: '#6b7280',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const destinationGridStyle = {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
    gap: '20px',
    padding: '20px'
  };

  const destinationCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  };

  const cardImageContainerStyle = {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  };

  const cardImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const bestTimeTagStyle = {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: '500'
  };

  const ratingTagStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  };

  const travelersCountStyle = {
    position: 'absolute',
    bottom: '12px',
    left: '12px',
    color: 'white',
    fontSize: '13px',
    fontWeight: '500',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
  };

  const cardContentStyle = {
    padding: '16px'
  };

  const destinationNameStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const priceRangeStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#059669',
    marginBottom: '4px'
  };

  const perPersonStyle = {
    fontSize: '12px',
    color: '#6b7280',
    marginBottom: '8px'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.4',
    marginBottom: '12px'
  };

  const expandButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#3b82f6',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const exploreButtonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1f2937',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginTop: '12px'
  };

  const CheckboxGroup = ({ title, fieldName, options }) => (
    <div style={filterSectionStyle}>
      <div style={filterTitleStyle}>
        <span>{title}</span>
        <button 
          type="button" 
          onClick={() => clearFilter(fieldName)}
          style={clearButtonStyle}
        >
          CLEAR
        </button>
      </div>
      <div style={checkboxGroupStyle}>
        {options.map(option => (
          <div key={option} style={checkboxItemStyle}>
            <input
              type="checkbox"
              id={`${fieldName}-${option}`}
              checked={filters[fieldName].includes(option)}
              onChange={() => handleCheckboxChange(fieldName, option)}
              style={checkboxStyle}
            />
            <label htmlFor={`${fieldName}-${option}`} style={labelStyle}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: '20px', backgroundColor: '#f9fafb', minHeight: '100vh', padding: '20px' }}>
      {/* Filters Panel */}
      <div style={filterContainerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', margin: 0 }}>Filters</h2>
          <button 
            type="button" 
            onClick={resetAllFilters}
            style={resetButtonStyle}
          >
            RESET
          </button>
        </div>

        <CheckboxGroup 
          title="Type Of Destination" 
          fieldName="destinationType"
          options={['India', 'International']}
        />

        <CheckboxGroup 
          title="Budget Per Person ( in Rs. )" 
          fieldName="budget"
          options={[
            'Less than 10,000',
            '10,000 - 20,000',
            '20,000 - 40,000',
            '40,000 - 60,000',
            '60,000 - 80,000',
            'Above 80,000'
          ]}
        />
        <CheckboxGroup 
          title="Flight" 
          fieldName="flight"
          options={[
            'Yes',
            'No',
          ]}
        />
         <CheckboxGroup 
          title="Hotel Star Rating" 
          fieldName="rating"
          options={[
            '⭐⭐⭐⭐⭐ 5 Star ',
            '⭐⭐⭐⭐ 4 Star',
            '⭐⭐⭐ 3 Star',
            '⭐⭐ 2 Star',
          ]}
        />
        <CheckboxGroup 
          title="Transfers" 
          fieldName="transfers"
          options={[
            'City Tours',
            'Day Tours',
            'Airport Transfers',
            'Local Transfers',
            'Hourly Packages',
          ]}
        />
         <CheckboxGroup 
          title="Food and Beverage" 
          fieldName="food"
          options={[
            'Breakfast Only',
            'Breakfast & Dinner',
            'All Meals Included',
            'Dinner Only',
           
          ]}
        />
        <CheckboxGroup 
          title="Duration ( in Days )" 
          fieldName="duration"
          options={['1 to 3', '4 to 6', '7 to 9', '10 to 12', '13 or more']}
        />
        <div style={{ ...filterSectionStyle, borderBottom: 'none', paddingBottom: 0 }}>
          <div style={filterTitleStyle}>
            <span>Month of Travel</span>
            <button 
              type="button" 
              onClick={() => clearFilter('travelMonth')}
              style={clearButtonStyle}
            >
              CLEAR
            </button>
          </div>
          <div style={checkboxGroupStyle}>
            {['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'].map(month => (
              <div key={month} style={checkboxItemStyle}>
                <input
                  type="checkbox"
                  id={`travelMonth-${month}`}
                  checked={filters.travelMonth.includes(month)}
                  onChange={() => handleCheckboxChange('travelMonth', month)}
                  style={checkboxStyle}
                />
                <label htmlFor={`travelMonth-${month}`} style={labelStyle}>{month}</label>
              </div>
            ))}
          </div>
        </div>

        <CheckboxGroup 
          title="Activities" 
          fieldName="activities"
          options={['Nature', 'Beach', 'Water Activities', 'City Tours', 'Self Drive']}
        />
      </div>

      {/* Destination Cards */}
      <div style={destinationGridStyle}>
        {travelDestinations.map(destination => (
          <div 
            key={destination.id} 
            style={destinationCardStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            <div style={cardImageContainerStyle}>
              <img 
                src={destination.image} 
                alt={destination.name}
                style={cardImageStyle}
              />
              <div style={bestTimeTagStyle}>
                Best time:<br />
                {destination.bestTime}
              </div>
              <div style={ratingTagStyle}>
                <Star size={12} fill="#fbbf24" color="#fbbf24" />
                {destination.rating}
              </div>
              <div style={travelersCountStyle}>
                {destination.travelers}
              </div>
            </div>
            
            <div style={cardContentStyle}>
              <h3 style={destinationNameStyle}>{destination.name}</h3>
              <div style={priceRangeStyle}>{destination.priceRange}</div>
              <div style={perPersonStyle}>
                per person<br />
                <span style={{ color: '#d1d5db' }}>(Flight Excluded)</span>
              </div>
              <p style={descriptionStyle}>
                {expandedCard === destination.id 
                  ? `${destination.description} This is additional expanded content showing more details about the destination, activities available, and what makes it special for travelers.`
                  : destination.description
                }
              </p>
              <button 
                type="button"
                onClick={() => toggleExpand(destination.id)}
                style={expandButtonStyle}
              >
                {expandedCard === destination.id ? 'COLLAPSE INFO ▲' : 'EXPAND INFO ▼'}
              </button>
              <button style={exploreButtonStyle} onClick={handlePackageExplore}>
                EXPLORE PACKAGES
              </button>
               <button style={exploreButtonStyle} onClick={handleTravelItinerary}>
               VIEW ITINERARY
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBookingForm;