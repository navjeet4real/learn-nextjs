"use client"

import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { useCallback, useRef, useState } from "react";

export default function EmbeddedCheckoutButton() {
    const stripePromise = loadStripe(process.env.STRIPE_PUSHABLE_KEY!);
    const [showCheckout, setShowCheckout] = useState(false);

    const modalRef = useRef<HTMLDialogElement>(null);

    const fetchClientSecret = useCallback(async () => {

        const response = await fetch("/api/embeded-checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ priceId: "price_1M9iA4HbS5sEwvqNkUjgX2P2" }),
        })
        const data = await response.json();
        return data.clientSecret

    }, [])

    const options = { fetchClientSecret }

    const handleCheckoutClick = () => {
        setShowCheckout(true);
        modalRef.current?.showModal();
    }

    const handleCloseModal = () => {
        setShowCheckout(false);
        modalRef.current?.close();
    }

    return (
        <div id="checkout" className="my-4">
            <button className="btn btn-secondary py-2 px-4 border border-red-300 rounded" onClick={handleCheckoutClick} >
                Open Modal with Embedded Checkout
            </button>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box w-100 max-w-screen-2xl">
                    <h3 className="font-bold text-lg">Embedded Checkout</h3>
                    <div className="py-4">
                        {showCheckout && (
                            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                                <EmbeddedCheckout />
                            </EmbeddedCheckoutProvider>
                        )}
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={handleCloseModal}>
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}