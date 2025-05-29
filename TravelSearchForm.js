import React, { useState } from 'react';

const EasyBookForm = () => {
  const [searchMode, setSearchMode] = useState('dateRange');
  const [travelerMode, setTravelerMode] = useState('select');
  const [monthMode, setMonthMode] = useState('select');

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
    label: { display: 'block', fontSize: '14px', fontWeight: '600', color: '#555', marginBottom: '8px' },
    input: { width: '100%', padding: '12px 15px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease', boxSizing: 'border-box' },
    select: { width: '100%', padding: '12px 15px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '16px', outline: 'none', backgroundColor: 'white' },
    button: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', transition: 'transform 0.2s ease', minWidth: '120px' },
    toggle: { background: '#f0f0f0', border: '1px solid #ddd', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', cursor: 'pointer', marginLeft: '10px', color: '#666' },
    error: { color: '#e74c3c', fontSize: '12px', marginTop: '5px' },
    fixed: { background: '#f8f9fa', color: '#666', cursor: 'not-allowed' }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}><div style={styles.logoIcon}>△</div>EasyBook</div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>Search</a>
          <a href="#" style={styles.navLink}>Quotation Builder</a>
          <a href="#" style={styles.navLink}>Quotation Status</a>
        </nav>
      </header>

      <form style={styles.formContainer} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Find Your Next Adventure</h1>
        <div style={styles.row}>
          <div style={styles.group}>
            <label style={styles.label}>Destination</label>
            <input type="text" value={formData.destination} onChange={(e) => handleInputChange('destination', e.target.value)} style={{ ...styles.input, borderColor: errors.destination ? '#e74c3c' : '#e0e0e0' }} />
            {errors.destination && <div style={styles.error}>{errors.destination}</div>}
          </div>

          {searchMode === 'dateRange' ? (
            <>
              <div style={styles.group}>
                <label style={styles.label}>Start Date <button type="button" onClick={toggleSearchMode} style={styles.toggle}>Switch to Days</button></label>
                <input type="date" value={formData.startDate} onChange={(e) => handleInputChange('startDate', e.target.value)} style={{ ...styles.input, borderColor: errors.startDate ? '#e74c3c' : '#e0e0e0' }} />
                {errors.startDate && <div style={styles.error}>{errors.startDate}</div>}
              </div>
              <div style={styles.group}>
                <label style={styles.label}>End Date</label>
                <input type="date" value={formData.endDate} onChange={(e) => handleInputChange('endDate', e.target.value)} style={{ ...styles.input, borderColor: errors.endDate ? '#e74c3c' : '#e0e0e0' }} />
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
            <button type="submit" style={styles.button}>Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EasyBookForm;
