import axios from "axios";

const MOJOAUTH_API_KEY = process.env.MOJOAUTH_API_KEY;

export const verifyMojoauthToken = async (token) => {
  try {
    const response = await axios.post(
      "https://api.mojoauth.com/token/verify",
      { token },
      {
        headers: {
          "X-API-KEY": MOJOAUTH_API_KEY,
          "Content-Type": "application/json",
        },
      },
    );
      return response.data;
  } catch (error) {
    console.error("MojoAuth token verify error:", error.response?.data || error.message);
    throw new Error("Invalid or expired MojoAuth token");
  }
};