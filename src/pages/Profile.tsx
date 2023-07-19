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
  const [user, setUser] = useAtom(userAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [age, setAge] = useState<number>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPurchaseSuccess, _setisPurchaseSuccess] = useAtom(purchaseSuccessAtom)


  const handleSaveChanges = () => {
    setUser({
      ...user,
      username: username,
      fullname: fullname,
      age: age as number,
      email: email,
      password: password
    });
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

          <form onSubmit={handleSaveChanges}>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
              <label className="text-gray-600">Username</label>
              <input readOnly={!isEditing} defaultValue={user.username} type='text' onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
              <label className="text-gray-600">Full Name</label>
              <input
                type="text"
                defaultValue={user.fullname}
                onChange={(e) => setFullName(e.target.value)}
                className="input-field"
                readOnly={!isEditing}
              />
            </div>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
              <label className="text-gray-600">Age</label>
              <input
                type="number"
                defaultValue={user.age}
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
                defaultValue={user.email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!isEditing}
              />
            </div>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2">
              <label className="text-gray-600">Password</label>
              <input
                type="password"
                defaultValue={user.password}
                onChange={(e) => setPassword(e.target.value)}
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
          </form>

        </motion.div>
      </MainLayout>
    </>
  );
};

export default Profile;
