import {useStripe, CardElement,useElements} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CheckOutForm = ({price}) => {
    const stripe=useStripe();
    const elements=useElements();
    const [axiosSecure]=useAxiosSecure();

    const [clientSecret,setClientSecret]=useState('');

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price})
        .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })

    },[price,axiosSecure])

    const handleSubmit=async(event)=>{
        event.preventDefault();

        if(!stripe || elements){
            return
        }

        const card=elements.getElement(CardElement);
        if(card==null){
            return
        }
       
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error',error)
        }
        else{
            console.log('payment method',paymentMethod);
        }

    }
    return (
        <form className='w-3/4 m-8' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-outline btn-primary mt-4 btn-sm" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
    );
};

export default CheckOutForm;