import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { purchaseSuccessAtom, userAtom } from '@/atom';
import formatRupiah from '@/utils/format-rupiah';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import Modal from '@/components/Modal';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [user,] = useAtom(userAtom);
  const [, setUsername] = useState(user.username);
  const [, setFullName] = useState(user.fullname);
  const [, setAge] = useState(user.age);
  const [, setEmail] = useState(user.email);
  const [, setPassword] = useState(user.password);
  const [isPurchaseSuccess,] = useAtom(purchaseSuccessAtom)



  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  const handleTopUp = () => {
    navigate(`/profile/top-up`);
  };

  return (
    <>
      <MainLayout page='profile'>

        {isPurchaseSuccess ?
          <Modal
            description='Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.'
            title='Success'
            show={true} />
          : null
        }

        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          className="container h-screen p-8 mx-auto mt-12"
        >
          <h1 className="mb-4 text-2xl font-semibold">{`Hello ${user.username}`}</h1>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
            <label className="text-gray-600">Username</label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              readOnly={!isEditing}
            />
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
            <label className="text-gray-600">Full Name</label>
            <input
              type="text"
              value={user.fullname}
              onChange={(e) => setFullName(e.target.value)}
              className="input-field"
              readOnly={!isEditing}
            />
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
            <label className="text-gray-600">Age</label>
            <input
              type="number"
              value={user.age}
              onChange={(e) => setAge(parseInt(e.target.value, 10))}
              className="input-field"
              readOnly={!isEditing}
            />
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
            <label className="text-gray-600 ">Balance</label>
            <input type="text" value={formatRupiah(user.balance)} readOnly />
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={!isEditing}
            />
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
            <label className="text-gray-600">Password</label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              readOnly={!isEditing}
            />
          </div>

          {!isEditing && (
            <button
              className="px-4 py-2 mr-4 text-white bg-blue-500 rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}

          {isEditing && (
            <div>
              <button
                className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          )}

          <button
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
            onClick={handleTopUp}
          >
            Top Up Balance
          </button>
        </motion.div>
      </MainLayout>
    </>
  );
};

export default Profile;
