import axios from 'axios';

export const OwnerLoginService = async (loginData) => {
  try {
    // Log the payload you're sending
    console.log("Login payload:", loginData);

    const response = await axios.post(
      'https://lemonchiffon-octopus-104052.hostingersite.com/api/v1/dashboard/owner/login',
      loginData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Accept-Language': 'en',
        },
        validateStatus: (status) => 
          (status >= 200 && status < 300) || status === 422 || status === 401
      }
    );

    // Log the entire response for debugging
    console.log("API response:", {
      status: response.status,
      data: response.data,
      headers: response.headers
    });

    if (response.status === 200 && response.data?.token) {
      return response.data; // Success
    }

    if (response.status === 422) {
      throw new Error(response.data?.msg || 'Validation error: Missing or invalid data.');
    }

    if (response.status === 401) {
      throw new Error(response.data?.msg || 'Unauthorized: Invalid email or password.');
    }

    throw new Error(response.data?.msg || 'Login failed');

  } catch (error) {
    console.error("Login request failed:", error);
    throw error;
  }
};
