import { NextResponse } from "next/server";
import { stripe } from "../../../stripe";
// console.log(process.env.STRIPE_CLIENT_SECRET, "process.env.STRIPE_CLIENT_SECRET")


export async function POST(request) {

    try {
        // const stripe = await loadStripe(`${process.env.STRIPE_PUSHABLE_KEY}`);
        const { priceId } = await request.json();

        const session = await stripe.checkout.sessions.create({
            ui_emided: "embedded",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: priceId,
                }
            ],
            mode: "subscription",
            return_url: `${request.headers.get('origin')}/return?session_id={CHECKOUT_SESSION_ID}`,

        })
        return NextResponse.json({ session: session.url })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.message })
    }

}