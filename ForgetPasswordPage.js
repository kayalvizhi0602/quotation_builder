import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ForgetPasswordPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // Here you would typically call your API to send reset password email
    },
  });

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#333',
          textAlign: 'center'
        }}>Forgot Password</h1>
        
        <p style={{
          marginBottom: '1.5rem',
          color: '#666',
          textAlign: 'center'
        }}>Enter your email address and we'll send you a link to reset your password.</p>
        
        <form onSubmit={formik.handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: '#333'
            }}>Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                transition: 'border-color 0.2s',
                outline: 'none'
              }}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{
                color: '#e53e3e',
                fontSize: '0.875rem',
                marginTop: '0.25rem'
              }}>{formik.errors.email}</div>
            ) : null}
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              marginTop: '0.5rem'
            }}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        
        <div style={{
          marginTop: '1.5rem',
          textAlign: 'center',
          color: '#666'
        }}>
          <p>Remember your password? <a href="/login" style={{
            color: '#4f46e5',
            fontWeight: '500',
            textDecoration: 'none'
          }}>Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;