"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [status, setStatus] = useState<string>("");

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setStatus("جار الارسال...");
		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		const result = await res.json();
		setStatus(result.success ? "تم الإرسال، سنتواصل معك قريبا" : "فشل الإرسال");
	};

	return (
		<div id="contact" className="bg-slate text-white pt-10">
			<h2 className="text-3xl text-green text-center font-bold mb-6">
				تواصل معنا
			</h2>
			<form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
				<input
					name="name"
					placeholder="الاسم"
					onChange={handleChange}
					className="w-full p-2 border"
					required
				/>
				<input
					name="email"
					type="email"
					placeholder="البريد الإلكتروني"
					onChange={handleChange}
					className="w-full p-2 border"
					required
				/>
				<input
					name="phone"
					type="text"
					placeholder="رقم الهاتف"
					onChange={handleChange}
					className="w-full p-2 border"
					required
				/>
				<textarea
					name="message"
					placeholder="الرسالة"
					onChange={handleChange}
					className="w-full p-2 border"
					required
				/>
				<button
					type="submit"
					className="bg-secondary text-white w-full rounded-md  px-4 py-2"
				>
					ارسال
				</button>
				<p>{status}</p>
			</form>
		</div>
	);
}
