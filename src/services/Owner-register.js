import axios from "axios";

export const registerUser = async (payload) => {
  try {
    const response = await axios.post(
      "https://lemonchiffon-octopus-104052.hostingersite.com/api/v1/dashboard/owner/register",
      payload
    );
    console.log("API Response:", response.data); // Logs response
    return response.data; // ✅ Return the response so handleSubmit can use it
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw error; // ✅ Re-throw the error so handleSubmit can catch it
  }
};
