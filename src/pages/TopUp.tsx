import { purchaseSuccessAtom, userAtom } from '@/atom';
import Modal from '@/components/Modal';
import MainLayout from '@/layouts/MainLayout';
import PaymentMethodType from '@/utils/types/payment-method';
import { useAtom } from 'jotai';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const TopUp: React.FC<{}> = () => {
  const [amount, setAmount] = useState<string>('');
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('');
  const [user, setUser] = useAtom(userAtom);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [_isPurchaseSuccess, _setIsPurchaseSuccess] = useAtom(purchaseSuccessAtom)

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value as PaymentMethodType);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser({
      ...user,
      balance: user.balance + parseInt(amount, 10),
    });
    //todo show modal
    setOpenModal(true)
    setTimeout(() => {
      navigate(`/profile`)
    }, 3000)
  };

  return (
    <MainLayout>
      <div className="flex justify-center h-screen mt-24 px-4">

        {openModal ?
          <Modal
            description='Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.'
            title='Success'
            show={true} />
          : null
        }

        {/* Card */}
        <div className="w-full max-h-80 max-w-md p-6 bg-white rounded shadow-md">
          <h2 className="mb-4 text-2xl">Top Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="amount" className="block mb-2 text-gray-700">
                Amount (IDR)
              </label>
              <input
                type="number"
                id="amount"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={amount}
                onChange={handleAmountChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="paymentMethod" className="block mb-2 text-gray-700">
                Payment Method
              </label>

              <select
                id="paymentMethod"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="mastercard">Mastercard</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Top Up
              </button>
            </div>
          </form>
        </div>


      </div>
    </MainLayout>
  );
};

export default TopUp;
