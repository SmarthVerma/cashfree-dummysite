// "use client";

// import { useState } from "react";

// const PaymentButton = () => {
//   const [loading, setLoading] = useState(false);

//   const initiatePayment = async () => {
//     setLoading(true);
//     try {
//       const order_id = `order_${Date.now()}`;
//       const response = await fetch("/api/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           order_id,
//           order_amount: 100.0,
//           customer_id: "user_123",
//           customer_name: "John Doe",
//           customer_email: "john@example.com",
//           customer_phone: "9999999999",
//         }),
//       });

//       const data = await response.json();

//       if (data.payment_session_id) {
//         const cashfree = window.Cashfree({ mode: "sandbox" }); // Use 'production' in live environment
//         cashfree.checkout({
//           paymentSessionId: data.payment_session_id,
//           redirectTarget: "_self",
//         });
//       } else {
//         alert("Failed to initiate payment.");
//       }
//     } catch (error) {
//       console.error("Payment initiation failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button onClick={initiatePayment} disabled={loading}>
//       {loading ? "Processing..." : "Pay Now"}
//     </button>
//   );
// };

// export default PaymentButton;
