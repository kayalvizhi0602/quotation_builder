import React, { useState } from 'react';
import { 
  CheckCircle, 
  Download, 
  Eye, 
  CreditCard, 
  MapPin, 
  Calendar, 
  Users, 
  Mail,
  FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const BookingConfirmation = () => {
  const [email, setEmail] = useState('');
  const [isResending, setIsResending] = useState(false);
  
  const navigate = useNavigate('');
  
  const TravelPaymentUI = () =>{
    navigate('/TravelPaymentUI');
  }

  // Booking data
  const bookingData = {
    confirmationNumber: 'TB-123456789',
    totalPrice: 2500.00,
    tripName: 'Tropical Paradise Escape',
    destination: 'Maldives',
    dates: 'October 10th, 2024 - October 17th, 2024',
    passengers: [
      { name: 'Alice Smith', type: 'Adult' },
      { name: 'Bob Johnson', type: 'Adult' }
    ],
    paymentMethod: 'Visa ending in 1234',
    amountPaid: 2500.00
  };

  const generatePDF = () => {
    // Create a simple PDF content
    const pdfContent = `
      BOOKING CONFIRMATION
      ==================
      
      Confirmation Number: ${bookingData.confirmationNumber}
      Trip: ${bookingData.tripName}
      Destination: ${bookingData.destination}
      Dates: ${bookingData.dates}
      
      Passengers:
      ${bookingData.passengers.map(p => `- ${p.name} (${p.type})`).join('\n')}
      
      Payment Information:
      Method: ${bookingData.paymentMethod}
      Amount Paid: $${bookingData.amountPaid.toFixed(2)}
      
      Total Price: $${bookingData.totalPrice.toFixed(2)}
    `;

    // Create and download PDF (simplified version)
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `booking-confirmation-${bookingData.confirmationNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadItinerary = () => {
    const itineraryContent = `
      TRAVEL ITINERARY
      ===============
      
      ${bookingData.tripName}
      ${bookingData.destination}
      ${bookingData.dates}
      
      Day 1: Arrival and Check-in
      - Airport transfer to resort
      - Welcome dinner at beachfront restaurant
      
      Day 2-6: Paradise Activities
      - Snorkeling and diving excursions
      - Spa treatments and relaxation
      - Island hopping tours
      
      Day 7: Departure
      - Check-out and airport transfer
      - Flight departure
      
      Passengers: ${bookingData.passengers.map(p => p.name).join(', ')}
      Confirmation: ${bookingData.confirmationNumber}
    `;

    const blob = new Blob([itineraryContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `itinerary-${bookingData.confirmationNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadPaymentReceipt = () => {
    const receiptContent = `
      PAYMENT RECEIPT
      ==============
      
      Confirmation Number: ${bookingData.confirmationNumber}
      Date: ${new Date().toLocaleDateString()}
      
      Item: ${bookingData.tripName}
      Destination: ${bookingData.destination}
      Duration: ${bookingData.dates}
      
      Payment Method: ${bookingData.paymentMethod}
      Amount Paid: $${bookingData.amountPaid.toFixed(2)}
      
      Status: CONFIRMED
      
      Thank you for your booking!
    `;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `payment-receipt-${bookingData.confirmationNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const viewFullItinerary = () => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <title>Full Itinerary - ${bookingData.tripName}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
            h1 { color: #6366f1; }
            .section { margin: 20px 0; padding: 15px; border-left: 4px solid #6366f1; }
          </style>
        </head>
        <body>
          <h1>${bookingData.tripName}</h1>
          <div class="section">
            <h3>Trip Details</h3>
            <p><strong>Destination:</strong> ${bookingData.destination}</p>
            <p><strong>Dates:</strong> ${bookingData.dates}</p>
            <p><strong>Confirmation:</strong> ${bookingData.confirmationNumber}</p>
          </div>
          
          <div class="section">
            <h3>Detailed Itinerary</h3>
            <h4>Day 1: Arrival</h4>
            <ul>
              <li>Airport pickup and transfer to resort</li>
              <li>Check-in and welcome refreshments</li>
              <li>Resort orientation tour</li>
              <li>Welcome dinner at Sunset Restaurant</li>
            </ul>
            
            <h4>Day 2-3: Ocean Adventures</h4>
            <ul>
              <li>Morning snorkeling at Coral Gardens</li>
              <li>Afternoon diving excursion</li>
              <li>Sunset cruise with dinner</li>
              <li>Spa treatments and beach relaxation</li>
            </ul>
            
            <h4>Day 4-5: Island Exploration</h4>
            <ul>
              <li>Island hopping tour</li>
              <li>Local village visit</li>
              <li>Traditional cooking class</li>
              <li>Private beach picnic</li>
            </ul>
            
            <h4>Day 6: Adventure & Relaxation</h4>
            <ul>
              <li>Water sports activities</li>
              <li>Couples massage</li>
              <li>Farewell dinner</li>
            </ul>
            
            <h4>Day 7: Departure</h4>
            <ul>
              <li>Check-out and airport transfer</li>
              <li>Flight departure</li>
            </ul>
          </div>
          
          <div class="section">
            <h3>Passengers</h3>
            ${bookingData.passengers.map(p => `<p>${p.name} (${p.type})</p>`).join('')}
          </div>
        </body>
      </html>
    `);
    newWindow.document.close();
  };

  const resendConfirmationEmail = async () => {
    if (!email.trim()) {
      alert('Please enter a valid email address');
      return;
    }

    setIsResending(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Confirmation email sent to ${email}`);
      setIsResending(false);
      setEmail('');
    }, 2000);
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '10px'
        }}>Booking Confirmation</h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '30px'
      }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Booking Confirmed Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#6366f1',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <CheckCircle size={28} />
              Booking Confirmed!
            </h2>
            <p style={{
              color: '#6b7280',
              marginBottom: '20px',
              fontSize: '16px'
            }}>
              Your trip is all set. Here are the details:
            </p>

            <div style={{
              backgroundColor: '#d1fae5',
              border: '1px solid #a7f3d0',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <CheckCircle size={20} style={{ color: '#059669' }} />
              <div>
                <div style={{ fontWeight: '600', color: '#059669', marginBottom: '4px' }}>
                  Success!
                </div>
                <div style={{ color: '#047857', fontSize: '14px' }}>
                  Your booking has been successfully confirmed. A confirmation email has been sent to your inbox.
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Details */}
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
            }}>Confirmation Details</h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              <div>
                <div style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>
                  Confirmation Number:
                </div>
                <div style={{ fontWeight: '600', color: '#1f2937', fontSize: '16px' }}>
                  {bookingData.confirmationNumber}
                </div>
              </div>
              <div>
                <div style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>
                  Total Price:
                </div>
                <div style={{ fontWeight: '600', color: '#1f2937', fontSize: '16px' }}>
                  ${bookingData.totalPrice.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary Overview */}
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
            }}>Itinerary Overview</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FileText size={20} style={{ color: '#6366f1' }} />
                <div>
                  <div style={{ fontWeight: '600', color: '#1f2937' }}>
                    {bookingData.tripName}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={20} style={{ color: '#ef4444' }} />
                <div style={{ color: '#6b7280' }}>
                  {bookingData.destination}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Calendar size={20} style={{ color: '#f59e0b' }} />
                <div style={{ color: '#6b7280' }}>
                  {bookingData.dates}
                </div>
              </div>
            </div>
          </div>

          {/* Passengers */}
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
            }}>Passengers</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {bookingData.passengers.map((passenger, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Users size={18} style={{ color: '#6366f1' }} />
                  <div>
                    <span style={{ fontWeight: '500', color: '#1f2937' }}>
                      {passenger.name}
                    </span>
                    <span style={{ 
                      marginLeft: '8px', 
                      color: '#6b7280', 
                      fontSize: '14px',
                      backgroundColor: '#f3f4f6',
                      padding: '2px 8px',
                      borderRadius: '12px'
                    }}>
                      {passenger.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Information */}
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
            }}>Payment Information</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CreditCard size={20} style={{ color: '#6366f1' }} />
                <div>
                  <div style={{ color: '#6b7280', fontSize: '14px', marginBottom: '2px' }}>
                    Payment Method:
                  </div>
                  <div style={{ fontWeight: '500', color: '#1f2937' }}>
                    {bookingData.paymentMethod}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#22c55e',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '12px' }}>$</span>
                </div>
                <div>
                  <div style={{ color: '#6b7280', fontSize: '14px', marginBottom: '2px' }}>
                    Amount Paid:
                  </div>
                  <div style={{ fontWeight: '500', color: '#1f2937' }}>
                    ${bookingData.amountPaid.toFixed(2)}
                  </div>
                </div>
              </div>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
    </div>

            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Your Next Steps */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '20px'
            }}>Your Next Steps</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={viewFullItinerary}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#5856eb'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#6366f1'}
              >
                <Eye size={16} />
                View Full Itinerary
              </button>

              <button
                onClick={downloadItinerary}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  color: '#374151',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f3f4f6';
                  e.target.style.borderColor = '#d1d5db';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.borderColor = '#e5e7eb';
                }}
              >
                <Download size={16} />
                Download Itinerary PDF
              </button>

              <button
                onClick={downloadPaymentReceipt}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  color: '#374151',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f3f4f6';
                  e.target.style.borderColor = '#d1d5db';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.borderColor = '#e5e7eb';
                }}
              >
                <Download size={16} />
                Download Payment Receipt
              </button>
            </div>
          </div>

          {/* Need Assistance */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '16px'
            }}>Need Assistance?</h3>

            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              lineHeight: '1.5',
              marginBottom: '20px'
            }}>
              Review your booking details carefully. If you need to make changes or have questions, please contact our support team.
            </p>

            <div style={{ marginBottom: '16px' }}>
              <div style={{
                color: '#374151',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                Resend Confirmation Email
              </div>
              
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '10px 12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
                <button
                  onClick={resendConfirmationEmail}
                  disabled={isResending}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: isResending ? '#9ca3af' : '#6366f1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: isResending ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    if (!isResending) e.target.style.backgroundColor = '#5856eb';
                  }}
                  onMouseOut={(e) => {
                    if (!isResending) e.target.style.backgroundColor = '#6366f1';
                  }}
                >
                  <Mail size={14} />
                  {isResending ? 'Sending...' : 'Resend'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;