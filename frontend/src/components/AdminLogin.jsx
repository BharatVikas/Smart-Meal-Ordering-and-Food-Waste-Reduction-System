import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/admin/login", null, {
        params: { username, password },
      });
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#121212',
      color: '#e0e0e0',
    },
    form: {
      backgroundColor: '#1f1f1f',
      padding: '20px 40px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
    },
    heading: {
      marginBottom: '20px',
      color: '#00bcd4',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#2a2a2a',
      color: '#e0e0e0',
    },
    button: {
      width: '100%',
      padding: '10px',
      border: 'none',
      backgroundColor: '#00bcd4',
      color: '#121212',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0097a7',
    },
    errorMessage: {
      color: 'red',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2 style={styles.heading}>Admin Login</h2>
        <div>
          <label>Username: </label>
          <input
            type="text"
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
        {error && <p style={styles.errorMessage}>{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
