"use client";
import PaymentButton from "@/components/PaymentButton";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="flex flex-col items-center bg-amber-200 justify-center min-h-screen p-4">
      <div className="max-w-xl text-center bg-white p-6 rounded shadow-md mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Educational Demo</h1>
        <p className="text-gray-700">
          This website is created solely for educational purposes. It demonstrates how to integrate and use CashFree APIs in a web application. 
          All transactions are simulated and not for real-world financial use.
        </p>
      </div>
      <PaymentButton />
    </div>
  );
}
