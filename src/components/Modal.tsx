import { purchaseSuccessAtom } from '@/atom';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { useState } from 'react';

interface IModalProps {
    show: boolean;
    title: string;
    description: string;
}

const Modal: React.FC<IModalProps> = ({ show, title, description }) => {
    const [isShow, setIsShow] = useState<boolean>(show);
    const [, setIsPurchaseSuccess] = useAtom(purchaseSuccessAtom)

    function handleClose() {
        setIsShow(false)
        setIsPurchaseSuccess(false)
    }

    return (
        <div
            className={`fixed ${isShow ? 'block' : 'hidden'} inset-0 flex items-center justify-center font-inter z-50`}>
            <div className="fixed inset-0 z-50 bg-black opacity-50"></div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ease: 'easeInOut', type: 'spring' }}
                className="relative z-50 p-6 bg-white rounded-lg">
                <div className="mb-6">
                    <h2 className="mb-2 text-xl font-bold">{title}</h2>
                    <p className="text-base text-gray-500">{description}</p>
                </div>
                <div className="flex justify-end">
                    <button
                        className="px-4 py-2 text-white bg-gray-500 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
