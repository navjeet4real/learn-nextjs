const stripe = require("stripe")(process.env.STRIPE_CLIENT_SECRET);

async function getSession(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId!);
  return session;
}

export default async function CheckoutReturn({ searchParams }) {
  const sessionId = searchParams.session_id;
  const session = await getSession(sessionId);

  console.log(session);

  if (session?.status === "open") {
    return <p>Payment did not work.</p>;
  }

  if (session?.status === "complete") {
    return (
      <h3>
        We appreciate your business! Your Stripe customer ID is:
        {(session.customer as string)}.
      </h3>
    );
  }

  return null;
}