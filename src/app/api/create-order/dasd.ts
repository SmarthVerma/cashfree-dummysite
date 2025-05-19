// import { NextResponse } from "next/server";
// import { Cashfree } from "cashfree-pg";

// Cashfree.XClientId = process.env.CASHFREE_APP_ID;
// Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
// Cashfree.XEnvironment.SANDBOX; // Use PRODUCTION in live environment

// export async function POST(req) {
//   try {
//     const {
//       order_id,
//       order_amount,
//       customer_id,
//       customer_name,
//       customer_email,
//       customer_phone,
//     } = await req.json();

//     const orderData = {
//       order_id,
//       order_amount,
//       order_currency: "INR",
//       customer_details: {
//         customer_id,
//         customer_name,
//         customer_email,
//         customer_phone,
//       },
//       order_meta: {
//         return_url: `http://localhost:3000/payment-success?order_id=${order_id}`,
//       },
//       order_note: "Test Order",
//     };

//     const response = await Cashfree.PGCreateOrder("2023-08-01", orderData);
//     return NextResponse.json(response.data);
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
