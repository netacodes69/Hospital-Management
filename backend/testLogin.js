import fetch from 'node-fetch';

async function testLogin() {
  const url = 'http://localhost:5000/api/v1/user/login';
  const payload = {
    email: "testuser@example.com",
    password: "password123",
    confirmPassword: "password123",
    role: "Patient"
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    console.log('Login response:', data);
  } catch (error) {
    console.error('Error during login test:', error);
  }
}

testLogin();
