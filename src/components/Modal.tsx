import React from 'react'
import { Modal as ModalFlowBite } from 'flowbite-react';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface IModalProps {
  openModal: 'default' | undefined,
  setOpenModal: (value: 'default' | undefined) => void
}

function Modal(props: IModalProps) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    props.setOpenModal(undefined);
    navigate('/profile');
  };

  return (
    <>
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 2 }}>
        <ModalFlowBite
          show={props.openModal === 'default'}
          onClose={() => props.setOpenModal(undefined)}
        >
          <ModalFlowBite.Header>Payment successful</ModalFlowBite.Header>

          <ModalFlowBite.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
            </div>
          </ModalFlowBite.Body>

          <ModalFlowBite.Footer>
            <PrimaryButton onClick={handleSubmit}>
              Got it, thanks!
            </PrimaryButton>
          </ModalFlowBite.Footer>
        </ModalFlowBite>
      </motion.div>
    </>
  );
}

export default Modal;
