import React, { useState } from 'react'
import { Table } from 'flowbite-react';
import { useAtom } from 'jotai';
import { purchaseSuccessAtom, transactionAtom } from '@/atom';
import formatRupiah from '@/utils/format-rupiah';
import MainLayout from '@/layouts/MainLayout';
import Modal from '@/components/Modal';
import { motion } from 'framer-motion';

export default function Transactions() {

    const [transactions, setTransactions] = useAtom(transactionAtom);
    const [isPurchaseSuccess,] = useAtom(purchaseSuccessAtom);
    const [movieId, setMovieId] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleCancel = (transactionIdToDelete: number) => {
        setMovieId(transactionIdToDelete)
        const updatedTransactions = transactions.filter(
            (transaction) => transaction.id !== transactionIdToDelete
        );
        setTransactions(updatedTransactions);
        setIsOpenModal(false)
    };

    const handleModal = (id: number) => {
        setIsOpenModal(true)
        setMovieId(id)
    }

    return (
        <MainLayout page='transactions'>

            {isPurchaseSuccess ?
                <Modal
                    description='Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.'
                    title='Success'
                    show={true} />
                : null
            }

            {/* confirmation delete order modal */}
            <div
                className={`fixed ${isOpenModal ? 'block' : 'hidden'} inset-0 flex font-inter items-center justify-center z-50`}>
                <div className="fixed inset-0 z-50 bg-black opacity-50"></div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ ease: 'easeInOut', type: 'spring' }}
                    className="relative z-50 p-6 bg-white rounded-lg">
                    <div className="mb-6">
                        <h2 className="mb-2 text-xl font-bold">You are about to cancel your order</h2>
                        <p className="text-base text-gray-500">Are you sure to delete this order?</p>
                    </div>
                    <div className="flex justify-start">
                        <button
                            className="px-4 py-2 text-white bg-red-500 rounded"
                            onClick={() => handleCancel(movieId)}
                        >
                            Delete
                        </button>
                        <button
                            className="px-4 py-2 text-gray-900 rounded hover:text-gray-500"
                            onClick={() => setIsOpenModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </motion.div>
            </div>


            <div className='h-screen mt-12 overflow-x-scroll font-inter'>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            Movie
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Tickets
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Price
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Total
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">
                                Edit
                            </span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {transactions.map((t) => (
                            <Table.Row key={t.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {t.movieName}
                                </Table.Cell>
                                <Table.Cell>
                                    {t.tickets}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatRupiah(t.price)}
                                </Table.Cell>
                                <Table.Cell>
                                    {formatRupiah(t.total)}
                                </Table.Cell>
                                <Table.Cell>
                                    <p
                                        className="font-medium text-red-600 cursor-pointer hover:underline dark:text-cyan-500"
                                        onClick={() => handleModal(t.id)}>
                                        Cancel
                                    </p>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </MainLayout>
    )
}
