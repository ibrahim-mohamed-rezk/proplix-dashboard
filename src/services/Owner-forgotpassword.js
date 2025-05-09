import axios from "axios";
export const OwnerSendCodeService = async (forgotpasswordData) => {
  try {
    console.log("Full payload being sent:", JSON.stringify(forgotpasswordData));

    const response = await axios.post(
      "https://lemonchiffon-octopus-104052.hostingersite.com/api/v1/dashboard/owner/send-code",
      forgotpasswordData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Accept-Language": "en",
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

    if (
      response.data?.status &&
      response.data.msg === "تم إرسال الكود بنجاح."
    ) {
      return response.data;
    }
    if (response.status === 422) {
      throw new Error(response.data?.msg || "Validation error");
    }

    throw new Error(response.data?.msg || "send code failed");
  } catch (error) {
    console.error(" request failed:", error);
    throw error;
  }
};
