import React, { useState } from 'react';
import { CreditCard, Smartphone, Building, DollarSign, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('credit-card');
   const navigate = useNavigate('');
  const BookingConfirmation = ()=>{
  navigate('/bookingConfirmation')
  }
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardholderName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    promoCode: '',
    differentBilling: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'Credit or Debit Card',
      description: 'Visa, Mastercard, Discover, or American Express',
      icon: <CreditCard size={20} />
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay using your PayPal account',
      icon: <div style={{width: 20, height: 20, backgroundColor: '#0070ba', borderRadius: '50%'}}></div>
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      description: 'Direct bank transfer. Only takes a few steps',
      icon: <Building size={20} />
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      description: 'Pay securely with Apple Pay',
      icon: <Smartphone size={20} />
    }
  ];

  const months = [
    { value: '', label: 'Month' },
    ...Array.from({length: 12}, (_, i) => ({
      value: String(i + 1).padStart(2, '0'),
      label: String(i + 1).padStart(2, '0')
    }))
  ];

  const currentYear = new Date().getFullYear();
  const years = [
    { value: '', label: 'Year' },
    ...Array.from({length: 20}, (_, i) => ({
      value: String(currentYear + i),
      label: String(currentYear + i)
    }))
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          fontSize: '14px',
          color: '#666'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#6366f1',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>1</div>
            <span>Itinerary</span>
          </div>
          
          <div style={{
            width: '40px',
            height: '2px',
            backgroundColor: '#6366f1'
          }}></div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#6366f1',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>2</div>
            <span style={{ color: '#6366f1', fontWeight: '500' }}>Payment</span>
          </div>
          
          <div style={{
            width: '40px',
            height: '2px',
            backgroundColor: '#e5e7eb'
          }}></div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#e5e7eb',
              color: '#9ca3af',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>3</div>
            <span>Confirmation</span>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '30px'
      }}>
        {/* Left Column - Payment Form */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '30px',
            color: '#1f2937'
          }}>Payment Information</h2>

          {/* Payment Methods */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#374151'
            }}>Select Payment Method</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    border: `2px solid ${selectedPayment === method.id ? '#6366f1' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: selectedPayment === method.id ? '#f8faff' : 'white'
                  }}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value={method.id}
                    checked={selectedPayment === method.id}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    style={{ display: 'none' }}
                  />
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid #d1d5db',
                    marginRight: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: selectedPayment === method.id ? '#6366f1' : 'white',
                    borderColor: selectedPayment === method.id ? '#6366f1' : '#d1d5db'
                  }}>
                    {selectedPayment === method.id && (
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'white'
                      }}></div>
                    )}
                  </div>
                  <div style={{ marginRight: '12px', color: '#374151' }}>
                    {method.icon}
                  </div>
                  <div>
                    <div style={{
                      fontWeight: '500',
                      color: '#1f2937',
                      marginBottom: '2px'
                    }}>{method.name}</div>
                    <div style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>{method.description}</div>
                  </div>
                  {selectedPayment === method.id && (
                    <CheckCircle 
                      size={20} 
                      style={{ 
                        marginLeft: 'auto', 
                        color: '#6366f1' 
                      }} 
                    />
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Card Details Form */}
          {selectedPayment === 'credit-card' && (
            <>
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: '#374151'
                }}>Enter Card Details</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '6px'
                    }}>Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '6px'
                    }}>Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.cardholderName}
                      onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 100px', gap: '12px' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>Expiry Date</label>
                      <select
                        value={formData.expiryMonth}
                        onChange={(e) => handleInputChange('expiryMonth', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none',
                          backgroundColor: 'white',
                          cursor: 'pointer',
                          boxSizing: 'border-box'
                        }}
                      >
                        {months.map(month => (
                          <option key={month.value} value={month.value}>{month.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#374151',
                        marginBottom: '6px',
                        opacity: 0
                      }}>Year</label>
                      <select
                        value={formData.expiryYear}
                        onChange={(e) => handleInputChange('expiryYear', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none',
                          backgroundColor: 'white',
                          cursor: 'pointer',
                          boxSizing: 'border-box'
                        }}
                      >
                        {years.map(year => (
                          <option key={year.value} value={year.value}>{year.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        maxLength="4"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: '#374151'
                }}>Billing Address</h3>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#374151'
                }}>
                  <input
                    type="checkbox"
                    checked={formData.differentBilling}
                    onChange={(e) => handleInputChange('differentBilling', e.target.checked)}
                    style={{
                      marginRight: '8px',
                      width: '16px',
                      height: '16px',
                      accentColor: '#6366f1'
                    }}
                  />
                  Use a different billing address
                </label>
              </div>
            </>
          )}

          {/* Promotional Code */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#374151'
            }}>Promotional Code</h3>

            <div style={{ display: 'flex', gap: '12px' }}>
              <input
                type="text"
                placeholder="Promotional Code (Optional)"
                value={formData.promoCode}
                onChange={(e) => handleInputChange('promoCode', e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
              <button
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#f3f4f6',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#e5e7eb';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#f3f4f6';
                }}
              >
                Apply
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '20px',
            borderTop: '1px solid #e5e7eb'
          }}>
            <button
              style={{
                padding: '12px 24px',
                backgroundColor: 'transparent',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#374151',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Cancel
            </button>
            <button
              style={{
                padding: '12px 32px',
                backgroundColor: '#6366f1',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#5856eb';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#6366f1';
              }}
              onClick={BookingConfirmation}
            >
              Proceed to Payment
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          height: 'fit-content'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#1f2937'
          }}>Luxury European Getaway</h3>

          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '20px'
          }}>
            <div style={{ marginBottom: '4px' }}>
              📅 May 15 - May 25
            </div>
            <div>
              👥 2 Guests
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: '20px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '12px',
              fontSize: '14px'
            }}>
              <span style={{ color: '#6b7280' }}>Subtotal</span>
              <span style={{ color: '#1f2937', fontWeight: '500' }}>$4,500.00</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
              fontSize: '14px'
            }}>
              <span style={{ color: '#6b7280' }}>Taxes & Fees</span>
              <span style={{ color: '#1f2937', fontWeight: '500' }}>$350.00</span>
            </div>
            <div style={{
              borderTop: '1px solid #e5e7eb',
              paddingTop: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              <span style={{ color: '#1f2937' }}>Total</span>
              <span style={{ color: '#1f2937' }}>$4,850.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;