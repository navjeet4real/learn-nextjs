import EmbeddedCheckoutButton from "../ui/stripe/embeddedCheckoutForm";

export default function Page () {
    return (
        <div>
            <h1>Home</h1>
            <h2>Payments</h2>
            <h2>Test Message</h2> 
            <EmbeddedCheckoutButton />
        </div>
    );
}