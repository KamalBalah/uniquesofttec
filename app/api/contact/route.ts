import { NextResponse } from "next/server";

const BOT_TOKEN = "7689432592:AAGtV99J0umATlrLfQSkfFbnwAmtBsewx7g";
const CHAT_ID = "-1003143411934";

interface ContactRequest {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export async function POST(req: Request) {
	try {
		const { name, email, phone, message }: ContactRequest = await req.json();

		if (!name || !email || !phone || !message)
			return NextResponse.json(
				{ success: false, error: "All fields required" },
				{ status: 400 },
			);

		const text = `📩 *رسالة جديدة*\n\n👤 الاسم: ${name}\n✉ الايميل: ${email}\n📞 الهاتف: ${phone}\n💬 الرسالة: ${message}`;

		const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
		const res = await fetch(telegramUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
		});

		console.log(await res.json());

		if (!res.ok) throw new Error("Telegram API error");

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ success: false, error: "Server error" },
			{ status: 500 },
		);
	}
}
