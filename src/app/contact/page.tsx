"use client";
import { motion } from "framer-motion";
import { FormEvent, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MotionPage } from "@/components/MotionPage";
import { addFormData, getAllFormData, deleteFormData } from "@/lib/indexedDB";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (data: { user_email: string; user_message: string }) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        data,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      );
      setSuccess(true);
    } catch {
      setError(true);
    }
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const formData = {
      user_email: form.current?.user_email.value,
      user_message: form.current?.user_message.value,
    };

    if (navigator.onLine) { // Verificar si NO hay conexión en línea
      await addFormData(formData);
      alert('No hay conexión a Internet. Los datos se guardarán y se enviarán cuando haya conexión.');
      return;
    }
  
    try {
      await sendEmail(formData);
      form.current?.reset();
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    const handleOnline = async () => {
      const formDataList = await getAllFormData();
      for (const formData of formDataList) {
        await sendEmail(formData);
        await deleteFormData(formData.id!);
      }
    };

    if (navigator.onLine) {
      handleOnline();
    }

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, []);

  return (
    <MotionPage>
      <div className="h-full min-h-[calc(100vh-6rem)] lg:h-[calc(100vh-6rem)] flex flex-col gap-4 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-[calc(100vh-6rem)] lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={handleFormSubmit}
          ref={form}
          className="h-2/3 lg:h-full lg:w-1/2 bg-gradient-to-b from-gray-100 to-violet-100  rounded-xl text-lg flex flex-col gap-6 justify-center p-14"
        >
          <span>Dear Nahuel,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-blue-400 rounded font-semibold text-gray-100 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </MotionPage>
  );
}
