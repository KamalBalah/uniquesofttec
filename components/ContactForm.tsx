"use client";

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./ui/Input";
import MiniSpinner from "./ui/MiniSpinner";

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
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    // setStatus(result.success ? "تم الإرسال، سنتواصل معك قريبا" : "فشل الإرسال");
    setIsSending(false);
    // console.log(result);

    if (result.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      alert("تم إرسال رسالتك");
    } else {
      alert("فشل إرسال رسالتك");
    }
  };

  return (
    <div id="contact">
      <h2 className="text-3xl text-main text-center font-bold mb-6">
        تواصل معنا
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 bg-white/60 border-2 border-gray-100 rounded-md px-5 py-5">
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            name="name"
            id="name"
            label="الاسم"
            placeholder="الاسم"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            id="email"
            type="email"
            label="البريد الإلكتروني"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            name="phone"
            id="phone"
            placeholder="رقم الهاتف"
            label="البريد الإلكتروني"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <div>
            <label htmlFor="message" className="text-sm text-main">
              الرسالة
            </label>
            <textarea
              name="message"
              placeholder="الرسالة"
              value={formData.message}
              onChange={handleChange}
              className="p-2 border border-gray-200 text-main rounded-md focus:outline-none w-full h-28 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="bg-secondary text-white w-full rounded-md  px-4 py-2"
          >
            {isSending ? <MiniSpinner /> : "ارسال"}
          </button>
        </form>
        <div className="mx-auto ">
          <p className="text-main">أو تواصل معنا عن طريق :</p>
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
                  uniquesoft.io@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
