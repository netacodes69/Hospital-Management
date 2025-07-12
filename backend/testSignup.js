import fetch from 'node-fetch';

async function testSignup() {
  const url = 'http://localhost:5000/api/v1/user/patient/register';
  const payload = {
    firstName: "Test",
    lastName: "User",
    email: "testuser@example.com",
    phone: "07123456789",
    nic: "1234567890123",
    dob: "1990-01-01",
    gender: "Male",
    password: "password123"
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    console.log('Signup response:', data);
  } catch (error) {
    console.error('Error during signup test:', error);
  }
}

testSignup();
