import { userAtom } from '@/atom';
import Modal from '@/components/Modal';
import PaymentMethodType from '@/utils/types/payment-method';
import { useAtom } from 'jotai';
import React, { ChangeEvent, FormEvent, useState } from 'react';

type ModalType = 'default' | undefined;


const TopUp: React.FC<{}> = () => {
  const [amount, setAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('');
  const [user, setUser] = useAtom(userAtom);
  const [openModal, setOpenModal] = useState<ModalType>(undefined);

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
    setOpenModal('default');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {/* modal when payment success/fail */}
      <Modal {...{ openModal, setOpenModal }} />

      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
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
  );
};

export default TopUp;
