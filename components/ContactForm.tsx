"use client";

import Image from "next/image";
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    console.log(result);

    if (result.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div id="contact" className="bg-slate text-white pt-10 pb-10">
      <h2 className="text-3xl text-green text-center font-bold mb-6">
        تواصل معنا
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-3 max-w-lg mx-auto">
          <input
            name="name"
            placeholder="الاسم"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md "
            required
          />
          <input
            name="email"
            type="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md "
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="رقم الهاتف"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md "
            required
          />
          <textarea
            name="message"
            placeholder="الرسالة"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-28 rounded-md p-2 border resize-none"
            required
          />
          <button
            type="submit"
            className="bg-secondary text-white w-full rounded-md  px-4 py-2"
          >
            ارسال
          </button>
          <p className="text-center">{status}</p>
        </form>
        <div className="mx-auto">
          <p>أو تواصل معنا عن طريق :</p>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex mt-2">
              <a
                href="https://api.whatsapp.com/send?phone=967782804030&text=مرحبا%20UniqueSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green text-white px-4 py-2 rounded-md flex items-center space-x-2"
              >
                <Image
                  width={10}
                  height={10}
                  src="whatsapp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
                <span style={{ direction: "ltr" }}>967 782 804 030</span>
              </a>
            </div>
            <div className="flex mt-2">
              <a
                href="mailto:uniquesoft.ye@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-4 py-2 rounded-md flex items-center space-x-2"
              >
                <Image
                  width={10}
                  height={10}
                  src="mail.svg"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
                <span style={{ direction: "ltr" }}>
                  uniquesoft.ye@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
