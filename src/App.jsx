import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({
    series: 'Select Category',
    identity: '',
    endpoint: '',
    brief: '',
    location: 'Select Domain'
  });
  const [submitted, setSubmitted] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Secure Payload Dispatched:', form);
    setSubmitted(false); // Keeps form state interactive or toggle as needed
    alert('Thank you! Your project briefing has been simulated successfully.');
  };

  // Corporate Design Tokens & Systems
  const theme = {
    accent: '#1c69d4', // BMW Inspired High-Performance Blue
    dark: '#262626',
    lightGray: '#f2f2f2',
    border: '#e6e6e6',
    textMain: '#262626',
    textLight: '#666666'
  };

  const styles = {
    wrapper: {
      backgroundColor: '#ffffff',
      color: theme.textMain,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 4rem',
      height: '80px',
      background: '#ffffff',
      borderBottom: `1px solid ${theme.border}`,
      position: 'sticky',
      top: 0,
      zIndex: 1000
    },
    logo: {
      fontSize: '1.2rem',
      fontWeight: '700',
      letterSpacing: '0.1em',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    logoGraphic: {
      width: '32px',
      height: '32px',
      background: `radial-gradient(circle at center, #fff 35%, ${theme.accent} 35%, ${theme.accent} 50%, #fff 50%, #fff 55%, ${theme.dark} 55%)`,
      borderRadius: '50%',
      border: `1px solid ${theme.dark}`
    },
    hero: {
      height: '50vh',
      backgroundColor: theme.dark,
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 5rem',
      position: 'relative',
      background: 'linear-gradient(135deg, #111111 0%, #2c2c2c 100%)'
    },
    heroSub: {
      fontSize: '1.2rem',
      fontWeight: '300',
      color: '#dddddd',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '0.5rem'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '300',
      lineHeight: '1.1',
      letterSpacing: '-1px',
      margin: 0
    },
    formSection: {
      padding: '5rem 4rem',
      display: 'flex',
      justifyContent: 'center',
      background: '#ffffff'
    },
    formContainer: {
      width: '100%',
      maxWidth: '800px'
    },
    sectionTitle: {
      fontSize: '2.2rem',
      fontWeight: '300',
      marginBottom: '1rem',
      color: '#333333'
    },
    sectionDesc: {
      marginBottom: '3rem',
      color: theme.textLight,
      fontSize: '0.95rem',
      lineHeight: '1.5'
    },
    formRow: {
      display: 'flex',
      gap: '1.5rem',
      marginBottom: '1.5rem'
    },
    formGroup: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#333333'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      outline: 'none',
      fontFamily: 'inherit',
      transition: 'border-color 0.2s ease'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      outline: 'none',
      fontFamily: 'inherit',
      height: '120px',
      resize: 'vertical',
      transition: 'border-color 0.2s ease'
    },
    submitBtn: {
      backgroundColor: theme.accent,
      color: '#ffffff',
      border: 'none',
      padding: '15px 40px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      letterSpacing: '0.05em',
      transition: 'background-color 0.2s ease',
      marginTop: '1.5rem'
    },
    footer: {
      backgroundColor: theme.lightGray,
      padding: '3rem 4rem',
      borderTop: `1px solid ${theme.border}`,
      fontSize: '0.85rem',
      color: theme.textLight,
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Navigation Header */}
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <div style={styles.logoGraphic}></div>
          <span>ENGINEERING HUB</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '600' }}>
          <span style={{ cursor: 'pointer' }}>Architecture</span>
          <span style={{ cursor: 'pointer' }}>Development</span>
          <span style={{ cursor: 'pointer' }}>Analytics</span>
        </div>
      </nav>

      {/* Hero Display Section */}
      <header style={styles.hero}>
        <div style={styles.heroSub}>System Engineering Portfolio</div>
        <h1 style={styles.heroTitle}>SHEER COMPUTATIONAL <br />PERFORMANCE</h1>
      </header>

      {/* Main Form Intake Section */}
      <section style={styles.formSection}>
        <div style={styles.formContainer}>
          <h2 style={styles.sectionTitle}>Request a Project Briefing</h2>
          <p style={styles.sectionDesc}>
            Complete your technical specifications below. The engineering team will review the parameters and establish a structural scope workflow shortly.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Category Drops */}
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Project Scope Type *</label>
                <select 
                  style={styles.input}
                  required
                  onChange={e => setForm({...form, series: e.target.value})}
                >
                  <option>Select Category</option>
                  <option>Full-Stack Application</option>
                  <option>System Automation Utility</option>
                  <option>Data Infrastructure Pipeline</option>
                  <option>UI/UX Motion Architecture</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Deployment Domain *</label>
                <select 
                  style={styles.input}
                  required
                  onChange={e => setForm({...form, location: e.target.value})}
                >
                  <option>Select Domain</option>
                  <option>Cloud Infrastructure (AWS/GCP)</option>
                  <option>Local Distributed Networks</option>
                  <option>Embedded Native Environment</option>
                </select>
              </div>
            </div>

            {/* Client Info Rows */}
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Client Identity / Entity *</label>
                <input 
                  type="text" 
                  style={styles.input} 
                  placeholder="Enter full name or corporate entity" 
                  required
                  onChange={e => setForm({...form, identity: e.target.value})}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Communication Endpoint *</label>
                <input 
                  type="email" 
                  style={styles.input} 
                  placeholder="name@domain.com" 
                  required
                  onChange={e => setForm({...form, endpoint: e.target.value})}
                />
              </div>
            </div>

            {/* System Briefing Text Area */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Technical Manifesto / Project Brief *</label>
              <textarea 
                style={styles.textarea} 
                placeholder="Outline the software requirements, processing parameters, and structural constraints..." 
                required
                onChange={e => setForm({...form, brief: e.target.value})}
              />
            </div>

            {/* Interactive Form Action Button */}
            <button 
              type="submit" 
              style={{
                ...styles.submitBtn,
                backgroundColor: btnHover ? '#1557b0' : theme.accent
              }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >
              SUBMIT REQUEST
            </button>
            
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#777777' }}>
              * Mandatory evaluation parameters. By dispatching this transmission, you authorize database payload processing.
            </p>
          </form>
        </div>
      </section>

      {/* High-Grade Corporate Footer */}
      <footer style={styles.footer}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <span style={{ cursor: 'pointer' }}>Documentation</span>
          <span style={{ cursor: 'pointer' }}>System Registry</span>
        </div>
        <p>&copy; 2026 Developed by AKSHAT SINGH (796)</p>
      </footer>
    </div>
  );
}