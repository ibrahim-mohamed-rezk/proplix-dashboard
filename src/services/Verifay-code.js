import axios from "axios";
export const OwnerVerifayCodeService = async (data) => {
  try {
    console.log("Full payload being sent:", JSON.stringify(data));

    const token = localStorage.getItem("omah token");
    if (!token) {
      throw new Error("Authentication token not found.");
    }

    const response = await axios.post(
      "https://lemonchiffon-octopus-104052.hostingersite.com/api/v1/dashboard/owner/verify-code",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Accept-Language": "en",
          Authorization: `Bearer ${token}`,
        },
        validateStatus: (status) =>
          (status >= 200 && status < 300) || status === 422,
      }
    );

    console.log("Full API response:", {
      status: response.status,
      data: response.data,
      headers: response.headers,
    });

    if (response.data?.status && response.data.msg === "تم.") {
      return response.data;
    }

    if (response.status === 422) {
      throw new Error(response.data?.msg || "Validation error");
    }

    throw new Error(response.data?.msg || "Send code failed");
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};
