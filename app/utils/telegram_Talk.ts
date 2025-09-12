
import axios from "axios";

export const sendTelegramMessage = async (message: string) => {
    console.log("Sending message to Telegram:", message);
  const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
    text: message,
  };

  try {
    const response = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" },
    });

    
    return response.data;
  } catch (error : any) {
    console.error("Error sending message to Telegram:", error.response?.data || error.message);
    throw error;
  }
};
