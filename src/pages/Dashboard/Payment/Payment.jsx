import CheckOutForm from "./CheckOutForm";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cls, setCls] = useState([]);
  
    useEffect(() => {
      fetch(`https://assignment-twelve-server-eight.vercel.app/selectedclasses`)
        .then(res => res.json())
        .then(data => setCls(data));
    }, []);
  
    return (
      <div>
        <h2 className="text-3xl text-center">Pay For Your Classes</h2>
        {cls.map(classItem => (
          <Elements stripe={stripePromise} key={classItem._id}>
            <CheckOutForm classId={classItem._id} />
          </Elements>
        ))}
      </div>
    );
  };
  
  export default Payment;
