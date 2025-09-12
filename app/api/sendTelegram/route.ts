// app/api/sendTelegram/route.ts
'use server';

import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

interface TelegramRequestBody {
  email: string;
  subject: string;
  message: string;
}

interface TelegramApiResponse {
  ok: boolean;
  result: {
    message_id: number;
    chat: {
      id: number;
      type: string;
    };
    date: number;
    text: string;
  };
}

export async function POST(req: Request) {
  try {
    const { email, subject, message }: TelegramRequestBody = await req.json();
    const telegramMessage = `Email: ${email}\nSubject: ${subject}\nMessage: ${message}`;

     const response = await axios.post(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
        chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
        text: telegramMessage,
      }
     );
     console.log("Telegram API response:", response);

        // Return the response data
        return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data || { error: error.message };
      const errorStatus = error.response?.status || 500;
      return NextResponse.json(errorMessage, { status: errorStatus });
    }

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
