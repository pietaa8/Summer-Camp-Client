import { useStripe, CardElement, useElements} from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CheckOutForm = ({ classId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
      });

      if (error) {
        console.log('error', error);
      } else {
        console.log('payment method', paymentMethod);
        // Make an API request to update the available seats for the class
        await axiosSecure.patch(`/classes/${classId}`, { seats: -1 });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <form className="w-3/4 m-8" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#9e2146'
            }
          }
        }}
      />
      <button
        className="btn btn-outline btn-primary mt-4 btn-sm"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};


export default CheckOutForm;