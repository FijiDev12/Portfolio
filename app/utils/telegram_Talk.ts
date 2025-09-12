import axios from "axios";
interface TelegramPayload {
  email: string;
  subject: string;
  message: string;
}

export const sendTelegramMessage = async (payload: TelegramPayload) => {
  try {
    // Use absolute path starting with '/'
    const response = await axios.post("/api/sendTelegram", payload);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error sending message:", error.response?.data || error.message);
      throw new Error(error.response?.data?.error || error.message);
    }
    if (error instanceof Error) {
      console.error("Error sending message:", error.message);
      throw error;
    }
    throw new Error("Unknown error sending message");
  }
};
