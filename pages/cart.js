import React, { useMemo, useState } from "react";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/utils/api";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest(`/api/orders`, {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId:res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="w-full py-5 md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            <div className="w-full max-w-[800px] mx-auto mt-3 md:mt-0 text-center">
              <div className="text-center text-black text-[24px] md:text-[30px] font-medium select-none leading-tight">
                Shopping cart
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 py-8">
              <div className="flex-[2]">
                <div className="text-md font-medium">Cart items</div>
                {cartItems?.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>

              <div className="flex-[1]">
                <div className="text-md font-medium">Summury</div>
                <div className="p-4 my-4 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between border-b pb-2">
                    <div className="text-black text-md md:text-lg font-medium uppercase">
                      Subtotal
                    </div>
                    <div className="text-black text-md font-medium">
                      MRP : &#8377;{subtotal}
                    </div>
                  </div>
                  <div className="text-sm text-black text-center mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it.
                  </div>
                </div>
                <button
                  onClick={handlePayment}
                  className="py-3 w-full bg-black text-white text-md font-medium cursor-pointer transition-transform hover:bg-black/[0.8] rounded-full active:scale-95 mb-2 flex items-center justify-center gap-2"
                >
                  Checkout
                  {loading && <img src="/spinner.svg" alt="loader" />}
                </button>
                <Link
                  href={`/product/${
                    cartItems?.[cartItems.length - 1]?.attributes?.slug
                  }`}
                >
                  <button className="py-3 w-full bg-black text-white text-md font-medium cursor-pointer transition-transform hover:bg-black/[0.8] rounded-full active:scale-95">
                    Continue shopping
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}

        {cartItems.length < 1 && (
          <>
            {/* empty cart */}
            <div className="flex flex-[2] flex-col items-center pb-[50px] md:-mt-14">
              <Image
                src="/empty-cart.jpg"
                width={300}
                height={300}
                className="w-[300px] md:w-[400px]"
                alt="empty"
              />
              <div className="text-xl font-medium text-black mb-5">
                Your cart is empty
              </div>
              <Link
                href="/"
                className="px-8 text-center py-3 bg-black text-white text-md font-medium rounded-full cursor-pointer transition-transform active:scale-95"
              >
                Continue shopping
              </Link>
            </div>
            {/* empty cart */}
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
