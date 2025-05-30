import React, { useState } from 'react';
import { Calendar, MapPin, Download, Plus, Eye, Edit3, FileText, Plane } from 'lucide-react';

const TravelDashboard = () => {
  const [downloadHistory, setDownloadHistory] = useState([]);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1
  });
  const [formErrors, setFormErrors] = useState({});
  
  // Sample data
  const upcomingTrips = [
    {
      id: 1,
      destination: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=200&fit=crop",
      dates: "October 15 - October 22, 2024",
      travelers: "2 Traveler(s)"
    }
  ];

  const pastTrips = [
    {
      id: 1,
      destination: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=300&h=200&fit=crop",
      dates: "May 10 - May 18, 2023",
      status: "Completed"
    },
    {
      id: 2,
      destination: "Banff, Canada",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop",
      dates: "August 5 - August 12, 2023",
      status: "Completed"
    },
    {
      id: 3,
      destination: "Marrakech, Morocco",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300&h=200&fit=crop",
      dates: "March 3 - March 9, 2023",
      status: "Completed"
    },
    {
      id: 4,
      destination: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      dates: "November 15 - November 29, 2022",
      status: "Completed"
    },
    {
      id: 5,
      destination: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=300&h=200&fit=crop",
      dates: "July 18 - July 25, 2023",
      status: "Completed"
    }
  ];

  const savedItineraries = [
    {
      id: 1,
      title: "Exploring the Greek Islands",
      duration: "14 days",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Adventure in New Zealand",
      duration: "21 days",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Road Trip California Coast",
      duration: "10 days",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop"
    }
  ];

  const documents = [
    { id: 1, name: "Kyoto Trip Confirmation", type: "Booking Confirmation", icon: "📄" },
    { id: 2, name: "Rome Itinerary Details", type: "Itinerary", icon: "📋" },
    { id: 3, name: "Greek Islands Custom Quote", type: "Quotation", icon: "💰" },
    { id: 4, name: "Travel Insurance Policy 2024", type: "Insurance", icon: "🛡️" }
  ];

  const handleDownload = (docName, docType) => {
    // Check if document was previously downloaded
    const existingDownload = downloadHistory.find(item => item.name === docName);
    
    if (existingDownload) {
      // If previously downloaded, show alert and re-download
      alert(`"${docName}" was previously downloaded on ${existingDownload.date}. Re-downloading...`);
    } else {
      // First time download
      alert(`Downloading "${docName}" for the first time.`);
    }
    
    // Add to download history
    const newDownload = {
      name: docName,
      type: docType,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    };
    
    setDownloadHistory(prev => [newDownload, ...prev.filter(item => item.name !== docName)]);
    
    // Simulate file download
    const element = document.createElement('a');
    const file = new Blob([`${docName} - ${docType}\nDownloaded on: ${newDownload.date} at ${newDownload.time}`], 
      { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${docName.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.destination.trim()) errors.destination = 'Destination is required';
    if (!formData.startDate) errors.startDate = 'Start date is required';
    if (!formData.endDate) errors.endDate = 'End date is required';
    if (!formData.travelers || formData.travelers < 1) errors.travelers = 'At least 1 traveler required';
    
    // Check if end date is after start date
    if (formData.startDate && formData.endDate && new Date(formData.endDate) <= new Date(formData.startDate)) {
      errors.endDate = 'End date must be after start date';
    }
    
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    alert(`New trip planned!\nDestination: ${formData.destination}\nDates: ${formData.startDate} to ${formData.endDate}\nTravelers: ${formData.travelers}`);
    
    // Reset form
    setFormData({
      destination: '',
      startDate: '',
      endDate: '',
      travelers: 1
    });
    setFormErrors({});
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            <Plane style={styles.titleIcon} />
            Travel Dashboard
          </h1>
        </div>

        {/* Add New Trip Form */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <Plus style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>Plan New Trip</h2>
          </div>
          
          <div style={styles.formCard}>
            <div style={styles.form}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Destination</label>
                  <input
                    name="destination"
                    type="text"
                    placeholder="Enter destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    style={{
                      ...styles.input,
                      borderColor: formErrors.destination ? '#dc2626' : '#d1d5db'
                    }}
                  />
                  {formErrors.destination && (
                    <div style={styles.error}>{formErrors.destination}</div>
                  )}
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>Travelers</label>
                  <input
                    name="travelers"
                    type="number"
                    min="1"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    style={{
                      ...styles.input,
                      borderColor: formErrors.travelers ? '#dc2626' : '#d1d5db'
                    }}
                  />
                  {formErrors.travelers && (
                    <div style={styles.error}>{formErrors.travelers}</div>
                  )}
                </div>
              </div>
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Start Date</label>
                  <input
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    style={{
                      ...styles.input,
                      borderColor: formErrors.startDate ? '#dc2626' : '#d1d5db'
                    }}
                  />
                  {formErrors.startDate && (
                    <div style={styles.error}>{formErrors.startDate}</div>
                  )}
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>End Date</label>
                  <input
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    style={{
                      ...styles.input,
                      borderColor: formErrors.endDate ? '#dc2626' : '#d1d5db'
                    }}
                  />
                  {formErrors.endDate && (
                    <div style={styles.error}>{formErrors.endDate}</div>
                  )}
                </div>
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                style={styles.submitButton}
              >
                Plan a New Trip
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Trip */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <Calendar style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>Upcoming Trip</h2>
            <a href="#" style={styles.viewAll}>View All Trips →</a>
          </div>
          
          <div style={styles.cardGrid}>
            {upcomingTrips.map(trip => (
              <div key={trip.id} style={styles.upcomingCard}>
                <div style={styles.cardImage}>
                  <img src={trip.image} alt={trip.destination} style={styles.image} />
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{trip.destination}</h3>
                  <p style={styles.cardDate}>{trip.dates}</p>
                  <p style={styles.cardTravelers}>{trip.travelers}</p>
                  <button style={styles.primaryButton}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Trips */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <MapPin style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>Past Trips</h2>
            <a href="#" style={styles.viewAll}>View Trip History →</a>
          </div>
          
          <div style={styles.cardGrid}>
            {pastTrips.map(trip => (
              <div key={trip.id} style={styles.tripCard}>
                <div style={styles.cardImage}>
                  <img src={trip.image} alt={trip.destination} style={styles.image} />
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{trip.destination}</h3>
                  <p style={styles.cardDate}>{trip.dates}</p>
                  <p style={styles.cardStatus}>{trip.status}</p>
                  <button style={styles.secondaryButton}>View Summary</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Itineraries */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <Edit3 style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>Saved Itineraries</h2>
            <a href="#" style={styles.viewAll}>View All Saved →</a>
          </div>
          
          <div style={styles.cardGrid}>
            {savedItineraries.map(itinerary => (
              <div key={itinerary.id} style={styles.tripCard}>
                <div style={styles.cardImage}>
                  <img src={itinerary.image} alt={itinerary.title} style={styles.image} />
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{itinerary.title}</h3>
                  <p style={styles.cardDate}>{itinerary.duration}</p>
                  <div style={styles.buttonGroup}>
                    <button style={styles.secondaryButton}>View / Customize</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <FileText style={styles.sectionIcon} />
            <h2 style={styles.sectionTitle}>Documents</h2>
            <a href="#" style={styles.viewAll}>View All Documents →</a>
          </div>
          
          <div style={styles.documentList}>
            {documents.map(doc => (
              <div key={doc.id} style={styles.documentItem}>
                <div style={styles.documentInfo}>
                  <span style={styles.documentIcon}>{doc.icon}</span>
                  <div>
                    <h4 style={styles.documentName}>{doc.name}</h4>
                    <p style={styles.documentType}>{doc.type}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(doc.name, doc.type)}
                  style={styles.downloadButton}
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Ready for next adventure */}
        <div style={styles.ctaSection}>
          <h3 style={styles.ctaTitle}>Ready for your next adventure?</h3>
          <p style={styles.ctaSubtitle}>Explore new destinations and start planning your perfect trip today.</p>
          <button style={styles.ctaButton}>Plan a New Trip</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px'
  },
  header: {
    marginBottom: '32px'
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: '0'
  },
  titleIcon: {
    color: '#6366f1'
  },
  section: {
    marginBottom: '48px'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '0',
    flex: 1
  },
  sectionIcon: {
    color: '#6b7280',
    width: '20px',
    height: '20px'
  },
  viewAll: {
    color: '#6366f1',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500'
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  },
  input: {
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  error: {
    color: '#dc2626',
    fontSize: '12px'
  },
  submitButton: {
    backgroundColor: '#6366f1',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    transition: 'background-color 0.2s'
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  },
  upcomingCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0',
    maxWidth: '320px'
  },
  tripCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer'
  },
  cardImage: {
    height: '160px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardContent: {
    padding: '16px'
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0 0 8px 0'
  },
  cardDate: {
    fontSize: '13px',
    color: '#6b7280',
    margin: '0 0 4px 0'
  },
  cardTravelers: {
    fontSize: '13px',
    color: '#6b7280',
    margin: '0 0 16px 0'
  },
  cardStatus: {
    fontSize: '13px',
    color: '#059669',
    margin: '0 0 16px 0',
    fontWeight: '500'
  },
  primaryButton: {
    backgroundColor: '#6366f1',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    width: '100%'
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#6b7280',
    padding: '8px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '13px',
    cursor: 'pointer',
    width: '100%'
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px'
  },
  documentList: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0'
  },
  documentItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    borderBottom: '1px solid #f1f5f9'
  },
  documentInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  documentIcon: {
    fontSize: '20px'
  },
  documentName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#1e293b',
    margin: '0 0 2px 0'
  },
  documentType: {
    fontSize: '12px',
    color: '#6b7280',
    margin: '0'
  },
  downloadButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'transparent',
    color: '#6366f1',
    padding: '6px 12px',
    border: '1px solid #6366f1',
    borderRadius: '6px',
    fontSize: '12px',
    cursor: 'pointer'
  },
  ctaSection: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '32px',
    textAlign: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0'
  },
  ctaTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0 0 8px 0'
  },
  ctaSubtitle: {
    fontSize: '14px',
    color: '#6b7280',
    margin: '0 0 24px 0'
  },
  ctaButton: {
    backgroundColor: '#6366f1',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer'
  }
};

export default TravelDashboard;